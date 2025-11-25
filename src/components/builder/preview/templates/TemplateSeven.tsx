import { useFormData } from "@/lib/context/FormDataContext";
import { formDataSchema } from "@/lib/schema/FormSchema";
import { CircleUserRound, Globe, Facebook, Github, Instagram, Linkedin, LocateIcon, LucideIcon, Mail, Phone, Twitter } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { z } from "zod";

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateSeven: React.FC<Props> = ({ data }) => {
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

            <div className="flex">
                {/* left section */}
                <div className="w-[30%] min-h-[1120px] bg-[#ceeae9] py-2 px-2">

                    <div className="flex flex-col text-center w-full items-center space-y-1 mb-5">
                        {profileSrc ? <img src={profileSrc} alt="" className="w-24 h-24 mb-1" /> :
                            <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />}

                        <h1 className="font-bold">{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>

                        <h1 className="text-sm">{data?.personalDetails?.jobTitle || "Your Title"}</h1>
                    </div>

                    <div className=" border-[#33b3a9] border-2 rounded mb-2">
                        <div className="px-1 py-2 space-y-1">

                            {data?.personalDetails?.address?.city &&
                                <div className="flex text-xs space-x-2">
                                    <LocateIcon size={14} color="#33b3a9" />
                                    <span>{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                                </div>}

                            {data?.personalDetails?.phone &&
                                <div className="flex text-xs space-x-2">
                                    <Phone size={14} color="#33b3a9" />
                                    <span>{data?.personalDetails?.phone}</span>
                                </div>}

                            {data?.personalDetails?.email &&
                                <div className="flex text-xs space-x-2">
                                    <Mail size={14} color="#33b3a9" />
                                    <span>{data?.personalDetails?.email}</span>
                                </div>}

                        </div>
                    </div>

                    {data?.socialLinks && data?.socialLinks?.length > 0 &&

                        <div className="mb-2">

                            <div className="text-xs mb-2 text-[#33b3a9] font-bold">
                                <h1>Profiles</h1>
                                <hr className="border-[#33b3a9]" />
                            </div>

                            <div className="space-y-1">
                                {data?.socialLinks.map((item, index) => {
                                    const Icon = socialIcons[item.name?.toLowerCase()] || Globe;

                                    return (
                                        <div className="flex space-x-2 items-center text-sm break-words" key={index}>
                                            <Icon size={14} className="shrink-0"/>
                                            {item.url &&
                                                <a href={`${item.url}`} className='break-all'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                ><span> {item.url}</span></a>}
                                        </div>)
                                })}
                            </div>

                        </div>}


                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                        <div className="mb-2">

                            <div className="text-xs mb-2 text-[#33b3a9] font-bold">
                                <h1 >Skills</h1>
                                <hr className="border-[#33b3a9]" />
                            </div>
                            <div >
                                {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                    <div className="mb-2 break-inside-avoid">
                                        <h1 className="text-sm font-bold">Technical</h1>
                                        <div className="flex space-x-1">
                                            {data?.skills?.technicalSkills?.map((item, index) => (

                                                item.skill &&
                                                <p className="text-xs" key={index}>{item.skill},</p>
                                            ))}
                                        </div>
                                    </div>}
                                {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                    <div>
                                        <h1 className="text-sm font-bold break-inside-avoid">Soft Skills</h1>
                                        <div className="flex space-x-1">
                                            {data?.skills?.softSkills?.map((item, index) => (

                                                item.skill &&
                                                <p className="text-xs" key={index}>{item.skill},</p>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                    }

                    {data.certifications && data?.certifications?.length > 0 &&
                        <div className="break-inside-avoid">
                            <div className="text-xs mb-2 text-[#33b3a9] font-bold">
                                <h1>Certifications</h1>
                                <hr className="border-[#33b3a9]" />
                            </div>
                            {data.certifications?.map((item, index) => (
                                <div className="space-y-1 mb-2" key={index}>
                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                    <p className="text-sm">{item.institution}</p>
                                    <p className="text-sm text-gray-600 font-semibold">{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                                </div>
                            ))}


                        </div>}





                </div>


                <div className="w-[70%] p-2">

                    {data?.professionalSummary?.description &&
                        <section className="mb-2">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Summary</h2>
                            <p className="text-sm leading-relaxed">
                                {data.professionalSummary.description}
                            </p>
                        </section>
                    }

                    {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                        <section className="mb-2">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Experience</h2>
                            <div className="space-y-5">
                                {data.employmentHistory?.map((item, index) => (
                                    <div key={index} className="break-inside-avoid">
                                        <div className="flex justify-between">
                                            <h3 className="font-bold text-sm">{item.company}</h3>
                                            <span className="text-sm text-gray-600 font-bold">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-sm font-medium">{item.jobTitle}</p>
                                            <span className="text-sm text-gray-600">{item.city}</span>
                                        </div>

                                        <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                                            {item.description &&
                                                <li>
                                                    {item.description}
                                                </li>
                                            }

                                        </ul>
                                    </div>
                                ))}

                            </div>
                        </section>}

                    {data?.education && data?.education?.length > 0 &&
                        <section className="mb-2 break-inside-avoid">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Education</h2>
                            {data?.education.map((item, index) => (
                                <div key={index} className="break-inside-avoid">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-sm">{item.name}</h3>
                                        <span className="text-sm text-gray-600 font-bold">(
                                            {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                            {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</span>
                                    </div>
                                    <div className="flex justify-between">

                                        <p className="text-sm">{item.degree}</p>
                                        <p className="text-sm">{item.city}</p>
                                    </div>
                                </div>
                            ))}
                        </section>}

                    {data?.projects && data?.projects?.length > 0 &&
                        <section className="">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Projects</h2>
                            <div className="grid grid-cols-1 gap-2">
                                {data?.projects.map((item, index) => (
                                    <div key={index} className="break-inside-avoid">
                                        <h3 className="text-sm font-bold">{item.name}</h3>

                                        <p className="text-sm mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </section>
                    }
                </div>
            </div>

        </div>
    )
}

export default TemplateSeven