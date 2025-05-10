'use client'

import React from 'react'

const ErrorPage = ({ error }: { error: Error }) => {
    console.error(error)
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>Something went wrong!</h1>
            <p className='text-red-500 text-2xl'>User not found</p>
        </div>
    )
}

export default ErrorPage