'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { User } from '@/app/types'

interface UsersListItemProps {
    user: User
}

const UsersListItem = ({ user }: UsersListItemProps) => {
    return (
        <Link data-name="UsersListItem" href={`/users/${user.id}`} className='hover:translate-y-[-5px] transition-all' key={user.id}>
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
                            <h3 className="text-lg font-semibold">
                                {user.firstName} {user.lastName}
                            </h3>
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground truncate">
                            <span className="font-medium">Email:</span> {user.email}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                            <span className="font-medium">Company:</span> {user.company?.name}
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Joined:</span>
                        <span className="text-sm font-medium">
                            {user.birthDate && new Date(user.birthDate).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Role:</span>
                        <span className="text-sm font-medium">
                            {user?.role}
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default UsersListItem