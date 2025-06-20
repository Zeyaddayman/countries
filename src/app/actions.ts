"use server"

import prisma from "@/lib/prisma"
import { Country } from "@prisma/client"

export async function getCountriesByRegion(region: Country["region"]) {

    if (!region) {
        throw new Error("Region is required")
    }

    // Captlize the region
    region = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()

    if (region === "All") {
        const countries = await prisma.country.findMany({
            orderBy: {
                name: "asc"
            }
        })
        return { countries }
    } else {
        const countries = await prisma.country.findMany({
            where: {
                region
            },
            orderBy: {
                name: "asc"
            }
        })
        return { countries }
    }
}