import { formDataSchema } from '@/lib/schema/FormSchema';
import React from 'react'
import { z } from 'zod';


type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};

const TemplateThirteen: React.FC<Props> = ({ data }) => {
    return (
        <div className='font-[montserrat] text-black'>
            <div className='flex justify-between p-8'>
                <div className='font-bold text-3xl'>
                    {data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}
                </div>
                <div className='text-gray-700 font-semibold text-xl'>
                    {data?.personalDetails?.jobTitle || "Your Title"}
                </div>
            </div>

            <div className='p-8 '>
                <div className=''>

                    {/* PERSONAL DETAILS */}

                    {data?.personalDetails?.phone &&

                        <div className='w-full flex'>

                            <div className='font-bold uppercase w-[30%] '>
                                Contact

                            </div>
                            <div className='grid grid-cols-2 w-[70%] border-b pb-5 mb-5'>
                                {data?.personalDetails?.phone &&
                                    <div className=' flex space-x-2 mb-2'>
                                        <p className='font-bold'>Phone: </p>
                                        <span>{data?.personalDetails?.phone}</span>
                                    </div>}
                                {data?.personalDetails?.address?.city &&
                                    <div className=' flex space-x-2 mb-2'>
                                        <p className='font-bold '>Address: </p>
                                        {data?.personalDetails?.address?.city && <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>}
                                    </div>}
                                {data?.personalDetails?.email &&
                                    <div className=' flex space-x-2'>
                                        <p className='font-bold'>Email: </p>
                                        <span>{data?.personalDetails?.email}
                                        </span>
                                    </div>}


                            </div>
                        </div>}

                    {/* Professional Experience */}


                    {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                        <div className='w-full flex'>
                            <div className='w-[30%] font-bold uppercase'>
                                Professional Experience
                            </div>

                            <div className='w-[70%]'>
                                <div className='border-b pb-5 mb-5'>

                                    {data.employmentHistory?.map((item, index) => (
                                        <div className='flex flex-col' key={index}>
                                            {item.jobTitle && <p className='font-bold'>{item.jobTitle} |
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>}
                                            <p>{item.company}</p>

                                            <ul className='list-disc px-5 py-2'>
                                                {item.description && <li>{item.description}</li>}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>}

                    {/* Education */}


                    {data?.education && data?.education?.length > 0 &&
                        <div className='w-full flex'>
                            <div className='w-[30%] font-bold uppercase'>Education</div>
                            <div className='w-[70%] '>
                                <div className='border-b pb-5 mb-5'>

                                    {data?.education.map((item, index) => (
                                        <div className='flex flex-col ' key={index}>
                                            {item.name && <p className='font-bold'>{item.name} |
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"} </p>}
                                            <p>{item.degree}</p>
                                            <div className='flex space-x-2 font-semibold'>
                                                <p className=''>GPA : </p>
                                                <span>{item.percentage}</span>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>}

                    {/* Skills */}

                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                        <div className='w-full flex'>
                            <div className='w-[30%] font-bold uppercase'>Skills</div>
                            <div className='w-[70%] '>
                                <div className='grid grid-cols-2 gap-x-4 border-b mb-5 pb-5'>
                                    {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold'>Technical</h1>
                                            <ul className='list-disc px-5 py-1'>
                                                {
                                                    data?.skills?.technicalSkills?.map((item, index) => (
                                                        <li key={index}>{item.skill}</li>
                                                    ))}
                                            </ul>
                                        </div>}

                                    {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold'>Soft Skills</h1>

                                            <ul className='list-disc px-5 py-1'>
                                                {data?.skills?.softSkills?.map((item, index) => (
                                                    <li key={index}>{item.skill}</li>))}
                                            </ul>
                                        </div>}
                                </div>
                            </div>
                        </div>}

                    {/* Certificates */}

                    {data.certifications && data?.certifications?.length > 0 &&
                        <div className='w-full flex'>
                        <div className='w-[30%] font-bold uppercase'>
                            Certificates
                        </div>


                        <div className='w-[70%]'>

                            <div className='grid grid-cols-2  gap-4'>
                                { data.certifications?.map((item, index) => (
                                    <div className='' key={index}>
                                    {item.name && <p className='font-bold'>{item.name} | {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>}
                                    <p>{item.institution}</p>
                                </div>
                            ))}
                                

                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default TemplateThirteen
