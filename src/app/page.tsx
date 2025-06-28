import { getCountriesByRegion } from "./actions";
import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";
import ScrollToTop from "./components/ScrollToTop";

interface Props {
    searchParams: Promise<{ [key: string]: string }>
}

export async function generateMetadata({ searchParams }: Props) {
    let { region } = await searchParams

    if (!region) return

    region = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()

    if (region) {
        return {
            title: `${region} Countries | World Countries Explorer`,
            description: `List of countries in ${region} with detailed information`
        }
    }
}

export default async function HomePage({ searchParams }: Props) {

    const { query, region } = await searchParams

    let countries = await getCountriesByRegion(region || "all")

    if (query) {
        countries = countries.filter(country => 
            country.name.toLowerCase().includes(query.toLowerCase())
        )
    }

    return (
        <main className="py-10">
            <div className="container">
                <Filters />
                <CountriesList countries={countries} />
                <ScrollToTop />
            </div>
        </main>
    )
}