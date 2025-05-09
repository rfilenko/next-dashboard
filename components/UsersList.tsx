'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { User } from '@/app/types'

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/users')
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.error('Error fetching users:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return (
            <div>
                <h2>Loading users...</h2>
            </div>
        )
    }

    return (
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="text-2xl font-bold text-center mb-2 grid col-span-3 justify-self-start">List of registered users</h2>
            {users.map((user) => (
                <Link href={`/users/${user.id}`} className='hover:translate-y-[-5px] transition-all' key={user.id}>
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
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-medium">Email:</span> {user.email}
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
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Role:</span>
                                <span className="text-sm font-medium">
                                    {user?.role}
                                </span>
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

export default UsersList