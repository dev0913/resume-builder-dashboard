"use client"


import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

import { formDataSchema } from '@/lib/schema/FormSchema'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Edit, FileIcon, MoreHorizontal, Scissors, Trash } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTemplate } from '@/lib/context/TemplateContext'
import { useRouter } from 'next/navigation'
import useDimensions from '@/hooks/useDimension'
import ResumeList from '@/components/resume/ResumeList'



type Schema = z.infer<typeof formDataSchema>

interface Resume {
  _id: string
  resumeData: Schema
  resumeName: string
  createdAt: string
  updatedAt: string
}

export default function Dashboard() {
  const { user } = useUser()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const { selectedTemplate, getTemplateByName, templates, setSelectedTemplate } = useTemplate()
  const router = useRouter()

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);

  

  return (
    <div className="bg-black min-h-screen p-4 relative">
      <div className="absolute inset-10 z-10 blur-2xl opacity-15" style={{
    background: 'linear-gradient(90deg, #45ffd2 0%, #fdffa8 51%, #ff6061 100%)',
    boxShadow: 'inset 0 0 60px rgba(0,0,0,0.2)',
  }} />

   
      <ResumeList />

      
    </div>
  )
}

