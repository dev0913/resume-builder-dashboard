import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";

import { DatePicker } from "@/components/ui/custom/datePicker";





interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string

  component?: React.ElementType; // Allows custom ShadCN components
}

export default function FormField({
  name,
  label,
  type,
  placeholder = "",

  component: Component = Input, 
}: FormFieldProps) {
  const { control } = useFormContext();
  

  
  return (
    <Controller
      name={name}
      control={control}
      
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel className={`${fieldState.error ? "text-red-500" : ""}`}>{label}</FormLabel>}
          <FormControl>
          {Component === DatePicker ? (
              <DatePicker {...field} onChange={(date) => field.onChange(date?.toDateString() || "")}/>
            ) : (
              <Component
                {...field}
                id={name}
                placeholder={placeholder}
                type={type}
                
                className={`${
                  Component === Textarea
                    ? "min-h-60 bg-innerCard border border-cardOutline focus:gradient-border focus:outline-none text-white p-2 rounded"
                    : Component === Input
                    ? "bg-innerCard border border-cardOutline focus:gradient-border focus:outline-none text-white p-2 rounded"
                    : ""
                } ${fieldState.error ? "border-red-500" : ""}`}
             
              />
              )}
          </FormControl>
          <FormMessage className="text-xs">{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}