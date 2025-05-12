import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { User } from 'next-auth'
import { cn } from '@/lib/utils'
import { UserIcon, MailIcon, UserCogIcon } from 'lucide-react'
import { getUserRole } from '@/lib/getUserRole'

interface UserInfoProps {
    user: User | null
    className?: string
}

export const UserInfo = async ({ user, className }: UserInfoProps) => {
    if (!user) return null

    return (
        <div data-name="UserInfo" className={cn(
            "max-w-md w-full",
            className
        )}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className='flex gap-2 items-center'>
                        <h1 className="text-xl font-bold text-center flex items-center gap-2"><UserIcon className={`h-4 w-4 font-bold`} />Name: {user.name ? user.name : 'admin'}</h1>
                        {user.image && <Image className='rounded-full mx-auto' src={user.image || ''} alt={user.name || ''} width={48} height={48} />}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-base flex items-center gap-2'><UserCogIcon className={`h-4 w-4`} /> Role: {getUserRole(user)}</p>
                    <p className='text-base flex items-center gap-2'><MailIcon className={`h-4 w-4`} /> Email: {user.email}</p>
                </CardContent>
            </Card>
        </div>
    )
}
