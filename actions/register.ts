'use server'

import { signIn, signOut } from "@/auth"

export const SignInGithubAction = async () => {
    await signIn("github", {
        redirect: true,
        redirectTo: '/'
    })
}

export const SignOutAction = async () => {
    await signOut({
        redirect: true,
        redirectTo: '/login'
    })
} 