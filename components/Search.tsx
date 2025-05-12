'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useDebouncedCallback } from "use-debounce"

interface SearchProps {
    placeholder: string
}

const Search = ({ placeholder }: SearchProps) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        //update url without page reload
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <div className="flex items-center gap-2">
            <Label htmlFor="search" className="text-sm font-medium">Search</Label>
            <Input type="text" id="search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} defaultValue={searchParams.get('query')?.toString()} placeholder={placeholder} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
    )
}

export default Search