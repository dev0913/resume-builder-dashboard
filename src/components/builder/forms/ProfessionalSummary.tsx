import { formDataSchema } from '@/lib/schema/FormSchema';


import React from 'react'
import FormField from './fields/FormField';
import { Textarea } from '@/components/ui/textarea';
import { useFormData } from '@/lib/context/FormDataContext';




function ProfessionalSummary() {
    const {formData} = useFormData();
    const charCount = formData?.professionalSummary?.description?.length || 0;
    return (
        <div className='flex flex-col text-white px-2 py-2 space-y-3'>
            <div>
                <h1 className='text-lg'>
                    Professional Summary
                </h1>
                <p className='text-sm text-gray-600 w-[90%]'>
                    Write 2-4 Short & energetic sentences to interest the reader! Mention your role, experience & most
                    importantaly -your biggest achievements, best qualitties and skills.
                </p>
            </div>

            <div className='flex flex-col '>
                <FormField name="professionalSummary.description" component={Textarea}/>
                <div className='flex justify-between pt-1 text-xs font-thin'>
                    <p className=''>Recruiter Tip: write 50-200 characters to increase interview chances</p>
                    <p>{charCount}/50+</p>
                </div>

            </div>
        </div>
    )
}

export default ProfessionalSummary
