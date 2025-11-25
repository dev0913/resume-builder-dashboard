import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { useState } from "react";



interface FormFileProps {
  name: string;
  label?: string;
  placeholder?: string;
  

// Allows custom ShadCN components
}

export default function FormFile({
  name,
  label,
  
  placeholder = "",

   
}: FormFileProps) {
  const { control } = useFormContext();


  return (
    <Controller
      name={name}
      control={control}
      
      render={({ field: {value, ...fieldValues}, fieldState }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
          
              <Input
                {...fieldValues}
                id={name}
                type="file"
                accept="image/*"
         
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0] || null
                  fieldValues.onChange(file)
                  
                }} 
                className={`text-sm border-none ${fieldState.error ? "border-red-500" : ""}`}
              />
            
          </FormControl>
          <FormMessage className="text-xs">{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}