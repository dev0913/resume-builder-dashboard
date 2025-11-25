import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { useEffect } from "react";
import { DatePicker } from "@/components/ui/custom/datePicker";





interface FormFieldProps {
  name: string;
  label?: string;

}

export default function FormTrigger({
  name,
  label,
   
}: FormFieldProps) {
  const { control } = useFormContext();

  
  return (
    <Controller
      name={name}
      control={control}
      
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
         
              <Input
                {...field}
                id={name}
                placeholder="(untitled)"
                className="border-none min-w-80 no-focus cursor-pointer"
                readOnly
              />
              
          </FormControl>
          <FormMessage className="text-xs">{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}