'use client'

import { CircleAlertIcon } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const ErrorPage = ({ error }: { error: Error }) => {
    const route = useRouter()
    return (
        <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
            <h1 className='text-2xl font-bold'>Oops! Something went wrong!
            </h1>
            <div className='flex items-center gap-2 text-red-500'>
                <CircleAlertIcon className="h-6 w-6" />
                <p className='text-2xl'>
                    {error.message}
                </p>
            </div>
            <Button onClick={() => route.back()}>Go back</Button>
        </div>
    )
}

export default ErrorPage