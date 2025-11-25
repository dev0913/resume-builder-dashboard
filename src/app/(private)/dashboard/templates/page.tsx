"use client"
import { useTemplate } from '@/lib/context/TemplateContext';
import { useRouter } from 'next/navigation';

import React from 'react'

const page = () => {
    const { selectedTemplate, setSelectedTemplate, templates } = useTemplate();
        const router = useRouter()
        const handleTemplates = (template: any) => {
            setSelectedTemplate(template)
            router.replace("/resume")
        }
  return (
    <div>
      <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                    {templates.map((template, index) => (
                        <div
                            key={index}
                            className={`rounded cursor-pointer  p-4 text-center m-auto flex-col   
                    }`}
                            onClick={() => handleTemplates(template)}
                        >
                            <img src={template.image} alt={template.name} className="w-80 rounded mb-2 hover:gradient-border" />
                            <span className="text-white">{template.name}</span>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default page
