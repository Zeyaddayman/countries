"use server"

import prisma from "@/lib/prisma"
import { Country } from "@prisma/client"
import { unstable_cache as next_cache } from "next/cache"

export async function getAllCountries(): Promise<Country[]> {
    return await prisma.country.findMany({
        orderBy: {
            name: "asc"
        }
    })
}

export async function getCountriesByRegion(region: Country["region"]): Promise<Country[]> {

    if (!region) {
        throw new Error("Region is required")
    }

    // Captlize the region
    region = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()

    if (region === "All") {

        const countries = await next_cache(getAllCountries, ["all-countries"])()

        return countries

    } else {

        const countries = await next_cache(async (): Promise<Country[]> => {

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

export async function getCountryById(id: Country["id"]): Promise<Country | null> {

    if (!id) {
        throw new Error("Country ID is required")
    }

    try {
        const country = next_cache(async () => {
            return await prisma.country.findUnique({
                where: {
                    id
                }
            })
        }, [`country-${id}`])()

        return country

    } catch {
        throw new Error("Failed to fetch country")
    }
}