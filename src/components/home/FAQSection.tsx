'use client'
import React, { useState } from 'react'
import './style.css'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from 'lucide-react';

function FAQs() {
  const accordionData = [
          { value: "item-1", title: "How do I create a resume on your platform?", content: "Creating a resume is simple. Choose from our range of professional templates, fill in your personal details, work experience, skills, and education, and customize the design. You can preview and download your resume instantly. " },
          { value: "item-2", title: "Is my data secure on your platform?", content: "Absolutely. We use industry-standard encryption and data protection measures to ensure your personal information and resume data remain safe and private." },
          { value: "item-3", title: "Can I download my resume in different formats?", content: "Yes, you can download your resume in PDF format, which is compatible with most job application systems. Additional formats may be supported in future updates." },
          { value: "item-4", title: "Can I create multiple resumes with different templates?", content: "Yes, you can create and save multiple resumes with different templates. This allows you to tailor your resumes for specific job applications or industries." },
          { value: "item-5", title: "Can I edit my resume after downloading it?", content: "Yes, you can always return to your saved resume and make changes. However, once downloaded as a PDF, further edits need to be made on the platform before re-downloading." },
      ];
  
      const [openItem, setOpenItem] = useState<string | null>(null);
  
      const handleToggle = (value: string) => {
          setOpenItem(openItem === value ? null : value);
      };
  return (
    <div id='FAQ' className='bg-black md:h-screen text-white'>
            <div className='flex flex-col items-center'>

                <h1 className='text-center md:text-xl lg:text-3xl font-bold mt-8'>Frequently Asked Questions About <br /> Resume Builder</h1>

                
                <div className="w-[70%] space-y-1 mt-3">
                    {accordionData.map((item) => (
                        <Accordion key={item.value} type="single" collapsible>
                            <AccordionItem value={item.value}>
                                <AccordionTrigger
                                    className={`text-lg lg:text-xl lg:py-5 transition-all ${openItem === item.value ? "gradient-text" : ""
                                        }`}
                                    onClick={() => handleToggle(item.value)}
                                >
                                    <h1 className={openItem === item.value ? "gradient-text" : ""}>
                                        {item.title}
                                    </h1>
                                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 mr-2" />
                                </AccordionTrigger>
                                <AccordionContent className='text-gray-400 leading-6'>{item.content}</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
            
        </div>
  )
}

export default FAQs
