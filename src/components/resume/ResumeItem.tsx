"use client"
import useDimensions from '@/hooks/useDimension';
import { useTemplate } from '@/lib/context/TemplateContext';
import { formDataSchema } from '@/lib/schema/FormSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, PenSquare, Eye, MoreVertical, MoreHorizontal, Download, Edit, Trash, Dot } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';
import { z } from 'zod';

import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useReactToPrint } from 'react-to-print';

type Schema = z.infer<typeof formDataSchema>

type ResumeItemProps = {
  resume: {
    resumeData: Schema;
    resumeName: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  onDelete: (id: string) => void;
};

const ResumeItem: React.FC<ResumeItemProps> = ({ resume, onDelete }) => {
  const { templates, setSelectedTemplate } = useTemplate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);
  const contentRef = useRef<HTMLDivElement>(null);

  const router = useRouter()
  const SelectedTemplate = templates.find((t) => t.name === resume.resumeName);
  const SelectedTemplateComponent = SelectedTemplate?.component;

  const handleUpdate = (id: string) => {
    setSelectedTemplate(SelectedTemplate || templates[0])
    router.push(`/resume/${id}`)
  }

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resume.resumeData.title || "Resume",
  });

  return (
    <div className=''>
      <Card className="bg-innerCard border-zinc-900 w-full h-full hover:scale-105 shadow-sm shadow-innerCard"
      >
        <CardContent className="p-5">
          <div className="flex flex-col justify-between items-start mb-3 ">

            <div className="flex items-center w-full opacity-80">

              {SelectedTemplateComponent && 
              <div className="overflow-y-hidden w-full h-52 aspect-[210/297] bg-white shadow-lg text-black font-[inter] rounded-sm" ref={containerRef}>
                <div style={{ zoom: width ? (1 / 794) * width : 1 }} className={`${!width && "invisible"} text-black`} ref={contentRef} id="resumePreviewContent">

                  <SelectedTemplateComponent data={resume.resumeData} />

                </div>
              </div>}
            </div>
            <div className='flex ml-3 w-full justify-between px-5 py-5'>
              <div className="space-y-2">
                <h3 className="font-medium text-white">{resume.resumeData.title || "Untitled Resume"}</h3>
                <p className="text-sm text-zinc-400 flex"><Dot size={20} color="#25ef32" />Edited {new Date(resume.updatedAt).toLocaleDateString()}</p>
                <div className="flex space-x-2 pt-2">

                  <Button onClick={() => handleUpdate(resume._id)} variant="outline" size="sm" className="bg-transparent text-white border-zinc-700 hover:bg-zinc-900 hover:border-white">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button onClick={() => onDelete(resume._id)} variant="outline" size="sm" className="bg-transparent text-white border-zinc-700 hover:bg-red-800">
                    <Trash className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 text-zinc-400 hover:text-white">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-800 text-zinc-200 border-zinc-700">
                  <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer" onClick={() => reactToPrintFn()}>
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download Resume</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer" onClick={() => handleUpdate(resume._id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

          </div>

        </CardContent>
      </Card>
    </div>

  );
};

export default ResumeItem;


// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Edit, Copy, Download, Trash2, FileText, MoreHorizontal, Briefcase } from "lucide-react"
// import { formatDistanceToNow } from "date-fns"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// interface Resume {
//   _id: string
//   resumeData: any
//   resumeName: string
//   createdAt: string
//   updatedAt: string
// }

// interface ResumeItemProps {
//   resume: Resume
//   onDelete: (id: string) => void
// }

// export default function ResumeItem({ resume, onDelete }: ResumeItemProps) {
//   const [isHovering, setIsHovering] = useState(false)

//   const createdDate = new Date(resume.createdAt)
//   const updatedDate = new Date(resume.updatedAt)
//   const timeAgo = formatDistanceToNow(updatedDate, { addSuffix: true })

//   return (
//     <Card
//       className="overflow-hidden transition-all duration-200 hover:shadow-md dark:hover:shadow-primary/5"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <div className="relative aspect-[1/1.4] bg-muted overflow-hidden">
//         {/* Resume preview thumbnail */}
//         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
//           <FileText className="h-16 w-16 opacity-20" />
//         </div>

