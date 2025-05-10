import { SignOutAction } from '@/actions/register'
import { Button } from '../ui/button'

export const SignOut = () => {
    return (
        <form action={SignOutAction} className="flex items-center justify-end"
        >
            <Button type="submit">Logout</Button>
        </form>
    )
}
