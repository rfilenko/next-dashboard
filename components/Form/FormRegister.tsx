'use client'

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDataSchema, UserSchema } from "@/lib/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { UserRegisterAction } from "@/actions/register";
import { toast } from "react-toastify";

const FormRegister = () => {
    const form = useForm<UserSchema>({
        resolver: zodResolver(UserDataSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data: UserSchema) => {
        const result = await UserRegisterAction(data)
        console.log(result)
        if (result.success) {
            form.reset()
            toast.success('User registered successfully')
        } else {
            form.setError('name', {
                type: 'manual',
                message: result.error?.message
            })
            toast.error(result.error?.message)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-8'>
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 w-full">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input id="name" type="text" placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input id="email" type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 w-full">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input id="password" type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />


                <Button type="submit" className="w-full">Sign Up</Button>

                <Spacer />

                <p className="text-sm text-center">Already have an account? <Link href="/login" className="text-primary">Login</Link></p>
            </form>
        </Form>
    )
}

export default FormRegister