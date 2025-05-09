import { SignOut } from './Form/SignOut'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { User } from 'next-auth'
import { cn } from '@/lib/utils'

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
                        <h1 className="text-2xl font-bold text-center mb-2">Welcome back, {user.name ? user.name : 'admin'}</h1>
                        {user.image && <Image className='rounded-full mx-auto' src={user.image || ''} alt={user.name || ''} width={64} height={64} />}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Signed with email: {user.email}</p>
                </CardContent>
                <CardFooter>
                    <SignOut />
                </CardFooter>
            </Card>
        </div>
    )
}
