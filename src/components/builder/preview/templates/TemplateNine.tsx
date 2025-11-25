import React from 'react'

import { formDataSchema } from "@/lib/schema/FormSchema";
import { z } from "zod";
import { Mail, Phone, Globe, Linkedin, Github, MapPin, Twitter, Facebook, Instagram } from "lucide-react"
import { Card } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};
const TemplateNine: React.FC<Props> = ({ data }) => {
    const socialIcons: Record<string, LucideIcon> = {
        linkedin: Linkedin,
        github: Github,
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram,
    };

    return (
        <div className=''>
            <div className=" bg-white max-w-full">
                <div className="p-8 bg-white text-black">
                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex flex-row justify-between items-center gap-4">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900">{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>
                                <p className="text-lg text-gray-600 mt-1">{data?.personalDetails?.jobTitle || "Your Title"}</p>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-gray-600">
                                {data?.personalDetails?.address?.city &&
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                                    </div>
                                }
                                {data?.personalDetails?.phone && <div className="flex items-center gap-2">
                                    <Phone size={16} />
                                    <span>{data?.personalDetails?.phone}</span>
                                </div>
                                }
                                {data?.personalDetails?.email &&
                                    <div className="flex items-center gap-2">
                                        <Mail size={16} />
                                        <span>{data.personalDetails.email}</span>
                                    </div>
                                }

                            </div>
                        </div>
                    </header>

                    <div className='flex'>


                        <div className="w-[30%] p-2 border-r min-h-[900px]">
                            {/* Left Sidebar */}
                            <div className="col-span-1">

                                <div>
                                    {/* Social Links */}
                                    {data?.socialLinks && data?.socialLinks?.length > 0 &&
                                        <div className='mb-3'>
                                            <h2 className="text-xl font-bold mb-3 text-gray-800 border-b">Social</h2>

                                            <div className="space-y-1">
                                                {data?.socialLinks.map((item, index) => {
                                                    const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                                                    return (
                                                    <div className="flex items-center gap-2 break-words max-w-full break-inside-avoid" key={index}>
                                                        <Icon size={16} className="text-gray-600 shrink-0" />
                                                        {item.url && 
                                                        <a href={`${item.url}`} className='break-all'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        ><span> {item.url}</span></a>}
                                                    </div>)
                                                })}

                                            </div>
                                        </div>
                                    }   

                                    {/* Skills */}
                                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                                        <div className='mb-3'>
                                            <h2 className="text-xl font-bold mb-2 text-gray-800 border-b">Skills</h2>
                                            <div className="space-y-4">
                                                {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                                    <div className='break-inside-avoid'>
                                                        <p className="font-medium">Technical Skills</p>
                                                        <div className='flex space-x-1'>

                                                            {data?.skills?.technicalSkills?.map((item, index) => (

                                                                item.skill &&

                                                                <p className="text-sm text-gray-600" key={index}>{item.skill},</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                               {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                               <div className='break-inside-avoid'>
                                                    <p className="font-medium">Soft Skills</p>

                                                    <div className='flex space-x-1'>
                                                        {data?.skills?.softSkills?.map((item, index) => (

                                                            item.skill &&
                                                            <p className="text-sm text-gray-600" key={index}>{item.skill},</p>
                                                        ))}
                                                    </div>
                                                </div>}

                                            </div>
                                        </div>
                                    }

                                    {/* Certifications */}
                                    {data.certifications && data?.certifications?.length > 0 &&
                                        <div className='mb-3 break-inside-avoid'>
                                            <h2 className="text-xl font-bold mb-1 text-gray-800 border-b">Certifications</h2>
                                            <div className="space-y-2">
                                                {data.certifications?.map((item, index) => (
                                                    <div key={index}className='break-inside-avoid'>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-sm text-gray-600">{item.institution}</p>
                                                        <p className="text-xs text-gray-500">{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    }



                                </div>

                                {/* Main Content */}

                            </div>
                        </div>

                        <div className="space-y-4 w-[70%] p-2 px-4">
                            {/* Summary */}
                            {data?.professionalSummary?.description &&
                                <div>
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b">Summary</h2>
                                    <p className="text-gray-700">
                                        {data.professionalSummary.description}
                                    </p>
                                </div>}

                            {/* Experience */}
                            {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b break-inside-avoid print:pt-5">Experience</h2>
                                    <div className="space-y-6">
                                        {data.employmentHistory?.map((item, index) => (
                                            <div key={index} className='break-inside-avoid'>
                                                <div className="flex flex-row justify-between mb-2">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-800">{item.company}</h3>
                                                        <p className="text-gray-600">{item.jobTitle}</p>
                                                    </div>
                                                    <div className="text-right mt-1 md:mt-0">
                                                        <p className="text-gray-600">(
                                                            {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                            {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                                        <p className="text-gray-600">{item.city}</p>
                                                    </div>
                                                </div>

                                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                    {item.description &&
                                                        <li>
                                                            {item.description}
                                                        </li>}

                                                </ul>
                                            </div>
                                        ))}

                                    </div>
                                </div>}

                            {/* Education */}
                            {data?.education && data?.education?.length > 0 &&
                                <div className='break-inside-avoid'>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b">Education</h2>
                                    {data?.education.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex flex-row justify-between mb-2">
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{item.degree}</h3>
                                                    <p className="text-gray-600">{item.name}</p>
                                                </div>
                                                <div className="text-right mt-0">
                                                    <p className="text-gray-600">(
                                                        {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                                                    <p className="text-gray-600">{item.city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }

                            {/* Projects */}
                            {data?.projects && data?.projects?.length > 0 &&
                                <div className='break-inside-avoid print:pt-5'>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b">Projects</h2>
                                    <div className="grid grid-cols-2 gap-4">

                                        {data?.projects.map((item, index) => (
                                            <div className="border border-gray-200 rounded-md p-4 " key={index}>
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>

                                                {item.description &&
                                                    <p className="text-gray-700 text-sm">
                                                        {item.description}
                                                    </p>
                                                }
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default TemplateNine
