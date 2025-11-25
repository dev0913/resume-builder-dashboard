
import { formDataSchema } from "@/lib/schema/FormSchema";
import { z } from "zod";
import { Mail, Phone, Globe, Linkedin, Github, CircleUserRound, MapPin, LucideIcon, Twitter, Facebook, Instagram } from "lucide-react"
import { useFormData } from "@/lib/context/FormDataContext";
import { useEffect, useState } from "react";

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateEight: React.FC<Props> = ({ data }) => {

    const socialIcons: Record<string, LucideIcon> = {
        linkedin: Linkedin,
        github: Github,
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram
    };


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
        <div className="">



            <div className="relative h-44">
                <div className="w-full h-[50%] bg-[#0193b2]">
                    <div className="absolute left-12 top-2">
                        {profileSrc ? <img src={profileSrc} alt="" className="w-28 h-32 mt-2 rounded" /> :
                            <div className="p-2 bg-white rounded absolute left-12 top-2 w-28 h-32">

                                <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />
                            </div>
                        }
                    </div>

                    <div className=" flex flex-col justify-center items-center pt-3 text-white">
                        <h1 className="text-4xl ">
                            {data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}
                        </h1>
                        <p className="text-xl">{data?.personalDetails?.jobTitle || "Your Title"}</p>
                    </div>

                </div>


                <div className="flex w-full justify-end">
                    <div className="flex flex-wrap justify-start w-[70%] text-lg">

                        {data?.personalDetails?.address?.city &&
                            <div className="flex space-x-2 items-center w-[40%] m-1">
                                <MapPin size={16} color="#0193b2" />
                                <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                            </div>}

                        {data?.personalDetails?.email &&
                            <div className="flex space-x-2 items-center w-[30%] m-1">
                                <Mail size={16} color="#0193b2" />
                                <span>{data.personalDetails.email}</span>
                            </div>}

                        {data?.personalDetails?.phone &&
                            <div className="flex space-x-2 items-center w-[30%] m-1">
                                <Phone size={16} color="#0193b2" />
                                <span>{data?.personalDetails?.phone}</span>
                            </div>}


                    </div>
                </div>
            </div>


            <div className="w-full flex">
                <div className="w-[30%] flex-col px-4 space-y-4 py-2">
                    {data?.socialLinks && data?.socialLinks?.length > 0 &&

                        <div>
                            <h2 className="text-base font-bold mb-3 text-gray-800">Profiles</h2>
                            <div className="space-y-2">

                                {data?.socialLinks.map((item, index) => {
                                    const Icon = socialIcons[item.name?.toLowerCase()] || Globe;

                                    return (<div className="flex items-center gap-2 break-words" key={index}>
                                        <Icon size={16} className="text-gray-600 shrink-0" />
                                        {item.url &&
                                            <a href={`${item.url}`} className='break-all'
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            ><span>{item.url}</span>
                                            </a>}
                                    </div>)
                                })}


                            </div>


                        </div>
                    }

                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                        <div>
                            <h2 className="text-base font-bold mb-1 text-gray-800">Skills</h2>
                            <div className="space-y-2">
                                {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 && <div className="flex flex-col">
                                    <p className="font-medium mb-1 text-lg">Technical Skills</p>
                                    <div className="flex space-x-1">
                                        {data?.skills?.technicalSkills?.map((item, index) => (

                                            item.skill &&

                                            <p className="text-sm text-gray-600" key={index}>{item.skill},</p>
                                        ))}
                                    </div>

                                </div>
                                }
                                {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                    <div className="">
                                        <p className="font-medium mb-1 text-lg">Soft Skills</p>
                                        <div className="flex space-x-1">
                                            {data?.skills?.softSkills?.map((item, index) => (

                                                item.skill &&
                                                <p className="text-sm text-gray-600" key={index}>{item.skill},</p>
                                            ))}
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    }

                    {data.certifications && data?.certifications?.length > 0 &&
                        <div>
                            <h2 className="text-base font-bold mb-3 text-gray-800">Certifications</h2>
                            <div className="space-y-3">
                                {
                                    data.certifications?.map((item, index) => (
                                        <div key={index} className="break-inside-avoid  ">
                                            <p className="font-medium font-lg">{item.name}</p>
                                            <p className="text-sm text-gray-600">{item.institution}</p>
                                            <p className="text-xs text-gray-500">{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                                        </div>
                                    ))}

                            </div>
                        </div>}
                </div>
                <div className="w-[70%] px-5 py-2">
                    {data?.professionalSummary?.description &&
                        <div className=" mb-3">

                            <div>

                                <h2 className="text-base font-bold mb-1 text-gray-800">Summary</h2>
                                <p className="text-gray-700">
                                    {data.professionalSummary.description}
                                </p>
                            </div>
                        </div>}

                    {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                        <div className="mb-3 ">
                            <h2 className="text-base font-bold mb-1 text-gray-800">Experience</h2>
                            <div className="space-y-3 border-l-4 px-2 border-[#0193b2]">
                                {data.employmentHistory?.map((item, index) => (
                                    <div key={index} className="break-inside-avoid  ">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <p className=" font-semibold text-gray-800 text-base">{item.company}</p>
                                                <h3 className="text-gray-600 text-sm">{item.jobTitle}</h3>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <p className="text-gray-600 text-base font-bold">(
                                                    {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                    {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                                <p className="text-gray-600 text-sm font-bold">{item.city}</p>
                                            </div>
                                        </div>

                                        <ul className="pl-2 space-y-1 text-gray-700">
                                            {item.description && <li>
                                                {item.description}
                                            </li>}

                                        </ul>
                                    </div>
                                ))}


                            </div>
                        </div>}

                    {data?.education && data?.education?.length > 0 &&
                        <div className="mb-3 break-inside-avoid  ">
                            <h2 className="text-base font-bold mb-1 text-gray-800">Education</h2>
                            <div className="border-l-4 px-2 border-[#0193b2]">

                                {data?.education.map((item, index) => (
                                    <div className="flex flex-row justify-between mb-2" key={index}>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{item.degree}</h3>
                                            <p className="text-gray-600 text-sm font-bold">{item.name}</p>
                                        </div>
                                        <div className="text-right mt-1 md:mt-0">
                                            <p className="text-gray-600 font-bold">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                                            <p className="text-gray-600 text-sm font-bold">{item.city}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>}

                    {data?.projects && data?.projects?.length > 0 &&
                        <div className="mb-3 w-full break-inside-avoid  ">
                            <h2 className="text-base font-bold mb-1 text-gray-800">Projects</h2>
                            <div className="grid grid-cols-2 space-x-4 w-full">
                                {data?.projects.map((item, index) => (
                                    <div className=" px-2 border-l-4 border-[#0193b2]" key={index}>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>

                                        <p className="text-gray-700 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}


                            </div>
                        </div>}
                </div>


            </div>


        </div>


    )
}

export default TemplateEight