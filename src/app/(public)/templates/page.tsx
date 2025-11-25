"use client"

import { Button } from '@/components/ui/button';
import { useTemplate } from '@/lib/context/TemplateContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const page = () => {
    const { selectedTemplate, setSelectedTemplate, templates } = useTemplate();
    const router = useRouter()
    const handleTemplates = (template: any) => {
        setSelectedTemplate(template)
        router.replace("/resume")
    }


    useEffect(() => {

        ListTemplates()

    }, [templates])


    const [activeTab, setActiveTab] = useState("All");
    const [categories, setCategories] = useState<string[]>([]);
    

    const ListTemplates = () => {


        const uniqueCategories = [...new Set(templates.map((item) => item.category))];
        setCategories(["All", ...uniqueCategories]);


    }

    const filterTemplates = 

        activeTab === "All"
            ? templates
            : templates.filter((item) => item.category === activeTab);


    



    return (
        <div>


            <div className='flex justify-center  mb-10'>
                <div className='flex flex-col justify-center items-center w-[50%] px-10'>
                    <div className='text-center space-y-2 mb-5'>
                        <h1 className='text-4xl font-semibold pt-20 gradient-text'>Resume Templates</h1>
                        <p className='text-lg'>Choose from a variety of professionally designed resume templates to create a standout and polished CV.</p>
                    </div>

                    <div className=''>
                        <Link href='/resume'><Button>Create Resume</Button></Link>
                    </div>
                </div>



            </div>

            <div className='p-5'>
                <hr className='border-1' />
            </div>


            <div>
            <div className="flex gap-3 mb-8 justify-center">
                                    {
                                        categories.map((category) => (

                                            <button
                                                className={`px-5 py-2 rounded-full font-bold ${activeTab === category ? ` gradient-bg text-black` : `gradient-text border hover:shadow-white  hover:shadow-sm `} `}
                                                key={category}
                                                onClick={() => setActiveTab(category)}
                                            >{category}</button>
                                        ))
                                    }

                                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                    {filterTemplates.map((template, index) => (
                        <div
                            key={index}
                            className={`rounded cursor-pointer  p-4 text-center m-auto flex-col   
                    }`}
                            onClick={() => handleTemplates(template)}
                        >
                            <img src={template.image} alt={template.name} className="w-80 h-76 rounded mb-2 hover:gradient-border" />
                            <span className="text-white">{template.name}</span>
                        </div>
                    ))}
                    {templates.map((template, index) => (
                        <div
                            key={index}
                            className={`rounded cursor-pointer  p-4 text-center m-auto flex-col   
                    }`}
                            onClick={() => handleTemplates(template)}
                        >
                            <img src={template.image} alt={template.name} className="w-80 h-76 rounded mb-2 hover:gradient-border" />
                            <span className="text-white">{template.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
