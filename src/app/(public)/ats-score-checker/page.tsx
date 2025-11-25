'use client'
import { Input } from "@/components/ui/input";
// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// const pages = () => {
//   return (
//     <div className='overflow-x-hidden min-h-screen p-2'>
//       <h1 className="text-3xl text-center">ATS Friendly Resume</h1>
//       <div className='p-2'>
//         <div className='w-full rounded border p-5'>
//         <Card className="w-[350px]">
//       <CardHeader className="text-center">
//         <CardTitle>Upload Resume</CardTitle>
//         <CardDescription>ATS Score Finder</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="resumeUpload">Job Title</Label>
//               <Input id="resumeUpload" placeholder="Job Title"   type="text"/>
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="resumeUpload">Upload Resume</Label>
//               <Input id="resumeUpload" placeholder="Upload Resume"   type="file"/>
//             </div>

//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-start">

//         <Button>Upload</Button>
//       </CardFooter>
//     </Card>
//         </div>  
//       </div>
//     </div>
//   )
// }

// export default pages

// ATSCheckerComponent.tsx
import { useState } from "react";
import axios from "axios";

export default function ATSChecker() {
  const [jobTitle, setJobTitle] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>([]);

  const handleSubmit = async () => {
    if (!jobTitle || !resumeFile) {
      alert("Please provide job title and upload a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("JD", jobTitle); // 👈 you called it JD in backend
    formData.append("resume_file", resumeFile); // 👈 match multer field name

    try {
      const res = await axios.post("http://localhost:8000/api/v1/resume/uploadResume", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      let atsResult = await res.data.data.candidates[0].content.parts[0]; // assuming you're using ApiResponse wrapper

      const cleanText = atsResult.text?.replace(/```json\n?|```/g, "");
      // let stringifyResult = JSON.stringify(cleanText)
      let parsedResult = await JSON.parse(cleanText)
      console.log(parsedResult)
      setResult(parsedResult)


    } catch (err: any) {
      setResult({ error: err.response?.data?.error || "Error during ATS check" });
    }


  };

  return (
    <div className="p-4">
      <input
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files?.[0]) setResumeFile(e.target.files[0]);
        }}
        className="border p-2 w-full mb-2"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Check ATS Compatibility
      </button>

      {result && !result.error && (
        <div className="mt-4 bg-gray-100 p-4 rounded text-black">
          <h3 className="text-lg font-semibold">ATS Score: {result?.ats_score}/100</h3>
          <p><strong>Verdict:</strong> {result?.verdict}</p>
          <p><strong>Matched Keywords:</strong> {result?.keywords_matched?.join(", ")}</p>
          <p><strong>Strengths:</strong></p>
          <ul className="list-disc ml-5">
            {result?.strengths?.map((s: string, i: number) => <li key={i}>{s}</li>)}
          </ul>
          <p><strong>Areas for Improvement:</strong></p>
          <ul className="list-disc ml-5">
            {result?.areas_of_improvement?.map((a: string, i: number) => <li key={i}>{a}</li>)}
          </ul>
          {result.recommendations && (
            <p><strong>Recommendations:</strong> {result.recommendations}</p>
          )}
        </div>
      )}

      {result?.error && <p className="text-red-500 mt-2">{result.error}</p>}
    </div>
  );
}