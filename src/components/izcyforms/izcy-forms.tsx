import * as z from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import TitleWrapper from "@/components/title-wrapper";

import {
  FormSchemaField,
  fetchFormSchema,
  groupFieldsBySection,
  buildZodSchema,
} from "@/schemas/registration";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import FileInput from "@/components/izcyforms/file-input";
import { api } from "@/lib/axiosSetup";
import { PendingTransactionResponseItem } from "@/types/midtrans";
import { cancelPayment, initiatePayment } from "@/lib/midtransSetup";
import RegistrationCard from "../registration/card";
import Background from "../background";

interface IzcyFormsInterface {
  fieldComponents: Record<string, React.FC | undefined>;
  competitionName: string;
  formTitle: string;
  color?: string;
}

const IzcyForms = ({
  fieldComponents,
  competitionName,
  formTitle,
  color = "hijau-ideas",
}: IzcyFormsInterface) => {
  // Classnames
  const spacing = "space-y-4";
  const label = "text-putih max-sm:text-sm max-lg:text-lg text-2xl";
  const input = "bg-[#D9D9D9] max-sm:text-sm max-lg:text-lg text-2xl";
  const dropdown =
    "text-backgroundColor border-2 bg-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau-ideas focus:border-transparent p-1 text-lg";

  // Schema and Form Data
  const [schema, setSchema] = useState<z.ZodObject<z.ZodRawShape> | null>(null);
  const typedSchema = schema as z.ZodObject<z.ZodRawShape>;
  type DynamicFormValues = z.infer<typeof typedSchema>;

  const [fields, setFields] = useState<FormSchemaField[]>([]);
  const [groupedFields, setGroupedFields] = useState<
    Record<string, FormSchemaField[]>
  >({});
  const [selectedFiles, setSelectedFiles] = useState<Record<string, File[]>>(
    {},
  );

  const form = useForm<DynamicFormValues>({
    resolver: schema ? zodResolver(typedSchema) : undefined,
    mode: "onChange",
  });

  const { register, handleSubmit, reset, setValue } = form;

  // System
  const [isLoading, setIsLoading] = useState(false);

  // Midtrans
  const [pendingTransactions, setPendingTransactions] = useState<
    PendingTransactionResponseItem[]
  >([]);
  const [snapInitialized, setSnapInitialized] = useState(false);

  // Initializer
  useEffect(() => {
    let isError = false;
    const runAll = async () => {
      toast.loading("Preparing your form...");

      const formPromise = (async () => {
        try {
          const fetched = await fetchFormSchema();
          const competitionFields = fetched[competitionName];
          const validationSchema = buildZodSchema(fetched, competitionName);

          setFields(competitionFields);
          setSchema(validationSchema);
          setGroupedFields(groupFieldsBySection(competitionFields));

          toast.success("Form loaded successfully");
        } catch (err) {
          if (axios.isAxiosError(err)) {
            toast.error("Failed to load form: " + err.message);
          } else {
            toast.error("Failed to load form");
          }
          isError = true;
        }
      })();

      const paymentPromise = (async () => {
        try {
          const res = await api.get("/api/midtrans/get-client");
          const clientKey = res.data.client_key;
          if (!clientKey) {
            toast.error("Payment not activated");
            return;
          }
          if (!window.snap) {
            const script = document.createElement("script");
            script.src =
              import.meta.env.VITE_MIDTRANS_IS_PRODUCTION === "true"
                ? "https://app.midtrans.com/snap/snap.js"
                : "https://app.sandbox.midtrans.com/snap/snap.js";
            script.setAttribute("data-client-key", clientKey);
            script.onload = () => setSnapInitialized(true);
            script.onerror = () => toast.error("Snap load failed");
            document.head.appendChild(script);
          } else {
            setSnapInitialized(true);
          }

          toast.success("Payment system loaded successfully");
        } catch (error) {
          if (axios.isAxiosError(error)) {
            toast.error("Payment system error: " + error.message);
          } else {
            toast.error("Payment system error");
          }
          isError = true;
        }
      })();

      const pendingPromise = (async () => {
        try {
          const res = await api.get("/api/midtrans/pending", {
            params: { _: Date.now() },
          });
          const data = res.data;
          if (data.success) {
            setPendingTransactions(data.pendingTransactions);
            if (data.pendingTransactions.length > 0) {
              toast.success(
                `Found ${data.pendingTransactions.length} pending transaction(s).`,
              );
            } else {
              toast.success("No pending transactions.");
            }
          } else throw new Error();
        } catch (error) {
          if (axios.isAxiosError(error)) {
            toast.error("Pending transactions error: " + error.message);
          } else {
            toast.error("Pending transactions error");
          }
          isError = true;
        }
      })();

      await Promise.allSettled([formPromise, paymentPromise, pendingPromise]);

      toast.dismiss();
      if (isError) {
        toast.error("Failed to load form. Please contact admin!");
        return;
      }
      toast.success("Your form is ready to be filled");
    };

    runAll();
  }, [competitionName]);

  // Helper Functions
  const callbacks = {
    showError: (error: string) => {
      toast.error(error);
    },
    showSuccess: (result: string) => {
      toast.success(result);
    },
    showLoading: (text: string) => {
      toast.loading(text);
    },
    dismissLoading: () => {
      setIsLoading(false);
      toast.dismiss();
    },
  };

  const handleFileChange = (fieldName: string, file: File) => {
    setSelectedFiles((prev) => ({ ...prev, [fieldName]: [file] }));
    setValue(fieldName, file, { shouldValidate: true, shouldDirty: true });
  };

  // Functions
  const onSubmit = async (data: DynamicFormValues) => {
    const toastId = toast.loading("Submitting Data...");
    setIsLoading(true);

    const formData = new FormData();

    for (const field of fields) {
      const value = data[field.name];

      if (value !== undefined && value !== null) {
        if (field.type === "file" && selectedFiles[field.name]) {
          selectedFiles[field.name].forEach((file) => {
            formData.append(field.name, file);
          });
        } else {
          formData.append(field.name, value);
        }
      }
    }

    try {
      const res = await api.post(`/api/event/register`, formData, {
        params: { competitionName },
      });

      const { snapToken } = res.data;
      toast.dismiss();

      if (!snapToken) {
        toast.success("Registration successful!", { id: toastId });
      } else {
        initiatePayment({
          token: snapToken,
          snapInitialized,
          callbacks,
        });
      }

      reset();
      setSelectedFiles({});
    } catch (err) {
      toast.dismiss(toastId);
      if (axios.isAxiosError(err)) {
        toast.error("Registration failed: " + err.response?.data.message);
      } else {
        toast.error("Registration failed: " + err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onInvalid = (errors: FieldErrors<DynamicFormValues>) => {
    const firstErrorKey = Object.keys(errors)[0];
    // get the object label from key
    const errorLabel = fields.find(
      (field) => field.name === firstErrorKey,
    )?.label;

    const el = document.querySelector(`[name="${firstErrorKey}"]`);

    if (el && "scrollIntoView" in el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      (el as HTMLElement).focus(); // optional: also focus the field
    }

    toast.error("Please complete your: " + errorLabel + "!");
  };

  if (!schema) return <></>;

  return (
    <section className="relative w-full bg-[#D37F03]">
      <Background/>
      <div className="relative min-h-screen z-50 flex flex-col space-y-12 justify-center items-center py-[200px]">
        <h2 className="font-damn max-sm:text-3xl max-lg:text-5xl max-xl:text-8xl text-9xl text-center text-putih">
          <TitleWrapper
            label={formTitle}
            color={color}
            variant="top-left"
            className="px-20"
          />
        </h2>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="space-y-16 flex flex-col items-center"
          >
            {pendingTransactions.length == 0 &&
              Object.entries(groupedFields).map(([section, fields]) => (
                <RegistrationCard key={section} title={section}>
                  <div className="space-y-8">
                    {fields.map((field) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name.toString()}
                        render={({ field: fieldProps }) => (
                          <FormItem className={spacing}>
                            <FormLabel className={label}>
                              {field.label}
                            </FormLabel>
                            {Object.entries(fieldComponents).map(
                              ([key, Component]) => {
                                if (field.name === key && Component) {
                                  return <Component />;
                                }
                                return null;
                              },
                            )}
                            <FormControl>
                              {field.type === "file" ? (
                                <FileInput
                                  fieldName={field.name}
                                  fileName={
                                    selectedFiles[field.name]?.[0]?.name ?? ""
                                  }
                                  disabled={isLoading}
                                  register={register(field.name.toString())}
                                  accept={field.accept}
                                  onFileChange={handleFileChange}
                                />
                              ) : field.type === "select" ? (
                                <select
                                  id={field.name}
                                  disabled={isLoading}
                                  className={dropdown}
                                  value={fieldProps.value ?? ""}
                                  onChange={fieldProps.onChange}
                                  onBlur={fieldProps.onBlur}
                                  name={fieldProps.name}
                                  ref={fieldProps.ref}
                                >
                                  {field.options?.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <Input
                                  id={field.name}
                                  type={field.type}
                                  placeholder={field.label}
                                  className={input}
                                  disabled={isLoading}
                                  value={fieldProps.value ?? ""}
                                  onChange={fieldProps.onChange}
                                  onBlur={fieldProps.onBlur}
                                  name={fieldProps.name}
                                  ref={fieldProps.ref}
                                />
                              )}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </RegistrationCard>
              ))}

            <Button
              variant={color === "gmbcc" ? "birucyanHover" : "hijauIdeasHover"}
              size="icon"
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
              hidden={pendingTransactions.length > 0}
            >
              <p className="text-putih font-semibold text-4xl">Submit</p>
            </Button>

            {/* Make a notification card that there's pending transaction */}
            {pendingTransactions.length > 0 && (
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <h2 className="text-putih font-semibold text-4xl">
                    You Have Pending Transactions
                  </h2>
                  <p className="text-putih font-semibold text-2xl">
                    Please complete your payment
                  </p>
                </div>
                {/* Show pending transactions */}
                {pendingTransactions.map((tx) => (
                  <div key={tx.order_id} className="flex gap-4">
                    <Button
                      variant="biruMuda"
                      size="icon"
                      className="cursor-pointer"
                      disabled={isLoading}
                      type={"button"}
                      onClick={() =>
                        initiatePayment({
                          token: tx.snap_token,
                          snapInitialized,
                          callbacks,
                        })
                      }
                    >
                      <p className="text-putih font-semibold text-4xl">
                        Resume Transaction
                      </p>
                    </Button>
                    <Button
                      variant="hijauHover"
                      size="icon"
                      className="cursor-pointer"
                      disabled={isLoading}
                      type={"button"}
                      onClick={() =>
                        cancelPayment({
                          order_id: tx.order_id,
                          callbacks,
                        })
                      }
                    >
                      <p className="text-putih font-semibold text-4xl">
                        Cancel
                      </p>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </form>
        </Form>
      </div>
    </section>
  );
};

export default IzcyForms;
