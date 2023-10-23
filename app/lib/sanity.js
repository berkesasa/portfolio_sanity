import {createClient} from "next-sanity"

export const client = createClient ({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2023-05-03",
    useCdn: true,
})