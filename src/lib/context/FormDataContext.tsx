'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { z } from "zod";
import { formDataSchema } from "@/lib/schema/FormSchema";

type FormDataType = z.infer<typeof formDataSchema>;

interface FormDataContextType {
  formData: FormDataType;
  setFormData: (data: FormDataType) => void;
}

// Create Context
const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

// Provider Component
export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
