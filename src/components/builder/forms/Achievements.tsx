"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useFieldArray } from "react-hook-form";
import { ChevronDown, PlusIcon, Trash } from "lucide-react";
import FormField from "./fields/FormField";
import { Textarea } from "@/components/ui/textarea";
import { useFormData } from "@/lib/context/FormDataContext";
import { DatePicker } from "@/components/ui/custom/datePicker";
import FormTrigger from "./fields/FormTrigger";



function Achievements() {


    const { fields, append, remove } = useFieldArray({
  
        name: "achievements", // Matches the form schema
    });

    const {formData} = useFormData()


    return (
        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div className=''>
                <h1 className='text-lg'>
                    Achievements
                </h1>
                <p className='text-sm text-gray-600'>
                    Show your relevant achievement. Use Bullet  Points to note your achievements, if possible use numbers
                    /facts (Achieved X, measured by Y, by doing Z).
                </p>
            </div>
            <div className=''>

                <Accordion type="single" collapsible >

                    {fields.map((field, index) => (




                        <AccordionItem value={`item-${field.id}`} key={field.id} className="border border-cardOutline px-2 rounded">



                            <AccordionTrigger className='flex justify-between'>
                                <FormTrigger name={`achievements.${index}.name`}/>
                                <div className='flex justify-end'>

                                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mr-2" />
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
                                        <div className='flex flex-col w-[35%]'>
                                            <FormField name={`achievements.${index}.name`} label="NAME" />
                                        </div>
                                        <div className='flex flex-col w-[50%]'>
                                            
                                            <div className='flex space-x-3'>

                                            <FormField name={`achievements.${index}.startDate`} label="START DATE"  component={DatePicker}/>
                                            <FormField name={`achievements.${index}.endDate`} label="END DATE" component={DatePicker}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='p-2'>
                                    <FormField name={`achievements.${index}.description`} component={Textarea} label='DESCRIPTION' placeholder="e.g. Created and implemented lesson plans based on CRUD model." />
                                    </div>
                                    <div className='flex justify-between pt-1 text-xs font-thin px-2'>
                                        <p className=''>Recruiter Tip: write 50-200 characters to increase interview chances</p>
                                        <p>{formData?.achievements?.[index]?.description?.length || 0}/200+</p>
                                    </div>
                                </div>

                            </AccordionContent>


                        </AccordionItem>



                    ))}


                </Accordion>

            </div>
            <div className='flex items-center gap-2 cursor-pointer w-full '>
                <PlusIcon />
                <span>
                    <p className=' hover:border-b cursor-pointer'
                        onClick={() => append({name:"", startDate:new Date(), endDate:new Date(), description:""})}>Add More Achievements
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Achievements
