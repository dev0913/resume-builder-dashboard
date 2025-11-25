import { date, z } from "zod";
import { formDataSchema } from "./FormSchema";



export type Schema = z.infer<typeof formDataSchema>;

export const defaultValues: Schema = {

    title:"",
    personalDetails: {
     
        jobTitle: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: {
            city: "",
            state: "",
        },
     
    },

    professionalSummary: {
        description: ''
    },

    socialLinks: [],

    employmentHistory: [],

    skills: {
        technicalSkills: [],

        softSkills: []
    },

    achievements: [],

    projects: [],

    certifications: [],

    education: [],

    activities: []
}