//         {/* Hover overlay with actions */}
//         <div
//           className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-200 ${isHovering ? "opacity-100" : "opacity-0"}`}
//         >
//           <div className="flex gap-2">
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button size="icon" variant="secondary">
//                     <Edit className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Edit</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button size="icon" variant="secondary">
//                     <Download className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Download</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button size="icon" variant="secondary">
//                     <Briefcase className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Tailor for job</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           </div>
//         </div>
//       </div>

//       <CardContent className="p-4">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="font-medium text-foreground line-clamp-1">{resume.resumeName}</h3>
//             <p className="text-xs text-muted-foreground mt-1">Edited {timeAgo}</p>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-8 w-8">
//                 <MoreHorizontal className="h-4 w-4" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <Edit className="mr-2 h-4 w-4" />
//                 <span>Edit</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Copy className="mr-2 h-4 w-4" />
//                 <span>Duplicate</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Briefcase className="mr-2 h-4 w-4" />
//                 <span>Tailor for a job</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Download className="mr-2 h-4 w-4" />
//                 <span>Download</span>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-destructive" onClick={() => onDelete(resume._id)}>
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 <span>Delete</span>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Edit, Copy, Download, Trash2, FileText, MoreHorizontal, Briefcase } from "lucide-react"
// import { formatDistanceToNow } from "date-fns"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// interface Resume {
//   _id: string
//   resumeData: any
//   resumeName: string
//   createdAt: string
//   updatedAt: string
// }

// interface ResumeItemProps {
//   resume: Resume
//   onDelete: (id: string) => void
// }

// export default function ResumeItem({ resume, onDelete }: ResumeItemProps) {
//   const [isHovering, setIsHovering] = useState(false)

//   const createdDate = new Date(resume.createdAt)
//   const updatedDate = new Date(resume.updatedAt)
//   const timeAgo = formatDistanceToNow(updatedDate, { addSuffix: true })

//   return (
//     <Card
//       className="overflow-hidden transition-all duration-200 hover:shadow-md dark:hover:shadow-primary/5 flex"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Left side - Resume preview thumbnail */}
//       <div className="relative w-[120px] bg-muted overflow-hidden border-r dark:border-border">
//         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
//           <FileText className="h-10 w-10 opacity-20" />
//         </div>

//         {/* Hover overlay with quick actions */}
//         <div
//           className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-200 ${isHovering ? "opacity-100" : "opacity-0"}`}
//         >
//           <div className="flex flex-col gap-2">
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button size="icon" variant="secondary" className="h-8 w-8">
//                     <Edit className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent side="right">
//                   <p>Edit</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button size="icon" variant="secondary" className="h-8 w-8">
//                     <Download className="h-4 w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent side="right">
//                   <p>Download</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Resume details */}
//       <CardContent className="p-4 flex-1">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="font-medium text-foreground line-clamp-1">{resume.resumeName}</h3>
//             <p className="text-xs text-muted-foreground mt-1">Edited {timeAgo}</p>

//             {/* Action buttons */}
//             <div className="flex gap-2 mt-3">
//               <Button variant="outline" size="sm" className="h-8">
//                 <Edit className="h-3.5 w-3.5 mr-1" />
//                 Edit
//               </Button>
//               <Button variant="outline" size="sm" className="h-8">
//                 <Briefcase className="h-3.5 w-3.5 mr-1" />
//                 Tailor
//               </Button>
//             </div>
//           </div>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="h-8 w-8">
//                 <MoreHorizontal className="h-4 w-4" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <Edit className="mr-2 h-4 w-4" />
//                 <span>Edit</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Copy className="mr-2 h-4 w-4" />
//                 <span>Duplicate</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Briefcase className="mr-2 h-4 w-4" />
//                 <span>Tailor for a job</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Download className="mr-2 h-4 w-4" />
//                 <span>Download</span>
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="text-destructive" onClick={() => onDelete(resume._id)}>
//                 <Trash2 className="mr-2 h-4 w-4" />
//                 <span>Delete</span>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

