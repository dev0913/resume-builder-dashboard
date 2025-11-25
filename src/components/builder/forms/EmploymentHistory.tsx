
"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useFieldArray } from "react-hook-form";
import { ChevronDown, PlusIcon, Trash, Trash2 } from "lucide-react";
import FormField from "./fields/FormField";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useFormData } from "@/lib/context/FormDataContext";
import { DatePicker } from "@/components/ui/custom/datePicker";
import FormTrigger from "./fields/FormTrigger";






function EmploymentHistory() {

    const { fields, append, remove } = useFieldArray({

        name: "employmentHistory", // Matches the form schema
    });

    const { formData } = useFormData();



    return (

        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div>
                <h1 className='text-lg'>
                    Employment History
                </h1>
                <p className='text-sm text-gray-600 w-[90%]'>
                    Show your relevant experience (last 10 years). Use Bullet  Points to note your achievements, if possible
                    use numbers/facts (Achieved X, measured by Y, by doing Z).
                </p>
            </div>
            <div>

                <Accordion type="single" collapsible>

                    {fields.map((field, index) => (




                        <AccordionItem value={`item-${field.id}`} key={field.id} className="border border-cardOutline px-2 rounded">



                            <AccordionTrigger className='flex justify-between'>
                                <FormTrigger name={`employmentHistory.${index}.company`} />

                                <div className='flex justify-end'>

                                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mr-2 " />
                                    <Trash
                                    strokeWidth={2}
                                    width={22}
                                    color="#A5A5A5"
                                    onClick={() => remove(index)}
                                    className="cursor-pointer"
                                />
                                </div>
                            </AccordionTrigger>


                            <AccordionContent>

                                <div className='flex flex-col p-3 px-4'>

                                    <div className='mt-1 flex space-x-9 p-2'>
                                        <div className='flex flex-col w-[50%]'>
                                            <FormField name={`employmentHistory.${index}.jobTitle`} label="JOB TITLE" />
                                        </div>
                                        <div className='flex flex-col w-[50%]'>
                                            <FormField name={`employmentHistory.${index}.company`} label="COMPANY" />
                                        </div>
                                    </div>
                                    <div className='mt-1 flex space-x-12 p-2'>
                                        <div className='flex w-[65%] space-x-2'>



                                            <FormField name={`employmentHistory.${index}.startDate`} label="START DATE" component={DatePicker} />
                                            <FormField name={`employmentHistory.${index}.endDate`} label="END DATE" component={DatePicker} />

                                        </div>
                                        <div className=''>
                                            <FormField name={`employmentHistory.${index}.city`} label="CITY" />
                                        </div>
                                    </div>
                                    <div className='mx-2'>

                                        <FormField name={`employmentHistory.${index}.description`} label="DESCRIPTION" component={Textarea} />
                                    </div>
                                    <div className='flex justify-between pt-1 text-xs font-thin p-2'>
                                        <p className=''>Recruiter Tip: write 50-200 characters to increase interview chances</p>
                                        <p>{formData?.employmentHistory?.[index]?.description?.length || 0}/200+</p>
                                    </div>
                                </div>

                            </AccordionContent>


                        </AccordionItem>



                    ))}


                </Accordion>



            </div>
            <div className='flex items-center gap-2 cursor-pointer w-full'>
                <PlusIcon />
                <span>
                    <p className=' hover:border-b'
                        onClick={() => append({ jobTitle: "", company: "", startDate: new Date(), endDate: new Date(), city: "", description: "" })}>
                        Add More Links
                    </p>

                </span>
            </div>
        </div>
    )
}

export default EmploymentHistory
