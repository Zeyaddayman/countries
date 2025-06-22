import { getCountriesByRegion } from "./actions";
import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";

interface Props {
    searchParams: Promise<{ [key: string]: string }>
}

export default async function Home({ searchParams }: Props) {

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
            </div>
        </main>
    )
}