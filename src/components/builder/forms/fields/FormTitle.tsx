import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

import { FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";




interface FormTitleProps {
  name: string;
  label?: string;
  placeholder?: string;
  


}

export default function FormTitle({
  name,
  label,
  placeholder = "",

   
}: FormTitleProps) {
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
                placeholder={placeholder}
                className='text-white border-none font-bold max-w-36 no-focus'
              />
            
          </FormControl>
          <FormMessage className="text-xs">{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}