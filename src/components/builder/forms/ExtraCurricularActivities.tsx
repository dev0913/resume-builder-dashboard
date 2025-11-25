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
import { Label } from '@/components/ui/label';
import FormTrigger from './fields/FormTrigger';


function ExtraCurricularActivities() {
    const { fields, append, remove } = useFieldArray({
    
        name: "activities"
    })
    return (
        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div>
                <h1 className='text-lg'>
                    Extra-Curricular Activities
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
                            <FormTrigger name={`activities.${index}.activity`}/>
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
                                        <FormField name={`activities.${index}.activity`} label="Activity"/>
                                        </div>
                                        {/* <div className='flex flex-col w-[50%]'>
                                            <label className='text-sm'>ACTIVITY 2</label>
                                            <input type="text" name="" id="" className='border border-t-1 border-[#3c3c3c] w-[80%] py-2 mt-1 bg-[#1c1c1c] rounded-sm p-1' />
                                        </div> */}
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
                    <p className=' hover:border-b text-xs'
                        onClick={() => append({ activity: "" })}>Add More Extra-Curricular Activities
                    </p>
                </span>
            </div>
        </div>
    )
}

export default ExtraCurricularActivities
