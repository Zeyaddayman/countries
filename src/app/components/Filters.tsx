"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IoSearchOutline } from 'react-icons/io5'

const Filters = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()

    const handleSearch = (query: string) => {
        const params = new URLSearchParams(searchParams)

        if (!query) {
            params.delete('query')
        } else {
            params.set('query', query)
        }

        replace(`${pathname}?${params.toString()}`)
    }

    const handleRegion = (region: string) => {
        const params = new URLSearchParams(searchParams)

        if (region === 'all') {
            params.delete('region')
        } else {
            params.set('region', region)
        }

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='flex flex-wrap justify-between gap-10'>
            <div className='flex-1 relative min-w-60'>
                <label className='sr-only' htmlFor='search'>
                    Search for a country
                </label>
                <IoSearchOutline className='absolute left-5 top-1/2 -translate-1/2' />
                <input
                    id='search'
                    type='text'
                    placeholder='Search for a country...'
                    className='p-3 pl-10 w-full bg-secondary-background rounded outline-none shadow-md'
                    defaultValue={searchParams.get('query')?.toString().toLowerCase()}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className='w-60 mx-auto'>
                <label className='sr-only' htmlFor='filter'>
                    Filter by region
                </label>
                <select
                    id='filter'
                    className='bg-secondary-background shadow-md rounded p-3 w-full outline-none' 
                    defaultValue={searchParams.get('region')?.toString().toLowerCase()}
                    onChange={(e) => handleRegion(e.target.value)}
                >
                    <option value={"all"}>All</option>
                    <option value={"africa"}>Africa</option>
                    <option value={"americas"}>Americas</option>
                    <option value={"asia"}>Asia</option>
                    <option value={"europe"}>Europe</option>
                    <option value={"oceania"}>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Filters