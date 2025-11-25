"use client";
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useFieldArray } from "react-hook-form";
import { ChevronDown, PlusIcon, Trash, Trash2 } from "lucide-react";

import { Label } from '@/components/ui/label';
import FormField from './fields/FormField';
import { DatePicker } from '@/components/ui/custom/datePicker';
import FormTrigger from './fields/FormTrigger';



function Certifications(){

    const { fields, append, remove } = useFieldArray({
    
        name: "certifications"
    })
    return (
        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div>
                <h1 className='text-lg'>
                    Certifications
                </h1>
                <p className='text-sm text-gray-600 w-[90%]'>
                    Show your relevant experience (last 10 years). Use Bullet  Points to note your achievements, if possible
                    use numbers/facts (Achieved X, measured by Y, by doing Z).
                </p>
            </div>
            <div>

                <Accordion type="single" collapsible >

                    {fields.map((field, index) => (




                        <AccordionItem value={`item-${field.id}`} key={field.id} className='border border-cardOutline px-2 rounded'>



                            <AccordionTrigger className='flex justify-between'>
                            <FormTrigger name={`certifications.${index}.name`} />
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
                                        <div className='flex flex-col w-[50%]'>
                                        <FormField name={`certifications.${index}.name`} label="NAME" />
                                        </div>
                                        <div className='flex flex-col w-[50%]'>
                                        <FormField name={`certifications.${index}.institution`} label="INSTITUTION" />
                                        </div>
                                    </div>
                                    <div className='mt-1 flex space-x-9 p-2'>
                                        <div className='flex flex-col w-[70%]'>
                                           
                                            <div className='flex space-x-3'>

                                            <FormField name={`certifications.${index}.startDate`} label="START DATE" component={DatePicker}/>
                                            <FormField name={`certifications.${index}.endDate`} label="END DATE" component={DatePicker}/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-[30%] items-end'>
                                        <FormField name={`certifications.${index}.mode`} label="MODE" />
                                        </div>
                                    </div>

                                </div>

                            </AccordionContent>


                        </AccordionItem>



                    ))}


                </Accordion>



            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <PlusIcon />
                <span>
                    <p className=' hover:border-b cursor-pointer'
                        onClick={() => append({ name: "", institution: "", startDate: new Date(), endDate: new Date(), mode: "" })}>Add More Certifications
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Certifications
