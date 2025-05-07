'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import SignInGithub from "./SignInGithub";

const FormLogin = () => {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in...');
    }

    return (
        <>
            <form onSubmit={handleLogin} className='flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" name="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" className="w-full">Login</Button>

                <Spacer text="or" />
            </form>

            <div className="my-4">
                <SignInGithub />
            </div>

            <Spacer />
            <p className="text-sm text-center">Don't have an account? <Link href="/register" className="text-primary">Register</Link></p>
        </>
    )
}

export default FormLogin