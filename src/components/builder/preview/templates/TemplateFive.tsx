import { formDataSchema } from "@/lib/schema/FormSchema";
import { z } from "zod";
import { Mail, Phone, Globe, Linkedin, Github, Award, LocateIcon, LucideIcon, Twitter, Facebook, Instagram } from "lucide-react"

type schema = z.infer<typeof formDataSchema>;

type Props = {
    data: schema;
};



const TemplateFive: React.FC<Props> = ({ data }) => {
    const socialIcons: Record<string, LucideIcon> = {
        linkedin: Linkedin,
        github: Github,
        twitter: Twitter,
        facebook: Facebook,
        instagram: Instagram
    };
    return (
        <div className="w-full h-full px-5 py-5">

            <header className="mb-3 text-center">
                <h1 className="text-3xl font-bold text-gray-800">{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName}</h1>
                <p className="text-lg text-gray-700">{data?.personalDetails?.jobTitle || "Your Title"}</p>
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

            </header>
            <hr className="mb-3" />


            {data?.socialLinks && data?.socialLinks?.length > 0 &&
                <section className="mb-6 flex">
                    <div className="w-[30%] flex">

                        <h2 className="text-md font-bold ">Profiles</h2>
                    </div>
                    <div className=" grid grid-cols-2 justify-start w-full gap-5">

                        {data?.socialLinks.map((item, index) => {
                            const Icon = socialIcons[item.name?.toLowerCase()] || Globe;
                            return (
                                <div className="text-sm break-words " key={index}>

                                    <div className="flex space-x-1 items-start">

                                        <Icon size={16} className="shrink-0" />
                                        {item.url &&
                                            <a href={`${item.url}`} className='break-all'
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            ><span>{item.url}</span>
                                            </a>}
                                    </div>
                                    {/* <span className="text-gray-600">StackOverflow</span> */}
                                </div>)
                        })}


                    </div>

                </section>

            }

            {data?.socialLinks && data?.socialLinks?.length > 0 && <hr className="mb-3" />}


            {data?.professionalSummary?.description &&

                <section className="mb-3 flex w-full">

                    <div className="w-[23%]">

                        <h2 className="text-md font-bold ">Summary</h2>
                    </div>
                    <div className="w-[77%]">
                        <p className="text-sm">
                            {data.professionalSummary.description}
                        </p>

                    </div>

                </section>}

            {data?.professionalSummary?.description && <hr className="mb-3" />}

            {data?.employmentHistory && data?.employmentHistory?.length > 0 &&
                <section className="mb-3 flex">

                    <div className="w-[23%]">

                        <h2 className="text-md font-bold">Experience</h2>
                    </div>
                    <div className="space-y-4 w-[77%]">
                        {data.employmentHistory?.map((item, index) => (


                            <div className="break-inside-avoid" key={index}>
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
                        ))}
                    </div>
                </section>}

            {data?.employmentHistory && data?.employmentHistory?.length > 0 && <hr className="mb-3" />}


            {data?.education && data?.education?.length > 0 &&
                <section className="mb-3 flex">

                    <div className="w-[30%]">
                        <h2 className="text-md font-bold">Education</h2>
                    </div>
                    <div className="w-full space-y-2 ">

                        {data?.education.map((item, index) => (
                            <div key={index} className="break-inside-avoid">
                                <div className="flex justify-between">
                                    <h3 className="font-bold">{item.name}</h3>
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


                    </div>
                </section>}

            {data?.education && data?.education?.length > 0 && <hr className="mb-3" />}





            {data?.projects && data?.projects?.length > 0 &&
                <section className="mb-3 flex">

                    <div className="w-[30%]">

                        <h2 className="text-md font-bold">Projects</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full ">

                        {data?.projects.map((item, index) => (


                            <div className="space-y-2 break-inside-avoid" key={index}>
                                <div className="flex flex-col">

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
                </section>}

            {data?.projects && data?.projects?.length > 0 && <hr className="mb-3" />}




            {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
                <section className="mb-3 flex w-full break-inside-avoid">
                    <div className="w-[30%]">

                        <h2 className="text-md font-bold">Skills</h2>
                    </div>
                    <div className="flex space-x-10 justify-start w-full">
                        {data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
                            <div className="">
                                <h3 className="font-bold">Technical Skills</h3>

                                <div className="flex space-x-1">
                                    {data?.skills?.technicalSkills?.map((item, index) => (

                                        item.skill &&
                                        <p className="text-sm" key={index}>{item.skill}.</p>

                                    ))}
                                </div>
                            </div>
                        }
                        {
                            data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
                            <div className="">
                                <h3 className="font-bold">Soft Skills</h3>
                                <div className="flex space-x-1">
                                    {data?.skills?.softSkills?.map((item, index) => (

                                        item.skill &&
                                        <p className="text-sm" key={index}>{item.skill},</p>
                                    ))}
                                </div>
                            </div>}

                    </div>
                </section>}

            {((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) && <hr className="mb-3" />}


            {data.certifications && data?.certifications?.length > 0 &&
                <section className="mb-3 flex break-inside-avoid  ">
                    <div className="w-[30%]">

                        <h2 className="text-md font-bold">Certifications</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full">

                        {
                            data.certifications?.map((item, index) => (
                                <div key={index}>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm">{item.institution}</p>
                                    <p className="text-sm text-gray-600 font-bold">
                                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </section>
            }

        </div>
    )
}

export default TemplateFive
