


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
import { Label } from "@/components/ui/label";
import FormTrigger from "./fields/FormTrigger";



function SocialLinks() {

    const { fields, append, remove } = useFieldArray({

        name: "socialLinks", // Matches the form schema
    });

    return (
        <div className="flex flex-col text-white px-2 py-2 space-y-3">
            <div>
                <h1 className="text-lg">Websites & Social Links</h1>
                <p className="text-sm text-gray-600 w-[90%]">
                    You can add links to websites you want hiring managers to see! Perhaps It will
                    be a link to your portfolio, Linkedin Profile, or personal Website.
                </p>
            </div>

            <Accordion type="single" collapsible>
                {fields.map((field, index) => (
                    <AccordionItem value={`item-${field.id}`} key={field.id} className="border border-cardOutline px-2 rounded">
                        <AccordionTrigger className="flex justify-between">
                            <FormTrigger name={`socialLinks.${index}.name`} />
                            <div className="flex justify-end">
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
                            <div className="flex flex-col p-3 px-4]">
                                <div className="mt-1 flex space-x-9 p-2">
                                    <div className="flex flex-col w-[50%]">
                                        <FormField name={`socialLinks.${index}.name`} label="LABEL" />
                                    </div>
                                    <div className="flex flex-col w-[50%]">
                                        <FormField name={`socialLinks.${index}.url`} label="LINK" />

                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <div className="flex items-center gap-2 cursor-pointer w-full">
                <PlusIcon />
                <span>
                    <p
                        className="hover:border-b cursor-pointer"
                        onClick={() => append({ name: "", url: "" })}
                    >
                        Add More Links
                    </p>
                </span>
            </div>
        </div>
    );
};

export default SocialLinks;

