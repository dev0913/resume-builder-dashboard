'use client'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import './style.css'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Link from 'next/link'
import { useTemplate } from '@/lib/context/TemplateContext'
import { useRouter } from 'next/navigation'



function Templates() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const { setSelectedTemplate, templates } = useTemplate()

  const router = useRouter()

  useEffect(() => {
    if (!api) {
      return
    }


    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleTemplate = (template:any) => {
    setSelectedTemplate(template)
    router.replace("/resume")

  }
  return (
    <div id='templates' className='bg-black h-full text-white pt-8 md:pt-7'>
      <div className='flex flex-col'>
        <div className='text-center text-lg md:text-2xl lg:text-3xl font-semibold px-7 md:pl-0 md:w-[50%] md:mx-auto'>
          Pick one of many world-class templates and build your resume in minutes.
        </div>
        <div className='h-96 overflow-hidden mt-8 flex items-center justify-center lg:w-[90%] lg:h-[60%] lg:mx-auto'>
          <Carousel
            opts={{
              align: "start",
            }}
            setApi={setApi}

            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {templates.length > 0 ? (
                templates.map((template, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card onClick={() => handleTemplate(template)} className='w-[90%] m-auto sm:w-[60%] md:m-0 md:w-[100%] bg-black cursor-pointer'>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className='w-[89%] md:w-[90%] p-1'>
                            <img
                              src={template.image}
                              alt='/images/Resume template.png'
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <img src='/images/Resume template.png' alt='.jpg' />
              )}
            </CarouselContent>
            <CarouselPrevious className='bg-black' />
            <CarouselNext className='bg-black' />
          </Carousel>
        </div>
        <div className='flex justify-center mt-5 gap-3'>
          <CircleArrowLeft size={28} strokeWidth={1} className="cursor-pointer" onClick={() => api?.scrollTo(current - 1)} />
          <CircleArrowRight size={28} strokeWidth={1} className="cursor-pointer" onClick={() => api?.scrollTo(current + 1)} />
        </div>
        <div>


          <div className='mt-6 border w-44 text-sm py-2 flex m-auto justify-center rounded gradient-text font-bold cursor-pointer lg:text-lg hover:shadow-sm hover:shadow-white'>
            <Link href="/templates"><p className='w-44 text-center'>See All Templates</p></Link>
          </div>


        </div>

      </div>

      <div className='mt-10 flex items-center justify-center '>
        <hr className='w-[70%] border-gray-500 border-t-1' />
      </div>

      <div className='mt-5 flex flex-wrap w-[60%]  justify-center m-auto gap-6 items-center'>
        <div className='m-11 mt-3'><img src="/images/template-logo-1.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-2.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-3.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-4.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-5.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-6.png" alt=".jpg" className='w-24 lg:w-28' /></div>
        <div className='m-11 mt-3'><img src="/images/template-logo-7.png" alt=".jpg" className='w-24 lg:w-28' /></div>
      </div>
    </div>
  )
}

export default Templates
