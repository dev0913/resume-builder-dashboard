"use client";
import React, { useRef, useState } from "react";
import useDimensions from "@/hooks/useDimension";
import { useFormData } from "@/lib/context/FormDataContext";
import { useReactToPrint } from "react-to-print";
import { Grid2x2 } from "lucide-react";
import { useTemplate } from "@/lib/context/TemplateContext";  // Import the context
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function ResumePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);
  const { formData } = useFormData();
  const { selectedTemplate, setSelectedTemplate, templates } = useTemplate();
  const [open, setOpen] = useState(false);


  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: formData.title || "Resume",
  });

  const [templateDialogOpen, setTemplateDialogOpen] = useState(false);

  const SelectedTemplateComponent = selectedTemplate.component;

  const { user } = useUser()
  const router = useRouter()

  const handleDownload = () => {
    if (!user) {
      setOpen(true); // Show dialog if no user
    } else {
      reactToPrintFn(); // Trigger print function if logged in
    }
  };

  const handleConfirm = () => {
    setOpen(false);
    const currentPath = "/resume"
    router.push(`/sign-in?redirect_url=${encodeURIComponent(currentPath)}`); // Navigate to sign-in page
  };

  
  return (
    <div className="w-full h-fit aspect-[210/297] bg-white shadow-lg text-black font-[inter]" ref={containerRef}>
      <div className="flex justify-between text-xs bg-[#1c1c1c] text-white p-2 items-center">
        <div className="flex items-center space-x-2">
          <Dialog open={templateDialogOpen} onOpenChange={setTemplateDialogOpen}>
            <DialogTrigger>
              <div className="flex items-center gap-2">
                <Grid2x2 size={20} color="#ffffff" strokeWidth={1.25} />
                Select Template
              </div>
            </DialogTrigger>

            <DialogContent className="lg:min-w-[60%] max-h-full my-5 overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-center">Select Template</DialogTitle>
                <DialogDescription className="text-center">
                  Choose your perfect resume template.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className={`rounded cursor-pointer hover:gradient-border p-3 m-1 text-center ${selectedTemplate.name === template.name ? "bg-innerCard" : ""
                      }`}
                    onClick={() => 
                      {setSelectedTemplate(template);
                      setTemplateDialogOpen(false);}
                    }
                  >
                    <img src={template.image} alt={template.name} className="w-96 h-80 rounded mb-2" />
                    <span className="text-white">{template.name}</span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div
          className="border bg-white text-black p-2 px-4 rounded cursor-pointer hover:shadow-sm hover:shadow-white"
          onClick={() => handleDownload()}
        >
          Download PDF
        </div>

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

      <div style={{ zoom: (1 / 794) * width }} className={`${!width && "invisible"} text-black`} ref={contentRef} id="resumePreviewContent">
        <SelectedTemplateComponent data={formData} />
      </div>
    </div>
  );
}

export default ResumePreview;
