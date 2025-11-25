'use client';
import React, { useEffect, useRef, useState } from 'react'

import { ArrowLeft, ArrowRight, Loader2, PencilIcon } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { type CarouselApi } from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { Schema, formDataSchema } from "@/lib/schema/FormSchema"
import { defaultValues } from '@/lib/schema/FormDefaults'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import PersonalDetails from '@/components/builder/forms/PersonalDetails'
import ResumePreview from '@/components/builder/preview/ResumePreview'
import { Form } from "@/components/ui/form"
import ProfessionalSummary from './forms/ProfessionalSummary'
import SocialLinks from './forms/SocialLinks'
import EmploymentHistory from './forms/EmploymentHistory'
import Skills from './forms/Skills'
import Achievements from './forms/Achievements'
import Projects from './forms/Projects'
import Education from './forms/Education'

import Certifications from './forms/Certifications'
import ExtraCurricularActivities from './forms/ExtraCurricularActivities'
import { useFormData } from '@/lib/context/FormDataContext'
import debounce from "debounce";
import useFormPersist from 'react-hook-form-persist'

import FormTitle from './forms/fields/FormTitle';
import { useUser } from '@clerk/nextjs';
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';
import { useTemplate } from '@/lib/context/TemplateContext';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';



function ResumeBuilder({ initialValues }: { initialValues?: Schema }) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [step, setStep] = useState(1)
    const { formData, setFormData } = useFormData();
    const [progress, setProgress] = useState(10);
    const { selectedTemplate } = useTemplate();
    const [loader, setLoader] = useState(false)
    const [open, setOpen] = useState(false);

    const router = useRouter()


    type Schema = z.infer<typeof formDataSchema>

    const form = useForm<Schema>({
        mode: "onChange",
        defaultValues: initialValues || defaultValues,
        resolver: zodResolver(formDataSchema),
    })


    const params = useParams()

    console.log(params)


    // Fetch data from localStorage and initialize the form

    const debouncedUpdate = useRef(debounce((data) => setFormData(data), 300)).current;

    form.watch((data) => {
        debouncedUpdate(data)

    })




    useFormPersist("resumeData", {
        watch: form.watch,
        setValue: form.setValue,
        storage: typeof window !== "undefined" ? window.localStorage : undefined,
        

    });





    const onNext = async () => {
        const stepKeys: (keyof Schema)[] = [
            "personalDetails",
            "professionalSummary",
            "socialLinks",
            "employmentHistory",
            "skills",
            "achievements",
            "projects",
            "certifications",
            "education",
            "activities",
        ]

        if (stepKeys[step - 1]) {
            const isValid = await form.trigger(stepKeys[step - 1])
            if (isValid) {
                setStep((prev) => Math.min(prev + 1, stepKeys.length))
                api?.scrollTo(step)
                setProgress(progress + 10)
            }
        }
    }

    const onPrev = () => {
        setStep((prev) => Math.max(prev - 1, 1))
        api?.scrollTo(step - 2)
        setProgress(progress - 10)
    }

    function onSubmit(values: Schema) {

        console.log(values)
    }

    const { user } = useUser()

    const handleConfirm = () => {
        setOpen(false);
        router.push("/sign-in"); // Navigate to sign-in page
    };


    const handleResumeData = async () => {


        if(!user)
            
        {
            setOpen(true)
            return
        }

        else
        {
            setLoader(true)
        }

        const storedData = localStorage.getItem("resumeData");
        if (!storedData) {
            console.error("No resume data found in localStorage");
            setLoader(false)
            return;
        }



        const resumeData = JSON.parse(storedData);

        const formData = new FormData();


        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement; // Select the file input
        const file = fileInput?.files?.[0];
        if (file) {
            formData.append("profileImg", file); 
            console.log(file) // Append the file
        }

        
  

        // Append the JSON data separately
        formData.append("resumeData", JSON.stringify(resumeData));
        formData.append("resumeName", selectedTemplate.name);
        if (user?.id) {

            formData.append("userId", user.id);
            console.log("user", user?.id)
            
        }




        try {


            if (params.id) {

                const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/resume/updateResumeData/${params.id}`,
                    formData,
                 
                );
                if (response) {


                    console.log("Resume data updated successfully:", response.data);
                    router.replace("/dashboard");
                    localStorage.removeItem("resumeData");
                }

            } else {



                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/resume/saveResumeData`,
                    formData, 
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }

                );
                if (response) {

                    console.log("Resume data saved successfully:", response.data);
                    router.replace("/dashboard");
                    localStorage.removeItem("resumeData");
                }

            }
        } catch (error) {
            console.error("Error saving/updating resume data:", error);
        } finally {
            setLoader(false)
        }
    };

    return (
        <div className='h-full  text-white font-[archivo]'>
            <div className='flex overflow-hidden'>

                <div className='w-[55%] px-10 py-10 flex flex-col items-start bg-primaryBg'>
                    <div className='w-full'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className='flex space-x-4 items-center'>

                                    <FormTitle name='title' placeholder='Untitled Resume' />

                                    <PencilIcon className='w-4' color='#a5a5a5' />
                                </div>

                                <div className='w-full text-sm mt-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center space-x-2'>
                                            <div className='bg-[#14AD23] px-2 rounded'>{progress}%</div>
                                            <div>Resume Score</div>

                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <div className='bg-[#4776D0] px-2 rounded'>+10%</div>
                                            <div>Add Employment History</div>
                                        </div>

                                    </div>

                                    <div className='pt-2'>
                                        <Progress value={Number(progress)} className='bg-[#1c1c1c] [&>div]:bg-gradient-to-r [&>div]:from-[#45FFD2] [&>div]:via-[#FEFFB9] [&>div]:to-[#FF6061]' />
                                    </div>

                                    <div className='mt-7 px-4'>

                                        <Carousel setApi={setApi}>
                                            <CarouselContent>
                                                <CarouselItem><PersonalDetails /></CarouselItem>
                                                <CarouselItem><ProfessionalSummary /></CarouselItem>
                                                <CarouselItem><SocialLinks /></CarouselItem>
                                                <CarouselItem><EmploymentHistory /></CarouselItem>
                                                <CarouselItem><Skills /></CarouselItem>
                                                <CarouselItem><Achievements /></CarouselItem>
                                                <CarouselItem><Projects /></CarouselItem>
                                                <CarouselItem><Certifications /></CarouselItem>
                                                <CarouselItem><Education /></CarouselItem>
                                                <CarouselItem><ExtraCurricularActivities /></CarouselItem>

                                            </CarouselContent>
                                        </Carousel>


                                        <div className="mt-7 flex justify-end gap-3">
                                            {step > 1 && (
                                                <Button
                                                    className="dark:bg-[#161616] text-white border-[#1c1c1c] border hover:shadow hover:shadow-white"
                                                    type="button"
                                                    onClick={onPrev}
                                                >
                                                    <ArrowLeft strokeWidth={1} />
                                                    Back
                                                </Button>
                                            )}
                                            {step < 10 ? (
                                                <Button
                                                    className="bg-white border-[#1c1c1c] border text-black"
                                                    type="button"
                                                    onClick={onNext}
                                                >
                                                    Next
                                                    <ArrowRight strokeWidth={1.5} />
                                                </Button>
                                            ) :




                                                (

                                                    <Button
                                                        className="bg-green-600 border-green-700 text-white hover:bg-green-700"
                                                        type="submit"
                                                        onClick={handleResumeData}
                                                        disabled={loader}
                                                    >
                                                        {loader ? (
                                                            <>
                                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                                {params?.id ? "Updating...." : "Submitting....."}
                                                            </>
                                                        ) : (
                                                            params?.id ? "Update" : "Submit"
                                                        )}

                                                    </Button>
                                                )
                                            }
                                            <Dialog open={open} onOpenChange={setOpen}>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Sign In Required</DialogTitle>
                                                        <DialogDescription>
                                                            You need to sign in to download. Would you like to continue?
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter className="flex justify-end gap-2">
                                                        <Button variant="outline" onClick={() => setOpen(false)}>
                                                            Cancel
                                                        </Button>
                                                        <Button onClick={handleConfirm}>
                                                            Go to Sign In
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>

                                        </div>


                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>

                </div>

                {/* Right Side - Resume Preview */}
                <div className='w-full p-16 bg-[#1c1c1c] border border-[#3c3c3c]'>
                    <ResumePreview />
                </div>
            </div>
        </div>
    )
}

export default ResumeBuilder
