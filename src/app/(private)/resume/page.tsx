import ResumeBuilder from '@/components/builder/ResumeBuilder'
import { FormDataProvider } from '@/lib/context/FormDataContext'
import { TemplateProvider } from '@/lib/context/TemplateContext'
import React from 'react'

const page = () => {
       
    return (
        
            <div>
              
                    <ResumeBuilder />
                
            </div>

    )
}

export default page
