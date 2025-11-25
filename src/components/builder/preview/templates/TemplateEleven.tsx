import { useFormData } from '@/lib/context/FormDataContext';
import { formDataSchema } from '@/lib/schema/FormSchema';
import { CircleUserRound, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { z } from 'zod';


type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};

const TemplateEleven: React.FC<Props> = ({ data }) => {
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
    return (
        <div className="min-h-screen flex font-sans bg-white">
            {/* Sidebar */}
            <div className="bg-[#312c2e] text-white p-6 flex flex-col items-center gap-6 w-[40%] min-h-[1120px]">
                <div className=" bg-white rounded-full overflow-hidden w-52 h-52 p-2">

                    {profileSrc ? <img
                        src={profileSrc}
                        alt=".jpg"
                        className="object-contain w-full h-full rounded-full"
                    /> :
                        <CircleUserRound size={120} strokeWidth={1} className='m-auto mt-7 text-black' />}


                </div>

                {/* About Me */}
                {data?.professionalSummary?.description &&
                    <div className="w-full">
                        <h2 className="text-xl font-bold mb-2">About Me</h2>
                        <p className="text-sm text-gray-300">
                            {data.professionalSummary.description}
                        </p>
                    </div>}

                {/* Contact */}
                {data?.personalDetails.phone &&
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-2">Contact</h3>
                        {data.personalDetails?.phone &&
                            <div className="flex items-center gap-2 mb-2">
                            <Phone size={16} /> <span>{data?.personalDetails?.phone}</span>
                        </div>}
                       {data?.personalDetails?.email &&  
                        <div className="flex items-center gap-2 mb-2">
                            <Mail size={16} /> <span>{data?.personalDetails?.email}</span>
                        </div>}
                        {data?.personalDetails?.address?.city && data?.personalDetails?.address?.state &&
                            <div className="flex items-center gap-2">
                                <MapPin size={16} /> <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                            </div>}
                    </div>}

                {/* Skills */}
                {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                    <div className="w-full">
                        <h3 className="text-lg font-bold mb-2">Skills</h3>


                        <ul className="list-disc list-inside text-sm text-gray-300" >
                            {data?.skills?.technicalSkills?.map((item, index) => (

                                item.skill &&
                                <li key={index}>{item.skill}</li>
                            ))}
                            {data?.skills?.softSkills?.map((item, index) => (

                                item.skill &&
                                <li key={index}>{item.skill}</li>
                            ))}
                        </ul>


                    </div>}



            </div>

            {/* Right Section */}
            <div className=" p-8">
                <div className="mb-8">
                    {data?.personalDetails?.firstName ? <h1 className="text-4xl font-extrabold text-gray-900">{data.personalDetails?.firstName} {data?.personalDetails?.lastName}</h1> : "Your Name"}
                    {data?.personalDetails?.jobTitle ? <p className="text-lg text-gray-600">{data.personalDetails.jobTitle}</p> : "Your Title"}
                </div>

                {/* Education */}
                {data?.education && data?.education?.length > 0 &&
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
                        <div className="space-y-4">
                            {data?.education.map((item, index) => (
                                <div className='break-inside-avoid' key={index}>
                                    <p className="uppercase font-bold">{item.name}</p>
                                    <p className="font-bold text-gray-900">(
                                        {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                    <p className="text-gray-700">{item.degree}</p>
                                    {item.percentage && <p className="text-gray-700">(%): {item.percentage}</p>}
                                </div>
                            ))}

                        </div>
                    </div>}

                {/* Experience */}

                {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
                        <div className="space-y-6">

                            {data.employmentHistory?.map((item, index) => (
                                <div key={index} className='break-inside-avoid'>
                                    <p className="uppercase font-bold">{item.jobTitle}</p>
                                    <p className="font-bold text-gray-900">(
                                        {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                    <p className="text-gray-700 font-bold">{item.company}</p>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {item.description &&
                                            <li>{item.description}</li>}

                                    </ul>
                                </div>
                            ))}


                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default TemplateEleven
