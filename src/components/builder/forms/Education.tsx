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
import FormField from './fields/FormField';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useFormData } from '@/lib/context/FormDataContext';
import { DatePicker } from '@/components/ui/custom/datePicker';
import FormTrigger from './fields/FormTrigger';




function Education(){

    const { fields, append, remove } = useFieldArray({
        name: "education"
    })

    const {formData} = useFormData();

    return (

        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div>
                <h1 className='text-lg'>
                    Education
                </h1>
                <p className='text-sm text-gray-600 w-[90%]'>
                    A Varied education on your resume sum up the value that your learnings and background will bring to job.
                </p>
            </div>
            <div>

                <Accordion type="single" collapsible >

                    {fields.map((field, index) => (




                        <AccordionItem value={`item-${field.id}`} key={field.id} className='border border-cardOutline px-2 rounded'>



                            <AccordionTrigger className='flex justify-between'>
                                        <FormTrigger name={`education.${index}.name`}/>
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
                                            <FormField name={`education.${index}.name`} label="NAME" />
                                        </div>
                                        <div className='flex flex-col w-[50%]'>
                                        <FormField name={`education.${index}.degree`} label="DEGREE" />
                                        </div>
                                    </div>
                                    <div className='mt-1 flex space-x-9 p-2'>
                                        <div className='flex flex-col w-[58%]'>
                                            
                                            <div className='flex space-x-2'>

                                            <FormField name={`education.${index}.startDate`} label="START DATE" component={DatePicker}/>
                                            <FormField name={`education.${index}.endDate`} label="END DATE" component={DatePicker}/>
                                            </div>
                                        </div>
                                        <div className='flex w-[50%] space-x-3 pl-14'>
                                            <div className='flex flex-col w-[80%]'>

                                            <FormField name={`education.${index}.percentage`} label="(%)" />
                                            </div>
                                            <div className='flex flex-col'>

                                            <FormField name={`education.${index}.city`} label="CITY" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className='mx-2'>
                                       
                                        <FormField name={`education.${index}.description`} label="DESCRIPTION" component={Textarea} placeholder='e.g. Graduated with High Honors.'/>
                                    </div>
                                    <div className='flex justify-between pt-1 text-xs font-thin px-2'>
                                        <p className=''>Recruiter Tip: write 50-200 characters to increase interview chances</p>
                                        <p>{formData?.education?.[index]?.description?.length || 0}/200+</p>
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
                    <p className=' hover:border-b'
                        onClick={() => append({ name: "", degree: "", startDate: new Date(), endDate: new Date(), percentage: 0, city: "", description: "" })}>Add More Educational Background
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Education
