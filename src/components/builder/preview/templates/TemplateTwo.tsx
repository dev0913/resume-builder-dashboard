import { formDataSchema } from '@/lib/schema/FormSchema';
import { Mail, Trophy } from 'lucide-react';
import React from 'react'
import { z } from 'zod';


type schema = z.infer<typeof formDataSchema>;

type Props = {
  data: schema;
};


const TemplateTwo: React.FC<Props> = ({ data }) => {


  return (
    <div className='flex flex-col mx-5 space-y-5 text-gray-500'>

      {/* Personal Details */}
      <div className='flex flex-col mt-10 justify-center items-center'>
        <div>
          <h1 className='text-xl font-bold text-black'>{data?.personalDetails?.firstName}  {data?.personalDetails?.lastName}</h1>
        </div>
        <div>
          <h3 className=''>{data?.personalDetails?.jobTitle}</h3>
        </div>
        <div className='flex space-x-5 justify-center flex-wrap just text-black items-center'>
          
          <li>{data?.personalDetails?.email && data?.personalDetails.email}</li>
          {data?.socialLinks?.map((item, index) => (
            <li key={index}>{item.url}</li>
          ))}
          {data?.personalDetails?.address?.city && data?.personalDetails?.address?.state && (
            <li>{data.personalDetails?.address.city}, {data.personalDetails.address.state}</li>
          )}
        </div>

      </div>

      {/* Summary */}

      {
        data?.professionalSummary?.description &&

        <div className='flex flex-col'>
          <div className='text-center'>
            <h1 className='font-bold text-lg text-black'>Summary</h1>
            <hr className=' border-1 border-gray-500' />
          </div>
          <div className='pt-2 text-sm'>
            <p> {data?.professionalSummary?.description}</p>
          </div>
        </div>
      }

      {/* Experience */}

      {
        data?.employmentHistory && data?.employmentHistory?.length > 0 &&

        <div className='flex flex-col space-y-3'>
          <div className=''>
            <h1 className='text-center font-bold text-lg text-black'>RELEVANT EXPERIENCE</h1>
            <hr className=' border-10 border-gray-500' />
          </div>
          {
            data?.employmentHistory?.map((item, index) => (
              <div className='break-inside-avoid' key={index}>
                <div className='flex justify-between'>
                  <h1 className='text-gray-500'>{item.company}</h1>
                  <p>{item.city}</p>
                </div>
                <div className='flex justify-between'>
                  <h1 className='text-black'>{item.jobTitle}</h1>
                  <p>
                    {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                    {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</p>
                </div>
                <div className='mt-2'>
                  {
                    item.description && <li className='text-sm'>{item.description}</li>
                  }

                </div>
              </div>
            ))
          }

        </div>
      }

      {/* Education */}
      {
        data?.education && data?.education?.length > 0 &&

        <div className='break-inside-avoid'>
          <div className='mb-2'>
            <h1 className='font-bold text-lg text-black text-center'>Education</h1>
            <hr className='border-10 border-gray-500' />
          </div>
          <div className='space-y-3'>
            {
              data?.education?.map((item, index) => (
                <div className='' key={index}>
                  <div className='flex justify-between'>
                    <h3>{item.name}</h3>
                    {item?.city && <h3>{item.city}, VA</h3>}
                  </div>
                  <div className='flex justify-between text-sm'>
                    <h3 className='text-black'>{item.degree}</h3>
                    <h3>
                      {item.startDate ? new Date(item.startDate).toLocaleDateString("en-GB") : "N/A"} -
                      {item.endDate ? new Date(item.endDate).toLocaleDateString("en-GB") : "Present"}</h3>
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
        <div className='break-inside-avoid'>
          <div>
            <h1 className='font-bold text-lg text-black text-center'>Achievements</h1>
            <hr className='border-10 border-gray-500' />
          </div>
          <div className='mt-3 flex items-start space-x-7'>
            {
              data?.achievements?.map((item, index) => (
                <div className='w-[32%] flex space-x-2' key={index}>
                  <div>
                    <Trophy size={20} strokeWidth={1.25} />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <h1 className='text-black font-bold text-sm'>{item.name}</h1>
                    <p className='text-xs'>{item.description}</p>
                  </div>
                </div>
              ))
            }


          </div>
        </div>

      }


      {/* Skills */}

      {
        ((data?.skills?.technicalSkills?.length ?? 0) > 0 || (data?.skills?.softSkills?.length ?? 0) > 0) &&
        <div className='break-inside-avoid'>

          <div>
            <h1 className='font-bold text-lg text-black text-center'>Skills</h1>
            <hr className='border-10 border-gray-500' />
          </div>


          <div className='mt-2 '>


            <div className='flex text-sm space-x-3'>

              {data?.skills?.technicalSkills?.map((item, index) => (

                item.skill && <li key={index}>{item.skill}</li>

              ))
              }

              {data?.skills?.softSkills?.map((item, index) => (

                item.skill && <li key={index}>{item.skill}</li>

              ))
              }

            </div>

          </div>



        </div>


      }


      {/* Certifications */}

      {
        data?.certifications && data?.certifications?.length > 0 &&
        <div className='break-inside-avoid'>

          <div className='mb-2'>
            <h1 className='font-bold text-lg text-black text-center'>CERTIFICATION</h1>
            <hr className='border-10 border-gray-500' />
          </div>
          <div className='space-y-2'>
            {data?.certifications?.map((item, index) => (
              <div className='flex items-center space-x-2' key={index}>

                {item.name &&  <h1>{item.name} -</h1> }
               
                {item.institution && <p className='text-sm'>{item.institution}({item.mode})</p>}
              </div>
            ))}



          </div>

        </div>

      }

      {/* Activity */}
      {
        data?.activities && data?.activities?.length > 0 && 
        <div className=''>
        <div className='mb-2'>
          <h1 className='font-bold text-lg text-black text-center'>Extra - Curricular Activity</h1>
          <hr className='border-10 border-gray-500' />
        </div>

        <div className='flex text-sm space-x-2'>
          {data?.activities?.map((item,index) => (
            item.activity && <li key={index}>{item.activity}</li> 
          ))}
         
          
          
        </div>
      </div>
      }
      
    </div>
  )
}

export default TemplateTwo
