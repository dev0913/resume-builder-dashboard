import { formDataSchema } from '@/lib/schema/FormSchema';
import { Circle, Globe, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { z } from 'zod';

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};

const TemplateTwelve: React.FC<Props> = ({ data }) => {
    return (

        // Header

        <div className=''>

            <div className='w-full h-40  flex flex-col justify-center px-5 bg-[#ddeeff]'>
                <div className="flex items-center space-x-2">

                    <hr className="flex-grow border-[#2b4e69] border-2" />
                    <span className="text-3xl font-bold">{data?.personalDetails?.firstName ? <h1 className="text-4xl font-extrabold text-gray-900">{data.personalDetails?.firstName} {data?.personalDetails?.lastName}</h1> : "Your Name"}</span>
                    <hr className="flex-grow border-[#2b4e69] border-2" />
                </div>

                <div className='text-center'>
                    {data?.personalDetails?.jobTitle ? <span className='font-bold'>{data.personalDetails.jobTitle}</span> : "Your Title"}
                </div>
            </div>

            {/* Bottom */}



            <div className='w-full flex'>
                {/* Left Section */}
                <div className='m-5  w-[35%] border-r min-h-[900px]'>

                    {data?.personalDetails?.phone &&
                        <div className='relative w-full z-0 border-b pb-5 mb-5'>
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />




                            <h1 className='text-xl uppercase font-bold mb-2 tracking-widest'>contact</h1>

                            <div className="space-y-2">
                                {data?.personalDetails?.phone &&
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">{data.personalDetails.phone}</span>
                                    </div>}
                                {data?.personalDetails?.email &&
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">{data.personalDetails.email}</span>
                                    </div>}
                                {data?.personalDetails?.address?.city &&
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-gray-600" />
                                        <span className="text-sm">{data.personalDetails.address.city}, {data.personalDetails.address.state}</span>
                                    </div>}

                            </div>


                        </div>}

                    {data?.education && data?.education?.length > 0 &&
                        <div className="space-y-4 relative z-0 border-b pb-5 mb-5">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl font-bold tracking-widest  text-gray-800 uppercase">education</h2>
                            <div className="space-y-4">
                                {data?.education.map((item, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-gray-800 ">{item.name}</h3>
                                        <p className="text-sm">{item.degree}</p>
                                        <p className="text-sm text-gray-600 font-medium">(
                                            {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                            {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                    </div>))}

                            </div>
                        </div>}

                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                        <div className="space-y-4 relative z-0 pb-5 mb-5 border-b">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl text-gray-800 uppercase font-bold tracking-widest">skills</h2>
                            <ul className="space-y-1 list-disc mx-5 ">



                                {data?.skills?.technicalSkills?.map((item, index) => (

                                    item.skill &&
                                    <li key={index} className='text-sm'>{item.skill}</li>
                                ))}
                                {data?.skills?.softSkills?.map((item, index) => (

                                    item.skill &&
                                    <li key={index} className='text-sm'>{item.skill}</li>
                                ))}

                            </ul>
                        </div>}


                </div>

                {/* Right Section */}
                <div className='w-[65%] m-5'>


                    {data?.professionalSummary?.description &&
                        <div className=" relative z-0 mb-5">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">profile summary</h2>
                            <p className="text-sm leading-relaxed">
                                {data.professionalSummary.description}
                            </p>
                        </div>}

                    {data?.employmentHistory && data?.employmentHistory?.length > 0 &&

                        <div className="space-y-3 mb-5 relative z-0">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">work experience</h2>
                            <div className="space-y-2 break-inside-avoid">
                                {data.employmentHistory?.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-gray-800">{item.company}</h3>
                                            <p className="text-sm text-gray-600">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                        </div>
                                        <p className="text-sm italic font-medium">{item.jobTitle}</p>
                                        <ul className="mt-2 space-y-2 text-sm list-disc pl-5">
                                            {item.description &&
                                                <li>
                                                    {item.description}
                                                </li>}

                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>}

                    {data?.projects && data?.projects?.length > 0 &&

                        <div className="space-y-4 relative z-0 mb-5 break-inside-avoid">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">projects</h2>
                            <div className="space-y-6">
                                {data?.projects.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.date ? new Date(item.date).toLocaleDateString("en-GB") : "Present"}</p>
                                        </div>

                                        <ul className="mt-2 space-y-2 text-sm list-disc pl-5">
                                            {item.description &&
                                                <li>
                                                    {item.description}
                                                </li>}

                                        </ul>
                                    </div>
                                ))}



                            </div>
                        </div>
                    }
                    {data?.certifications && data?.certifications?.length > 0 &&

                        <div className=" space-y-2 relative z-0 mb-5 break-inside-avoid">
                            <div className='absolute  w-7 bg-[#ddeeff] -z-10 rounded-full h-7' />
                            <h2 className="text-xl font-bold tracking-widest text-gray-800 uppercase">Certifications</h2>
                            <div className="space-y-2">
                                {data?.certifications.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            {/* <p className="text-sm text-gray-600">{item.date ? new Date(item.date).toLocaleDateString("en-GB") : "Present"}</p> */}
                                        </div>

                                        <div className='flex justify-between'>
                                            <p>
                                                {item.institution}
                                            </p>
                                            <p className='text-sm text-gray-600'>{item.date ? new Date(item.date).toLocaleDateString("en-GB") : "Present"}</p>
                                        </div>


                                    </div>
                                ))}



                            </div>
                        </div>
                    }
                </div>
            </div>













        </div>
    )
}

export default TemplateTwelve

















