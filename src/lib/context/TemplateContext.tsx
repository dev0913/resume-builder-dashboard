"use client";
import TemplateEight from "@/components/builder/preview/templates/TemplateEight";
import TemplateEleven from "@/components/builder/preview/templates/TemplateEleven";
import TemplateFive from "@/components/builder/preview/templates/TemplateFive";
import TemplateFour from "@/components/builder/preview/templates/TemplateFour";
import TemplateNine from "@/components/builder/preview/templates/TemplateNine";
import TemplateOne from "@/components/builder/preview/templates/TemplateOne";
import TemplateSeven from "@/components/builder/preview/templates/TemplateSeven";
import TemplateSix from "@/components/builder/preview/templates/TemplateSix";
import TemplateTen from "@/components/builder/preview/templates/TemplateTen";
import TemplateThirteen from "@/components/builder/preview/templates/TemplateThirteen";
import TemplateThree from "@/components/builder/preview/templates/TemplateThree";
import TemplateTwelve from "@/components/builder/preview/templates/TemplateTwelve";
import TemplateTwo from "@/components/builder/preview/templates/TemplateTwo";
import React, { createContext, useContext, useState, ReactNode } from "react";



type TemplateType = {
  name: string;
  image: string;
  component: React.ComponentType<{ data: any }>;
  category: string;
};


type TemplateContextType = {
    selectedTemplate: TemplateType;
    setSelectedTemplate: (template: TemplateType) => void;
    templates: TemplateType[]; 
    getTemplateByName: (name: string) => TemplateType | undefined; 
  };
  

  const templates: TemplateType[] = [
    { name: "Template One", image: "/assets/templates/TemplateOne.png", component: TemplateOne, category:"Simple" },
    { name: "Template Two", image: "/assets/templates/TemplateTwo.jpg", component: TemplateTwo, category:"Simple" },
    { name: "Template Three", image: "/assets/templates/TemplateThree.jpg", component: TemplateThree, category:"Simple" },
    { name: "Template Four", image: "/assets/templates/TemplateFour.jpg", component: TemplateFour, category:"Simple" },
    { name: "Template Five", image: "/assets/templates/TemplateFive.jpg", component: TemplateFive, category:"Simple" },
    { name: "Template Six", image: "/assets/templates/TemplateSix.jpg", component: TemplateSix, category:"Simple" },
    { name: "Template Seven", image: "/assets/templates/TemplateSeven.jpg", component: TemplateSeven, category:"Simple" },
    { name: "Template Eight", image: "/assets/templates/TemplateEight.jpg", component: TemplateEight, category:"Simple" },
    { name: "Template Nine", image: "/assets/templates/TemplateNine.jpg", component: TemplateNine, category:"Simple" },
    { name: "Template Ten", image: "/assets/templates/TemplateTen.jpg", component: TemplateTen, category:"Simple" },
    { name: "Template Eleven", image: "/assets/templates/TemplateEleven.jpg", component: TemplateEleven, category:"Professional" },
    { name: "Template Twelve", image: "/assets/templates/TemplateTwelve.jpg", component: TemplateTwelve, category:"Professional" },
    { name: "Template Thirteen", image: "/assets/templates/TemplateThirteen.jpg", component: TemplateThirteen, category:"Fresher" },
  ];
  

  const TemplateContext = createContext<TemplateContextType | undefined>(undefined);
  

  export const TemplateProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(templates[0]);
  
    
    const getTemplateByName = (name: string): TemplateType | undefined => {
      return templates.find((t) => t.name === name);
    };
  
    return (
      <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate, templates, getTemplateByName }}>
        {children}
      </TemplateContext.Provider>
    );
  };
  
  // **Custom Hook for Accessing Context**
  export const useTemplate = () => {
    const context = useContext(TemplateContext);
    if (!context) {
      throw new Error("useTemplate must be used within a TemplateProvider");
    }
    return context;
  };