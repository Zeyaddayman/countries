"use server"

import prisma from "@/lib/prisma"
import { Country } from "@prisma/client"
import { unstable_cache as cache } from "next/cache"

export async function getCountriesByRegion(region: Country["region"]) {

    if (!region) {
        throw new Error("Region is required")
    }

    // Captlize the region
    region = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()

    if (region === "All") {

        const countries = await cache(async (): Promise<Country[]> => {

            return await prisma.country.findMany({
                orderBy: {
                    name: "asc"
                }
            })

        }, ["all-countries"])()

        return countries

    } else {

        const countries = await cache(async (): Promise<Country[]> => {

            return await prisma.country.findMany({
                where: {
                    region
                },
                orderBy: {
                    name: "asc"
                }
            })

        }, [`${region}-countries`])()

        return countries
    }
}

export async function getCountryById(id: Country["id"]) {

    if (!id) {
        throw new Error("Country ID is required")
    }

    const country = await prisma.country.findUnique({
        where: {
            id
        }
    })

    if (!country) {
        throw new Error(`Country with ID ${id} not found`)
    }

    return country
}