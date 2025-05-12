import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Spacer from "@/components/Spacer";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

interface FormLoginProps {
    error: boolean,
    setError: (error: boolean) => void
}

const FormLogin = ({ error, setError }: FormLoginProps) => {
    const handleLogin = async (formData: FormData) => {
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
            redirectTo: '/dashboard',
            callbackUrl: '/'
        })

        if (!res.url) {
            setError(true)
        } else {
            setError(false)
            redirect(res.url)
        }
    }

    return (
        <form action={handleLogin} className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="Enter your email" />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" placeholder="Enter your password" />
            </div>
            <Button type="submit" className="w-full">Login</Button>

            {error && <p className="text-red-500 text-center">Invalid credentials</p>}

            <Spacer text="or" />
        </form>
    )
}

export default FormLogin