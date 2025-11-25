import { useFormData } from "@/lib/context/FormDataContext";
import { formDataSchema } from "@/lib/schema/FormSchema";
import { Award, CircleUserRound, Facebook, Github, Globe, Instagram, Linkedin, LocateIcon, LucideIcon, Mail, Phone, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateSix: React.FC<Props> = ({ data }) => {
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
        <div className="">
            <div className="flex w-full h-full">
                {/* Left Section */}
                <div className="w-[70%] h-full px-5 py-5">

                    <div className="flex items-center mb-2">

                        <div>
                            {profileSrc ? <img src={profileSrc} alt="" className="w-28 h-32 rounded" /> :
                                <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />
                            }
                        </div>
                        <div>
                            <header className="pl-6">
                                <h1 className="text-xl font-bold text-gray-800">{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>
                                <p className="text-sm text-gray-700">{data?.personalDetails?.jobTitle || "Your Title"}</p>
                                <div className="flex flex-wrap items-center gap-x-2 mt-1 text-sm text-gray-600">

                                    {data?.personalDetails?.address?.city &&
                                        <div className="flex items-center gap-1 text-xs">
                                            <LocateIcon size={12} color="#009668" className="text-gray-500" />
                                            <span className="text-xs">{data?.personalDetails?.address?.city}, {data?.personalDetails?.address?.state}</span>
                                        </div>}

                                    {data?.personalDetails?.phone &&
                                        <div className="flex items-center gap-1 text-xs">
                                            <Phone size={12} color="#009668" className="text-gray-500" />
                                            <span>{data?.personalDetails?.phone}</span>
                                        </div>
                                    }


                                    {data?.personalDetails?.email &&
                                        <div className="flex items-center gap-1 text-xs">
                                            <Mail size={12} color="#009668" className="text-gray-500" />
                                            <span>{data?.personalDetails?.email}</span>
                                        </div>
                                    }

                                </div>
                            </header>


                        </div>
                    </div>

                    {data?.socialLinks && data?.socialLinks?.length > 0 &&
                        <section className="mb-2">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Profiles</h2>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                {data?.socialLinks.map((item, index) => {
                                    const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                                    return (
                                        <div className="flex text-sm w-full break-words" key={index}>
                                            <div className="flex space-x-1" >
                                                <Icon size={14} className="shrink-0" />
                                                {item.url &&
                                                    <a href={`${item.url}`} className='break-all'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    ><span> {item.url}</span></a>}
                                            </div>


                                        </div>)
                                })}


                            </div>
                        </section>
                    }



                    {data?.professionalSummary?.description &&
                        <section className="mb-2">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Summary</h2>
                            <p className="text-sm leading-relaxed">
                                {data?.professionalSummary?.description}
                            </p>
                        </section>}

                    {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                        <section className="mb-2">
                            <h2 className="text-sm font-bold text-gray-800 border-b border-black mb-1">Experience</h2>
                            <div className="space-y-5">

                                {data.employmentHistory?.map((item, index) => (
                                    <div key={index} className="break-inside-avoid">
                                        <div className="flex justify-between">
                                            <h3 className="font-bold text-sm">{item.company}</h3>
                                            <span className="text-sm text-gray-600 font-bold">
                                                (
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
                                        <span className="text-sm text-gray-600 font-bold">
                                            (
                                            {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                            {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm">{item.degree}</p>
                                        <p className="text-sm">{item.city}</p>

                                    </div>
                                </div>
                            ))}
                        </section>}

                    {data?.projects && data?.projects?.length > 0 &&
                        <section>
                            <h2 className="break-inside-avoid text-sm font-bold text-gray-800 border-b border-black mb-1">Projects</h2>
                            <div className="grid grid-cols-2 gap-4">

                                {data?.projects.map((item, index) => (
                                    <div key={index} className="">
                                        <h3 className="text-sm font-bold">{item.name}</h3>

                                        <p className="text-sm mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </section>}



                </div>

                {/* Right Section */}

                <div className="w-[30%] bg-[#009668] text-white p-2 pt-[154px] min-h-[1120px]">

                    {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                        <section className="mb-2">
                            <h2 className="text-xs border-b border-gray-300 pb-1 mb-3">Skills</h2>
                            <div className="space-y-4">
                                {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                    <div className="space-y-1">

                                        <h3 className="text-sm">Technical</h3>

                                        <div className="flex space-x-1 flex-wrap">
                                            {data?.skills?.technicalSkills?.map((item, index) => (

                                                item.skill &&
                                                <p className="text-xs" key={index}>{item.skill}, </p>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                    <div className="space-y-1">
                                        <h3 className="text-sm">Soft Skills</h3>
                                        <div className="flex space-x-1">
                                            {data?.skills?.softSkills?.map((item, index) => (

                                                item.skill &&
                                                <p className="text-xs" key={index}>{item.skill},</p>
                                            ))}
                                        </div>
                                    </div>
                                }

                            </div>
                        </section>
                    }

                    {
                        data.certifications && data?.certifications?.length > 0 &&
                        <section>
                            <h2 className="text-xs  border-b border-gray-300 pb-1 mb-3">Certifications</h2>
                            <div className="space-y-4">


                                {data.certifications?.map((item, index) => (
                                    <div className="break-inside-avoid" key={index}>
                                        <h3 className="text-sm">{item.name}</h3>
                                        <p className="text-xs">{item.institution}</p>
                                        <p className="text-xs">{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                                    </div>
                                ))}

                            </div>
                        </section>}

                </div>
            </div>

        </div>
    )
}

export default TemplateSix