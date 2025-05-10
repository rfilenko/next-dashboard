'use client'

import { AtSign } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const AppSidebar = () => {
    return (
        <div data-name="AppSidebar" className="flex flex-col items-center gap-4">
            <AtSign className="w-10 h-10 my-2" /> 

            <nav className="flex flex-col px-4">
                <Link href="/dashboard">
                    <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link href="/settings">
                    <Button variant="ghost">Settings</Button>
                </Link>
            </nav>
        </div>
    )
}

export default AppSidebar