import { SignOut } from './Form/SignOut'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { User } from 'next-auth'

export const UserInfo = async ({ user }: { user: User | null }) => {
    if (!user) return null

    return (
        <div data-name="UserInfo" className="max-w-md w-full mx-auto">
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className='flex gap-2 items-center'>
                        <h1 className="text-2xl font-bold text-center mb-2">Welcome, {user.name}</h1>
                        <Image className='rounded-full mx-auto' src={user.image || ''} alt={user.name || ''} width={64} height={64} />
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
