
"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import ResumeBuilder from "@/components/builder/ResumeBuilder";
import {formDataSchema} from "@/lib/schema/FormSchema";
import { defaultValues } from "@/lib/schema/FormDefaults";
import { z } from "zod";

export default function UpdateResumePage() {
  const { user } = useUser();
  const params = useParams();
  const router = useRouter();
  type Schema = z.infer<typeof formDataSchema>
  const [initialValues, setInitialValues] = useState<Schema | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the existing resume data
  useEffect(() => {
    if (user && params.id) {
      const fetchResumeData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/v1/resume/selectedResumeData/${params.id}`
          );
          if (response.data && response.data.data) {
            const fetchedData = response.data.data.resumeData;
            setInitialValues(fetchedData); // Set the fetched data as initial values
          } else {
            console.error("No data found in the response");
          }
        } catch (error) {
          console.error("Error fetching resume data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchResumeData();
    }
  }, [user, params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No resume data found.</p>
      </div>
    );
  }

  return (
    <div>
      <ResumeBuilder initialValues={initialValues} />
    </div>
  );
}