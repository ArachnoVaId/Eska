import { api } from "@/lib/axiosSetup";
import { z } from "zod";

type BaseField<Name extends string = string> = {
  name: Name;
  label: string;
  required?: boolean;
  group?: string;
  validation: z.ZodTypeAny;
};

type TextValidation = {
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
  requiredMessage?: string;
};

type FileValidation = {
  fileSizeLimitMB?: number;
  fileType?: string; // MIME regex pattern
};

type InputField<Name extends string = string> = BaseField<Name> & {
  type: "text" | "select" | "tel" | "email";
  options?: { value: string; label: string }[];
  validation: TextValidation;
};

type FileField<Name extends string = string> = BaseField<Name> & {
  type: "file";
  accept?: string;
  validation: FileValidation;
};

export type FormSchemaField = InputField | FileField;

export type RawInputField = Omit<InputField, "validation"> & {
  validation: TextValidation;
};

export type RawFileField = Omit<FileField, "validation"> & {
  validation: FileValidation;
};

export type RawFormSchemaField = RawInputField | RawFileField;

export type SchemaResponse = Record<string, RawFormSchemaField[]>;

export const groupFieldsBySection = (fields: FormSchemaField[]) => {
  const sectionMap: Record<string, FormSchemaField[]> = {};

  fields.forEach((field) => {
    const section = field.group || "Other"; // ✅ Use `group` or fallback

    if (!sectionMap[section]) {
      sectionMap[section] = [];
    }

    sectionMap[section].push(field);
  });

  return sectionMap;
};

export function buildZodSchema(
  formSchema: Record<string, FormSchemaField[]>,
  competitionName: string
) {
  const groupedFields = groupFieldsBySection(formSchema[competitionName]);

  const shape: Record<string, z.ZodTypeAny> = {};

  for (const fields of Object.values(groupedFields)) {
    for (const field of fields) {
      shape[field.name] = field.validation;
    }
  }

  return z.object(shape);
}

const buildZodValidator = (field: RawFormSchemaField): z.ZodTypeAny => {
  const { required, type, validation } = field;

  if (type === "file") {
    const fileValidation = validation as FileValidation | undefined;

    const validator: z.ZodType<File> = z.instanceof(File).refine(
      (file) => {
        if (!file) return false;
        return (
          (!fileValidation?.fileSizeLimitMB ||
            file.size <= fileValidation.fileSizeLimitMB * 1024 * 1024) &&
          (!fileValidation?.fileType ||
            new RegExp(fileValidation.fileType).test(file.type))
        );
      },
      {
        message: `File is not valid${
          fileValidation?.fileSizeLimitMB
            ? `, max size of ${fileValidation?.fileSizeLimitMB}MB`
            : ""
        }`
      }
    );

    return required ? validator : validator.optional();
  }

  let schema: z.ZodString = z.string();

  if (!validation) {
    return required ? schema : schema.optional();
  }

  const textValidation = validation as TextValidation;

  if (textValidation.minLength)
    schema = schema.min(
      textValidation.minLength,
      textValidation.requiredMessage
    );

  if (textValidation.maxLength)
    schema = schema.max(
      textValidation.maxLength,
      textValidation.requiredMessage
    );

  if (textValidation.pattern)
    schema = schema.regex(
      typeof textValidation.pattern === "string"
        ? new RegExp(textValidation.pattern)
        : textValidation.pattern,
      textValidation.requiredMessage
    );

  if (type === "email") {
    schema = z
      .string()
      .email(textValidation.requiredMessage || "Email tidak valid");
  }

  if (type === "tel" && textValidation.pattern) {
    schema = z
      .string()
      .regex(
        new RegExp(textValidation.pattern),
        textValidation.requiredMessage
      );
  }

  return required ? schema : schema.optional();
};

export const fetchFormSchema = async (): Promise<
  Record<string, FormSchemaField[]>
> => {
  const res = await api.get<SchemaResponse>("/api/event/schema");

  if (res.status !== 200) {
    throw new Error("Failed to fetch form schema");
  }

  const rawSchema = res.data;

  const result = {} as Record<string, FormSchemaField[]>;
  (Object.entries(rawSchema) as [string, RawFormSchemaField[]][]).forEach(
    ([competition, fields]) => {
      result[competition] = fields.map((field) => ({
        ...field,
        validation: buildZodValidator(field)
      }));
    }
  );

  return result;
};
