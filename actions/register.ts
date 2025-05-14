'use server'

import { signIn, signOut } from "@/auth"
import { UserDataSchema, UserSchema } from "@/lib/schema"

export const SignInGithubAction = async () => {
    await signIn("github", {
        redirect: true,
        redirectTo: '/dashboard'
    })
}

export const SignOutAction = async () => {
    await signOut({
        redirect: true,
        redirectTo: '/login'
    })
}

export const UserRegisterAction = async (data: UserSchema) => {
    const validate = UserDataSchema.safeParse(data)

    console.log('UserRegisterAction', validate);

    if (!validate.success) {
        return {
            success: false,
            error: validate.error
        }
    }

    return {
        success: true,
        data: validate.data
    }
}
