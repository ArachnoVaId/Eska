// lib/formSchemaStore.ts
import { fetchFormSchema } from "@/schemas/registration";
import { FormSchemaField } from "@/schemas/registration";

let _formSchema: Record<string, FormSchemaField[]> | null = null;

export const loadFormSchema = async () => {
  if (!_formSchema) {
    _formSchema = await fetchFormSchema();
  }
  return _formSchema;
};

export const getFormSchema = (): Record<string, FormSchemaField[]> => {
  if (!_formSchema) {
    throw new Error("Form schema not loaded yet");
  }
  return _formSchema;
};
