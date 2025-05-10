import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { User } from '@/app/types'

const UserDetails = ({ user }: { user: User }) => {
    return (
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
                        <span className="font-medium">Location:</span> {user.address?.city}, {user.address?.state}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Company:</span> {user.company?.name}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Joined:</span>
                    <span className="text-sm font-medium">
                        {user.birthDate && new Date(user.birthDate).toLocaleDateString()}
                    </span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default UserDetails