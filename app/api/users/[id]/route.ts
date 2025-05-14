import { NextResponse } from "next/server"
import { users } from '@/app/(admin)/users/users'
import { User as UserType } from "@/app/types"

interface Params {
    params: Promise<{id: string}>
}

export async function GET(_request: Request, { params }: Params) {
    try {
        const id = parseInt((await params).id)
        const user: UserType | undefined = users.find(user => user.id === id)
        return new NextResponse(
            JSON.stringify(user),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    } catch (error) {
        console.error('Error fetching user:', error)
        return new NextResponse(
            JSON.stringify({ error: 'Error fetching user' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}

export async function PATCH(request: Request, { params }: Params) {
    try {
        const id = parseInt((await params).id)
        const body = await request.json()

       const {firstName} = body

       const index = users.findIndex(user => user.id === id)

       if (index === -1) {
           return new NextResponse(
               JSON.stringify({ error: 'User not found' }),
               {
                   status: 404,
                   headers: {
                       'Content-Type': 'application/json'
                   }
               }
           )
       }

       users[index].firstName = firstName

       return new NextResponse(
           JSON.stringify(users[index]),
           {
               status: 200, // updated
               headers: {
                   'Content-Type': 'application/json'
               }
           }
       )
    } catch (error) {
        console.error('Error updating user:', error)
        return new NextResponse(
            JSON.stringify({ error: 'Error updating user' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}

export async function DELETE(_request: Request, { params }: Params) {
    try {
        const id = parseInt((await params).id)

        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            return new NextResponse(
                JSON.stringify({ error: 'User not found' }),
                {
                    status: 404,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        }

        users.splice(index, 1)

        return new NextResponse(
            JSON.stringify(users),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    } catch (error) {
        console.error('Error deleting user:', error)
        return new NextResponse(
            JSON.stringify({ error: 'Error deleting user' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}