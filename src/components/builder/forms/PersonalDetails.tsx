'use client'

import { CircleUserRound } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FormField from "@/components/builder/forms/fields/FormField";
import FormFile from './fields/FormFile';
import { useFormData } from '@/lib/context/FormDataContext';


function PersonalDetails() {
    const { formData } = useFormData();
    const profileImg = formData?.personalDetails?.profileImg ?? null;

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
        <div className="flex flex-col text-white px-2 py-2">
            <div>
                <h1 className="text-lg">Personal Details</h1>
                <p className="text-sm text-gray-600">
                    Get started with the basics, your name and contact information.
                </p>
            </div>

            <div className="flex mt-3 gap-4">

                <div className="flex flex-col w-[50%] space-y-2">

                    <FormField name="personalDetails.jobTitle" label="JOB TITLE" />
                    <FormField name="personalDetails.firstName" label="FIRST NAME" />
                    <FormField name="personalDetails.phone" label="PHONE" />
                    <FormField name="personalDetails.address.city" label="CITY" />
                </div>

                <div className="flex flex-col w-[50%] space-y-2">
                    <div className="flex gap-2 items-center mt-2">
                        <div className="border h-14 w-14 flex justify-center items-center border-[#3c3c3c] bg-[#1c1c1c] rounded">

                            {
                                profileSrc ? <img src={profileSrc} alt="profile.jpg" className='w-full h-full rounded p-0.5' /> :
                                    <CircleUserRound size={34} strokeWidth={0.5} className='m-2.5' />
                            }
                        </div>
                        <FormFile name="personalDetails.profileImg" />
                    </div>

                    <FormField name="personalDetails.lastName" label="LAST NAME" />
                    <FormField name="personalDetails.email" label="EMAIL" />
                    <FormField name="personalDetails.address.state" label="STATE" />
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;
