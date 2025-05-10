import { NextResponse } from "next/server"
import { users } from '@/app/(admin)/users/users'
import { User as UserType } from "@/app/types"

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id)
        const user: UserType | undefined = users.find(user => user.id === id)
        return NextResponse.json(user)
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.error()
    }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id)
        const body = await request.json()

       const {firstName} = body

       const index = users.findIndex(user => user.id === id)

       if (index === -1) {
           return NextResponse.error()
       }

       users[index].firstName = firstName

       return NextResponse.json(users[index])
    } catch (error) {
        console.error('Error updating user:', error)
        return NextResponse.error()
    }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id)

        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            return NextResponse.error()
        }

        users.splice(index, 1)

        return NextResponse.json(users)
    } catch (error) {
        console.error('Error deleting user:', error)
        return NextResponse.error()
    }
}