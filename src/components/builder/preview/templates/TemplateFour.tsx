import { useFormData } from "@/lib/context/FormDataContext";
import { formDataSchema } from "@/lib/schema/FormSchema";
import { CircleUserRound, Github, Globe, Twitter, LucideIcon, Facebook, Instagram, Linkedin, LinkedinIcon, Locate, Mail, MailIcon, Phone, PhoneIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateFour: React.FC<Props> = ({ data }) => {

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
        instagram: Instagram
    };

    return (

        <div className='bg-white h-full w-full'>
            <div className="flex">

                {/* Left Section */}
                <div className="w-[35%] min-h-[1120px]">



                    <div className=" h-[300px] flex flex-col items-start justify-center bg-[#0193b2] w-full px-5 space-y-2 text-white py-2">

                        <div>
                            {
                                profileSrc ? <img src={profileSrc} alt="profile.jpg" className='w-28 h-28 rounded object-contain' /> :
                                    <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />
                            }
                        </div>

                        <div>
                            <h1 className='font-bold text-2xl'>{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>
                            <h1 className='text-foreground text-sm'>{data?.personalDetails?.jobTitle || "Your Role"}</h1>
                        </div>

                        <div className="space-y-2">
                            {data?.personalDetails?.address?.city && data?.personalDetails?.address?.state ?
                                <div className="flex space-x-2">
                                    <Locate size={18} />
                                    <span className="text-xs">{data.personalDetails?.address.city}, {data.personalDetails.address.state}</span>
                                </div> : null
                            }
                            {data?.personalDetails?.phone ?
                                <div className="flex space-x-2">
                                    <PhoneIcon size={18} />
                                    <span className="text-xs">+91 {data.personalDetails.phone}</span>
                                </div> : null
                            }
                            {data?.personalDetails?.email ?
                                <div className="flex space-x-2">
                                    <MailIcon size={18} />
                                    <span className="text-xs">{data.personalDetails.email}</span>
                                </div> : null
                            }

                        </div>

                    </div>

                    <div className="min-h-[820px] w-full bg-[#cfebef] px-5 py-2 space-y-2">

                        {data?.socialLinks && data?.socialLinks?.length > 0 &&
                            <div className="space-y-2">
                                <h2 className="text-base font-semibold border-b border-blue-400">Profiles</h2>
                                <div className="flex flex-col items-start gap-2 text-sm text-gray-600">
                                    {/* <Linkedin size={16} /> */}
                                    {data?.socialLinks?.map((item, index) => {
                                        const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                                        return (
                                            <div key={index} className="flex space-x-2 break-words">
                                                <Icon size={16} className="text-gray-600 shrink-0" />
                                                {item.url &&
                                                    <a href={`${item.url}`} className='break-all'
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    ><span>{item.url}</span>
                                                    </a>}
                                            </div>

                                        )
                                    })}
                                </div>

                            </div>}

                        {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                            <div className="space-y-2 ">
                                <h2 className="text-base font-semibold border-b border-blue-400 pb-1">Skills</h2>

                                {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                                    <div className="space-y-1">
                                        <h3 className="text-md font-medium">Technical Skills</h3>
                                        <div className="flex space-x-1">
                                            {data?.skills?.technicalSkills?.map((item, index) => (

                                                item.skill &&

                                                <p className="text-sm" key={index}  >{item.skill},</p>



                                            ))}
                                        </div>
                                    </div>}


                                {data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                                    <div className="space-y-1">
                                        <h3 className="text-md font-medium">Soft Skills</h3>
                                        <div className="flex space-x-1">
                                            {data?.skills?.softSkills?.map((item, index) => (
                                                item.skill &&
                                                <p className="text-sm" key={index}>{item.skill},</p>
                                            ))}
                                        </div>
                                    </div>
                                }

                            </div>
                        }
                        {data.certifications && data?.certifications?.length > 0 &&
                            <div className="space-y-2 ">
                                <h2 className="text-base font-semibold border-b border-blue-400 pb-1">Certifications</h2>
                                {data.certifications?.map((item, index) => (
                                    <div className="space-y-1 break-inside-avoid" key={index}>
                                        {item.name && <h3 className="text-md font-medium">{item.name}</h3>}
                                        <div>

                                            {item.institution && <p className="text-sm">{item.institution}</p>}
                                            {item.endDate && <p className="text-sm text-gray-600 font-semibold">{item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        }
                    </div>



                </div>



                {/* Right Section */}
                <div className="w-[65%]">
                    {
                        data?.professionalSummary?.description &&
                        <div className="bg-[#cfebef] p-2">
                            <p className="text-sm leading-relaxed text-gray-700">
                                {data.professionalSummary.description}
                            </p>
                        </div>
                    }

                    <div className="p-2 space-y-2">


                        {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                            <div className="space-y-4">
                                <h2 className="text-base font-semibold border-b border-blue-400 pb-1">Experience</h2>

                                {data?.employmentHistory.map((item, index) => (
                                    <div className="space-y-1 break-inside-avoid" key={index}>
                                        <div className="flex justify-between">
                                            <h3 className="text-sm font-medium">{item.company}</h3>
                                            {<span className="text-sm text-gray-600">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</span>}
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-sm font-medium">{item.jobTitle}</p>
                                            <span className="text-sm text-gray-600">{item.city}</span>
                                        </div>

                                        <ul className="list-disc pl-5 text-sm space-y-1">
                                            {item.description && <li>
                                                {item.description}
                                            </li>}

                                        </ul>
                                    </div>
                                ))}
                            </div>
                        }

                        {data?.education && data?.education?.length > 0 &&
                            <div className="space-y-2 ">
                                <h2 className="text-base font-semibold border-b border-blue-400 pb-1">Education</h2>

                                {data?.education.map((item, index) => (

                                    <div className="space-y-1 break-inside-avoid" key={index}>
                                        <div className="flex justify-between">
                                            <h3 className="text-md font-bold">{item.name}</h3>
                                            {<span className="text-sm text-gray-600 font-bold">(
                                                {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                                                {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})
                                            </span>}
                                        </div>
                                        <p className="text-sm">{item.city}</p>
                                        <p className="text-sm">{item.degree}</p>
                                    </div>
                                ))}
                            </div>
                        }

                        {data?.projects && data?.projects?.length > 0 &&
                            <div className="space-y-2 break-inside-avoid ">
                                <h2 className="text-base font-semibold border-b border-blue-400 pb-1">Projects</h2>

                                {data?.projects.map((item, index) => (


                                    <div className="space-y-1" key={index}>
                                        <div className="">
                                            <h3 className="text-md font-bold">{item.name}</h3>

                                        </div>
                                        <p className="text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}


                            </div>}

                    </div>

                </div>


            </div>
        </div>
    )
}

export default TemplateFour