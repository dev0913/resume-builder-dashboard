import React, { useEffect, useState } from 'react'

import { formDataSchema } from "@/lib/schema/FormSchema";
import { z } from "zod";
import { Mail, Phone, Globe, Linkedin, Github, Award, LocateIcon, MapPin, CircleUserRound, LucideIcon, Twitter, Facebook, Instagram } from "lucide-react"
import { Card } from '@/components/ui/card';
import { useFormData } from '@/lib/context/FormDataContext';

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateTen: React.FC<Props> = ({ data }) => {
    const { formData } = useFormData();
    const profileImg = data?.personalDetails?.profileImg ?? null;

    const [profileSrc, setProfileSrc] = useState<string | null>(
        profileImg instanceof File ? "" : profileImg
    );

    useEffect(() => {
        if (profileImg instanceof File) {
            const objectUrl = URL.createObjectURL(profileImg);
            setProfileSrc(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setProfileSrc(profileImg ?? null);
        }
    }, [profileImg]);

    const socialIcons: Record<string, LucideIcon> = {
        linkedin: Linkedin,
        github: Github,
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram,
    };

    return (
        <div>
            <div className='p-4 flex flex-col items-center justify-center space-y-2 text-center'>
                <div>
                    {profileSrc ? <img src={profileSrc} alt="" className='w-32 h-32 object-contain' /> :
                        <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />}
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>
                    <p className='text-gray-600 text-lg'>{data?.personalDetails?.jobTitle || "Your Title"}  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 mt-1 text-sm text-gray-600 justify-center">


                    {data?.personalDetails?.address?.city && <div className="flex items-center gap-1">
                        <LocateIcon size={14} />
                        <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                    </div>}

                    {data?.personalDetails?.phone &&
                        <div className="flex items-center gap-1">
                            <Phone size={14} />
                            <span>{data?.personalDetails?.phone}</span>
                        </div>}

                    {data?.personalDetails?.email &&
                        <div className="flex items-center gap-1">
                            <Mail size={14} />
                            <span>{data?.personalDetails?.email}</span>
                        </div>}

                </div>

                {data?.socialLinks && data?.socialLinks?.length > 0 &&
                    <div className='flex flex-wrap justify-center space-x-2'>
                        {data?.socialLinks.map((item, index) => {
                            const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                            return (
                                <div className='flex space-x-1 items-center' key={index}>
                                    <Icon size={14} className='shrink-0'/>
                                    {item.name && <span>{item.name}: {item.url}</span>}
                                </div>)
                        })}

                    </div>
                }



            </div>

            <div className='px-4 space-y-3'>
                {data?.professionalSummary?.description &&
                    <div className='space-y-1'>

                        <h1 className='w-full text-center text-lg font-bold text-gray-600 border-b-2'>Summary</h1>

                        <p>
                            {data.professionalSummary.description}
                        </p>
                    </div>}

                {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                    <div>
                        <h1 className='w-full text-center text-lg font-bold text-gray-600 border-b-2'>Experience</h1>

                        <div className='grid grid-cols-2 w-full p-1'>



                            {data.employmentHistory?.map((item, index) => (

                                <div className='space-y-3 p-1' key={index}>
                                    <div className="" >
                                        <div className="flex justify-between">
                                            <h3 className="font-bold">{item.company}</h3>
                                            <span className="text-sm text-gray-600 font-bold">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-sm font-medium">{item.jobTitle}</p>
                                            <span className="text-sm text-gray-600">{item.city}</span>
                                        </div>

                                        <ul className="list-disc pl-5 text-sm mt-2 w-full">
                                            {item.description && <li>
                                                {item.description}
                                            </li>}

                                        </ul>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>}

                {data?.education && data?.education?.length > 0 &&
                    <div className='break-inside-avoid'>
                        <h1 className='w-full text-center text-lg font-bold text-gray-600 border-b-2'>Education</h1>

                        <div className='grid grid-cols-3 gap-2 p-1 py-2 '>
                            {data?.education.map((item, index) => (
                                <div className='' key={index}>
                                    <p className='font-bold text-lg'>{item.name}</p>
                                    <p>{item.degree}</p>
                                    <p className='font-bold'>{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>}


                {data?.projects && data?.projects?.length > 0 &&
                    <div className='break-inside-avoid'>
                        <h1 className='w-full text-center text-lg font-bold text-gray-600 border-b-2'>Projects</h1>

                        <div className='p-2 break-inside-avoid'>
                            <div className="grid grid-cols-3 gap-x-4 w-full ">

                                {data?.projects.map((item, index) => (


                                    <div className="" key={index}>
                                        <div className="flex">

                                            <h3 className="font-bold">{item.name}</h3>

                                        </div>
                                        <div>

                                            <p className="text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>

                }

                {data?.certifications && data?.certifications?.length > 0 &&
                    <div className='break-inside-avoid'>
                        <h1 className='w-full text-center text-lg font-bold text-gray-600 border-b-2'>Certifications</h1>

                        <div className='p-1 '>
                            <div className='grid grid-cols-3 gap-4 w-full'>


                                {
                                    data.certifications?.map((item, index) => (
                                        <div key={index} className='break-inside-avoid'>
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="text-sm">{item.institution}</p>
                                            <p className="text-sm text-gray-600 font-bold">
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }

                {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                    <div>
                        <h1 className='break-inside-avoid w-full text-center text-lg font-bold text-gray-600 border-b-2'>Skills</h1>

                        <div className="grid grid-cols-3 gap-4">
                            {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                <div>
                                    <h3 className="text-lg font-semibold">Technial Skills</h3>
                                    <div className='flex space-x-1'>

                                        {data?.skills?.technicalSkills?.map((item, index) => (

                                            item.skill &&
                                            <p className=" text-gray-700" key={index}>{item.skill},</p>

                                        ))}
                                    </div>
                                </div>
                            }

                            <div>
                                <h3 className="text-lg font-semibold">Soft Skills</h3>

                                <div className='flex space-x-1'>

                                    {data?.skills?.softSkills?.map((item, index) => (

                                        item.skill &&
                                        <p className="text-gray-700" key={index}>{item.skill},</p>
                                    ))}
                                </div>

                            </div>


                        </div>
                    </div>}







            </div>
        </div>
    )
}

export default TemplateTen
