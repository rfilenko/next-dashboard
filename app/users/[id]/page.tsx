import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LoginHistory from '@/components/LoginHistory'
import { CirclePower, Clock, UserIcon } from 'lucide-react'

interface UserPageProps {
    params: Promise<{ id: string }>
}

const UserPage = async ({ params }: UserPageProps) => {
    const { id } = await params

    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await response.json()

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div className='max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className="flex flex-col gap-4">
                <Card className="w-full">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            {user.image && (
                                <Image
                                    src={user.image}
                                    alt={`${user.firstName} ${user.lastName}`}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                            )}
                            <CardTitle>
                                <h2 className="text-lg font-semibold">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {user.age} years old • {user.gender}
                                </p>
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Email:</span> {user.email}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Phone:</span> {user.phone}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Location:</span> {user.address.city}, {user.address.state}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Company:</span> {user.company.name}
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Joined:</span>
                            <span className="text-sm font-medium">
                                {new Date(user.birthDate).toLocaleDateString()}
                            </span>
                        </div>
                    </CardFooter>
                </Card>
                <Link href="/dashboard" className='self-end'>
                    <Button variant="outline">Back to dashboard</Button>
                </Link>
            </div>

            <LoginHistory history={user.loginHistory} />

            <Card className="w-full">
                <CardHeader>
                    <div className="flex items-center gap-4">

                        <CardTitle>
                            <h2 className="text-lg font-semibold">
                               Account activity
                            </h2>
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p className="text-sm flex items-center gap-2">Role: {user.role} <UserIcon className={`h-4 w-4`} /></p>
                        <p className="text-sm flex items-center gap-2">
                            <span className="font-medium">Status:</span> {user.status} <CirclePower className={`h-4 w-4 ${user.status === "online" ? "text-green-500" : "text-red-500"}`} />
                        </p>
                        <p className="text-sm flex items-center gap-2">
                            <span className="font-medium">Last active:</span> {new Date(user.lastActive).toISOString().split("T")[0]} <Clock className={`h-4 w-4`} />
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


export default UserPage