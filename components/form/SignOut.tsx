import { SignOutAction } from '@/actions/register'
import { Button } from '../ui/button'

export const SignOut = () => {
    return (
        <form action={SignOutAction} className="w-full flex items-center justify-center mt-4"
        >
            <Button type="submit">Logout</Button>
        </form>
    )
}
