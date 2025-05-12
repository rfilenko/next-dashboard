'use client'

import { useEffect, useState } from 'react'
import { User } from '@/app/types'
import { users as usersData } from '@/app/(admin)/users/users'
import UsersListItem from './UsersListItem'
import Search from './Search'

const UsersList = ({ query }: { query: string }) => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    let filteredUsersByQuery: User[] = []

    if (query) {
        filteredUsersByQuery = users.filter((user) => {
            return user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName?.toLowerCase().includes(query.toLowerCase())
        })
    } else {
        filteredUsersByQuery = users
    }

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
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Loading users...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{filteredUsersByQuery.length > 0 ? 'List of registered users' : 'No users were found '}</h2>
                <Search placeholder="type for search..." />
            </div>

            <div className="flex items-center justify-between mb-4">
                {!loading && filteredUsersByQuery.length > 0 && <p className="text-sm text-muted-foreground">
                    {filteredUsersByQuery.length > 0 ? 'Total users count: ' : filteredUsersByQuery.length === 1 ? 'Found user: ' : 'No users were found'}
                    <span className="font-semibold text-muted-foreground">{filteredUsersByQuery.length}</span></p>}
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsersByQuery.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </div>

        </div>
    )
}

export default UsersList