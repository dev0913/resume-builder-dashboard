import { formDataSchema } from '@/lib/schema/FormSchema';
import { Facebook, Github, Globe, Instagram, Linkedin, LucideIcon, Twitter } from 'lucide-react';
import React from 'react'
import { z } from 'zod';


type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};
const TemplateThree: React.FC<Props> = ({ data }) => {
    const socialIcons: Record<string, LucideIcon> = {
        linkedin: Linkedin,
        github: Github,
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram,
    };
    return (
        <div className='p-5 font-[georgia]'>

            {/* Personal Details */}

            <div className='mb-3'>

                <div>
                    <h1 className='text-2xl font-bold text-violet-600'>{data?.personalDetails?.firstName}  {data?.personalDetails?.lastName}</h1>
                </div>
                <div className='flex justify-between'>
                    {/* Social Links */}

                    {data?.socialLinks && data?.socialLinks?.length > 0 &&
                        <div className='flex flex-col'>
                            {
                                data.socialLinks?.map((item, index) => {
                                    const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                                    return (
                                        <div className='flex space-x-1 items-center' key={index}>
                                            <Icon size={14} className="shrink-0" />
                                            {item.url &&
                                                <a href={`${item.url}`} className='break-all'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                ><p> {item.url}</p></a>}
                                        </div>)


                                })
                            }
                        </div>}

                    <div className='flex flex-col items-end'>
                        <div className=''>

                            {data?.personalDetails?.email && <p>Email: {data.personalDetails.email}</p>}
                        </div>
                        <div className=''>
                            {data?.personalDetails?.phone && <p>Mobile: +91 {data.personalDetails.phone}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* skills */}

            {
                ((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                <div className='mb-3'>
                    <div>
                        <h1 className='text-lg text-violet-400'>SKILLS</h1>
                        <hr className='border-1 border-black' />
                    </div>
                    <div className=''>

                        {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                            <div className='flex items-center '>
                                <li className='font-bold text-violet-500'>Languages:</li>
                                {data?.skills?.technicalSkills?.map((item, index) => (

                                    item.skill &&
                                    <p className='ml-10 text-sm' key={index}>{item.skill},</p>
                                ))}
                            </div>
                        }
                        {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                            <div className='flex items-center'>
                                <li className='font-bold text-violet-500'>Soft Skills:</li>
                                {data?.skills?.softSkills?.map((item, index) => (
                                    item.skill &&
                                    <p className='ml-12 text-sm' key={index}>{item.skill},</p>
                                ))}
                            </div>
                        }
                    </div>

                </div>
            }

            {/* Work Experience */}

            {
                data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                <div className='mb-3'>
                    <div>
                        <h1 className='text-lg text-violet-400'>INTERNSHIP</h1>
                        <hr className='border-1 border-black' />
                    </div>

                    {data?.employmentHistory?.map((item, index) => (

                        <div className='break-inside-avoid' key={index}>
                            <div className='flex justify-between'>
                                {item.company && <li className='text-violet-500 font-bold'>{item.company}</li>}
                                <p>
                                    {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                    {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                                </p>
                            </div>
                            <div className='pl-5'>
                                <div>
                                    {item.jobTitle && <p className='italic'>{item.jobTitle}</p>}
                                </div>

                                {item.description &&
                                    <div className='flex pl-5'>
                                        <p className="font-semibold before:content-['•'] before:mr-2">About:</p>
                                        <p className='pl-2 text-sm'>{item.description}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            }

            {/* Projects */}

            {data?.projects && data?.projects?.length > 0 &&

                <div className='mb-3 break-inside-avoid'>
                    <div>
                        <h1 className='text-lg text-violet-400'>PROJECTS</h1>
                        <hr className='border-1 border-black' />
                    </div>

                    {data?.projects?.map((item, index) => (


                        <div key={index}>
                            <div className=''>
                                <div className='flex justify-between'>
                                    {item.name && <li className='text-violet-500 font-bold'>{item.name}</li>}
                                    {item.date && <p>{item.date ? new Date(item.date).toLocaleDateString("en-GB") : ""}</p>}
                                </div>
                            </div>

                            {item.description &&
                                <div className='pl-5'>
                                    <p className='text-sm'>{item.description}</p>
                                </div>
                            }
                        </div>
                    ))}
                </div>}

            {/* Certificates */}

            {data?.certifications && data?.certifications?.length > 0 &&
                <div className='mb-3 break-inside-avoid'>
                    <div>
                        <h1 className='text-lg text-violet-400'>CERTIFICATES</h1>
                        <hr className='border-1 border-black' />
                    </div>

                    {data?.certifications?.map((item, index) => (


                        <div className='flex justify-between' key={index}>
                            {item.name && <li>{item.name} by {item.institution}.</li>}
                            <p>
                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                            </p>
                        </div>
                    ))}
                </div>
            }

            {/* Achievements */}

            {data?.achievements && data?.achievements?.length > 0 &&
                <div className='mb-3 break-inside-avoid'>
                    <div>
                        <h1 className='text-lg text-violet-400'>ACHIEVEMENTS</h1>
                        <hr className='border-1 border-black' />
                    </div>
                    {data?.achievements?.map((item, index) => (


                        <div key={index}>
                            <div className='flex justify-between'>
                                {item.name && <li className='text-violet-500 font-bold'>{item.name}:</li>}
                                <p> {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                    {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                            </div>

                            {item.description &&
                                <div className='pl-5'>
                                    <p className='text-sm'>{item.description} </p>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            }

            {/* Education */}

            {data.education && data?.education?.length > 0 &&
                <div className='break-inside-avoid'>
                    <div>
                        <h1 className='text-lg text-violet-400'>EDUCATION</h1>
                        <hr className='border-1 border-black' />
                    </div>

                    {
                        data?.education?.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between'>
                                    {item.name && <li className='text-violet-500 font-bold'>{item.name}</li>}
                                    {item.city && <p>{item.city}</p>}
                                </div>
                                <div className='pl-5 flex justify-between'>
                                    <div className='flex'>
                                        {item.degree && <p className='text-sm'>
                                            {item.degree};
                                        </p>
                                        }
                                        {item.percentage && <p className='pl-2 font-semibold italic'>Percentage:</p>}
                                        {item.percentage && <p className='pl-2'>{item.percentage} %</p>}
                                    </div>
                                    <div>
                                        <p className='italic'>
                                            {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                            {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>}
        </div >
    )
}

export default TemplateThree
