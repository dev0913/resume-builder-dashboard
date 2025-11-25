"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserButton } from '@clerk/nextjs'
import { PlusCircle, FileText, Layout, Settings } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

import { formDataSchema } from '@/lib/schema/FormSchema'
import { z } from 'zod'
import ResumeItem from './ResumeItem'

type Schema = z.infer<typeof formDataSchema>

interface Resume {
  _id: string
  resumeData: Schema
  resumeName: string
  createdAt: string
  updatedAt: string
}

export default function ResumeList() {
  const { user } = useUser()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchResumes()
    }
  }, [user])

  const fetchResumes = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/resume/getResumeData`, {
        params: { createdBy: user?.id },
      })
      setResumes(response.data.data.resumeData)
    } catch (error) {
      console.error('Error fetching resumes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      console.log(id)
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/resume/deleteResume/${id}`)
      fetchResumes()
    } catch (error) {
      console.error('Error deleting resume:', error)
    }
  }

  return (

    <div className='relative z-20'>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">My Resumes</h1>
        <Link href="/resume">
        <Button variant="outline" className="bg-white text-black hover:bg-innerCard">
          Create New Resume
        </Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 p-2">
        {resumes.map((resume, index) => {

       
            
          return (
            <ResumeItem key={resume._id} resume={resume} onDelete={handleDelete}/>
          )
        })}
      </div>
    </div>
  )
}

