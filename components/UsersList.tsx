'use client'

import { useEffect, useState } from 'react'
import { User } from '@/app/types'
import { users as usersData } from '@/app/(admin)/users/users'
import UsersListItem from './UsersListItem'

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        try {
            //simulate fetch delay
            await new Promise((resolve) => setTimeout(resolve, 2000))

            setUsers(usersData)
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
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">List of registered users</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </div>

        </div>
    )
}

export default UsersList