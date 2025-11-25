"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    value?: Date | undefined;
    onChange?: (date: Date | undefined) => void;
  }

  export function DatePicker({ value, onChange }: DatePickerProps) {


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          
          className={cn(
            "w-[200px] justify-start text-left font-normal dark:bg-innerCard dark:text-white border border-cardOutline focus:gradient-border focus:outline-none",
            !value && "text-muted-foreground"
          )}
        > 
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value || undefined}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
