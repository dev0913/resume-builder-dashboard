import React, { useEffect, useState } from 'react'
import { formDataSchema } from "@/lib/schema/FormSchema";

import { useFormData } from '@/lib/context/FormDataContext';
import { z } from 'zod';
import { CircleUserRound, Facebook, Github, Globe, Home, Instagram, Linkedin, LucideIcon, Mail, Phone, Twitter } from 'lucide-react';


type schema = z.infer<typeof formDataSchema>;

type Props = {
  data: schema;
};


const TemplateOne: React.FC<Props> = ({ data }) => {

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

  // if (!data?.professionalSummary?.description) return null;
  return (
    <div className='w-full h-full'>

      {/* Personal Details */}

      <div className='w-full bg-[#0D365E] h-32 flex items-center text-white'>

        <div className='flex justify-between items-center px-4 w-full'>

          <div className='bg-white rounded-full w-24 h-24 flex justify-center'>
            {
              profileSrc ? <img src={profileSrc} alt="profile.jpg" className='rounded-full w-full' /> :
                <CircleUserRound size={60} strokeWidth={0.5} className='m-auto text-black' />
            }
          </div>

          <div className='flex flex-col text-center'>

            <h1 className='text-3xl'>{data?.personalDetails?.firstName || "Your Name"}  {data?.personalDetails?.lastName} </h1>
            <p className='text-lg'>{data?.personalDetails?.jobTitle || "Your Role"}</p>

          </div>


          <div className=''>

            <ul className='flex flex-col items-start pr-7 text-xs space-y-1'>
              {data?.personalDetails?.phone &&
                <div className='flex space-x-1'>
                  <Phone size={14} />
                  <li>+91 {data.personalDetails.phone}</li>
                </div>
              }
              {data?.personalDetails?.email &&
                <div className='flex space-x-1'>
                  <Mail size={14} />
                  <li>+91 {data.personalDetails.email}</li>
                </div>
              }
              {/* Social Links */}
              {
                data?.socialLinks && data?.socialLinks?.length > 0 &&
                <div className=''>
                  <ul className='space-y-1'>
                    {data?.socialLinks?.map((item, index) => {
                      const Icon = socialIcons[item.name?.toLowerCase()] || Globe;

                      return (
                        <div className='flex space-x-1 break-words' key={index}>
                          <Icon size={14} className='shrink-0' />
                          <a href={`${item.url}`} className='break-all'
                            target="_blank"
                            rel="noopener noreferrer"
                          ><span> {item.url}</span></a>
                        </div>
                      )
                    })}
                  </ul>
                </div>
              }
              {data?.personalDetails?.address?.city && data?.personalDetails?.address?.state && (
                <div className='flex space-x-1'>
                  <Home size={14} />
                  <li>{data.personalDetails?.address.city}, {data.personalDetails.address.state}</li>
                </div>
              )}
            </ul>

          </div>
        </div>

      </div>

      <div className='w-full flex min-h-[700px]'>
        <div className='w-[30%] border-r-2 border-[#C4A079] mt-6 pl-7 pr-3 flex flex-col'>

          {/* Professional Summary */}
          {
            data?.professionalSummary?.description &&

            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 mb-4'>
              <div>
                <h1 className='text-[#C4A079] font-bold'>SUMMARY</h1>
              </div>
              <div className='break-words'>
                <p className='text-sm break-words'>
                  {data?.professionalSummary?.description}
                </p>
              </div>
            </div>
          }

          {/* Technical Skills */}

          {
            data?.skills?.technicalSkills && data?.skills?.technicalSkills?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 mb-4'>
              <div className='text-[#C4A079] font-bold'><h1>TECHNICAL SKILLS</h1></div>
              <div className='ml-7'>
                <ul className='list-disc space-y-1 text-sm'>
                  {
                    data?.skills?.technicalSkills?.map((item, index) => (
                      item.skill &&
                      <li key={index}>{item.skill}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          }

          {/* Certifications */}

          {data.certifications && data?.certifications?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 mb-4 break-inside-avoid'>
              <div className='text-[#C4A079] font-bold'><h1>CERTIFICATIONS</h1></div>
              <div className='ml-3'>
                <ul className='list-disc space-y-1 text-sm'>
                  {
                    data.certifications?.map((item, index) => (
                      <div key={index} className='break-inside-avoid'>
                        {item.name && <li>{item.name} |</li>}
                        {item.institution && <p>{item.institution} | {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>}
                      </div>

                    ))
                  }

                </ul>
              </div>
            </div>
          }

          {/* Soft Skills */}

          {
            data?.skills?.softSkills && data?.skills?.softSkills?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 mb-4 break-inside-avoid'>
              <div className='text-[#C4A079] font-bold'><h1>POWER SKILLS</h1></div>
              <div className='ml-7'>
                <ul className='list-disc space-y-1 text-sm'>
                  {
                    data?.skills?.softSkills?.map((item, index) => (
                      item.skill && <li key={index}>{item.skill}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          }



          {/* Activities */}

          {
            data?.activities && data?.activities?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 break-inside-avoid'>
              <div className='text-[#C4A079] font-bold'><h1>EXTRA CURRICULAR ACTIVITIES</h1></div>
              <div className='ml-7'>
                <ul className='list-disc space-y-2 text-sm'>
                  {data?.activities?.map((item, index) => (
                    <li key={index}>{item.activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          }


        </div>
        <div className='w-[70%] h-full mt-2 pl-7 pr-3 mr-10'>

          {/* Experience */}

          {
            data?.employmentHistory && data?.employmentHistory?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] pb-4 py-4'>
              <div>
                <h1 className='text-[#C4A079] font-bold'>EXPERIENCE</h1>
              </div>
              <div className='space-y-3'>
                {
                  data?.employmentHistory?.map((item, index) => (

                    <div className='space-y-1 break-inside-avoid' key={index}>
                      <div className='flex justify-between items-start text-sm'>
                        <p>{item.company}</p>
                        {<p>(
                          {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                          {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>}
                      </div>

                      <div className='pl-3'>
                        <ul className='text-xs space-y-1 list-disc'>
                          {item.jobTitle && <li className='text-xs'>{item.jobTitle}</li>}

                          <ul className='ml-4 space-y-1 list-disc'>
                            {
                              item.description && <li>{item.description}</li>
                            }
                          </ul>
                        </ul>
                      </div>
                    </div>

                  ))
                }
              </div>
            </div>
          }

          {/* Achievements */}

          {
            data?.achievements && data?.achievements?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] py-4'>

              <div><h1 className='text-[#C4A079] font-bold'>ACHIEVEMENTS</h1></div>
              <div className='space-y-2'>
                {data?.achievements?.map((item, index) => (
                  <div className='space-y-1 break-inside-avoid' key={index}>
                    <div className='flex justify-between text-sm'>
                      <p> {item.name}</p>
                      <p>(
                        {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                    </div>
                    <div className='text-xs'>
                      <p> {item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }

          {/* Projects */}

          {
            data?.projects && data?.projects?.length > 0 &&
            <div className='space-y-2 border-b-2 border-[#C4A079] py-4 break-inside-avoid'>

              <div><h1 className='text-[#C4A079] font-bold'>PROJECTS</h1></div>
              <div className='space-y-2'>
                {
                  data?.projects?.map((item, index) => (

                    <div className='space-y-1 break-inside-avoid' key={index}>
                      <div className='flex justify-between text-sm'>
                        <p> {item.name}</p>
                        <p>{item.date ? new Date(item.date).toLocaleDateString("en-GB") : ""}</p>
                      </div>
                      <div className='text-xs'>
                        {item.description && <li> {item.description}</li>}

                      </div>
                    </div>
                  ))
                }


              </div>
            </div>
          }

          {/* Education */}

          {
            data?.education && data?.education?.length > 0 &&
            <div className='break-inside-avoid space-y-2 border-b-2 border-[#C4A079] py-4'>

              <div><h1 className='text-[#C4A079] font-bold'>EDUCATION</h1></div>
              <div className='space-y-2'>
                {data?.education?.map((item, index) => (
                  <div className='space-y-1 break-inside-avoid' key={index}>
                    <div className='flex justify-between text-sm'>
                      {item.degree && <p>{item.degree} | {item.city}</p>}
                      <p>(
                        {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                        {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"})</p>
                    </div>
                    {
                      item.name &&
                      <div className='text-xs'>
                        {item.name} | {item.percentage}
                      </div>
                    }

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

export default TemplateOne
