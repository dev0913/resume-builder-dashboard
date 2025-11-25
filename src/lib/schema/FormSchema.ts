


import { z } from 'zod'

export const defaultString = z.string().trim().min(1, "Required!")
export const optionalString = z.string().trim().optional().or(z.literal(""))

export const formDataSchema = z.object({
    title: defaultString,
    personalDetails: z.object({




        profileImg: z
            .union([
                z
                    .instanceof(File)
                    .refine((file) => file.type.startsWith("image/"), {
                        message: "Must be an image file",
                    })
                    .refine((file) => file.size <= 1024 * 1024 * 2, {
                        message: "File must be less than 2MB",
                    }),
                z.string(),
                z.null(),
                z.undefined(),
            ])
            .optional(),

        jobTitle: z.string().min(1, "Job Title is required"),
        firstName: z.string().min(1, "First Name is required"),
        lastName: z.string().min(1, "Last Name is required"),
        phone: z.string().min(1, "Phone no is required"),
        email: z.string().email("Email is required"),
        address: z.object({
            city: z.string().min(1, "City is required"),
            state: z.string().min(1, "State is required")
        }),

    }),

    professionalSummary: z.object({
        description: z.string().min(10, "Min. 10 Char is required ")
    }),

    socialLinks: z.array(

        z.object({
            name: defaultString,
            url: z.string().trim().url(),
        })

    ).optional(),

    employmentHistory: z.array(
        z.object({
            jobTitle: defaultString,
            company: defaultString,
            startDate: z.string(),
            endDate: z.string(),
            city: defaultString,
            description: optionalString,
        })
    ).optional(),

    skills: z.object({
        technicalSkills: z.array(
            z.object({
                skill: defaultString
            })
        ).optional(),

        softSkills: z.array(
            z.object({
                skill: defaultString
            })
        ).optional(),
    }),

    achievements: z.array(
        z.object({
            name: defaultString,
            startDate: z.string(),
            endDate: z.string(),
            description: optionalString,
        })
    ).optional(),

    projects: z.array(
        z.object({
            name: defaultString,
            date: z.string(),
            description: defaultString,
        })
    ).optional(),

    certifications: z.array(
        z.object({
            name: defaultString,
            institution: defaultString,
            startDate: z.string(),
            endDate: z.string(),
            mode: defaultString,
        })
    ).optional(),

    education: z.array(
        z.object({
            name: defaultString,
            degree: defaultString,
            startDate: z.string(),
            endDate: z.string(),
            percentage: defaultString,
            city: defaultString,
            description: optionalString,

        })
    ).optional(),

    activities: z.array(
        z.object({
            activity: defaultString,
        })
    ).optional()
})

export type Schema = z.infer<typeof formDataSchema>;