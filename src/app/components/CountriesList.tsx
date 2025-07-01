import { Country } from "../../../prisma/generated/client"
import Image from "next/image"
import Link from "next/link"

interface Props {
    countries: Country[]
}

const CountriesList = ({ countries }: Props) => {

    if (countries.length < 1) return (
        <p className="text-center font-semibold mt-10">No countries found.</p>
    )

    return (
        <section className="mt-10 flex gap-10 flex-wrap justify-center">
            {countries.map((country) => (
                <div key={country.id} className="bg-secondary-background rounded shadow-md flex flex-col max-w-[320px]">
                    <Link href={`/country/${country.id}`}>
                        <Image
                            src={country.flags.svg}
                            className="rounded-t"
                            alt={country.name}
                            width={320}
                            height={213}
                            loading="lazy"
                        />
                    </Link>
                    <div className="pb-4 px-4 mt-auto">
                        <h3 className="card-country-name">{country.name}</h3>
                        <p>Population: <span className="text-secondary-text-color">{country.population.toLocaleString()}</span></p>
                        <p>Region: <span className="text-secondary-text-color">{country.region}</span></p>
                        <p>Capital: <span className="text-secondary-text-color">{country.capital}</span></p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CountriesList