import { NextResponse } from "next/server"
import { users } from '@/app/(admin)/users/users'

export async function GET() {
    try {
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
        console.error('Error fetching users:', error)
        return new NextResponse(
            JSON.stringify({ error: 'Error fetching users' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}


export async function POST(request: Request) {
    try {
        const body = await request.json()

        const newUser = {
            id: users.length + 1,
            firstName: body.firstName,
            lastName: body.lastName,
            maidenName: body.maidenName,
            age: body.age,
            gender: body.gender,
            email: body.email,
            phone: body.phone,
            username: body.username,
            password: body.password,
            birthDate: body.birthDate,
            image: body.image,
            bloodGroup: body.bloodGroup,
            height: body.height,
            weight: body.weight,
            eyeColor: body.eyeColor,
            hair: body.hair,
            domain: body.domain,
            ip: body.ip,
            address: body.address,
            macAddress: body.macAddress,
            university: body.university,
            bank: body.bank,
            company: body.company,
            ein: body.ein,
            ssn: body.ssn,
            userAgent: body.userAgent,
            crypto: body.crypto,
            role: body.role,
            lastActive: new Date().toISOString(),
            status: "online",
            loginHistory: [],
        }

        users.push(newUser)

        return new NextResponse(
            JSON.stringify(newUser),
            {
                status: 201,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    } catch (error) {
        console.error('Error fetching users:', error)
        return NextResponse.error()
    }
}