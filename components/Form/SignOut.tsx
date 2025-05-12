import { SignOutAction } from '@/actions/register'
import { Button } from '@/components/ui/button'

const SignOut = () => {
    return (
        <form action={SignOutAction} className="flex items-center justify-end"
        >
            <Button type="submit">Logout</Button>
        </form>
    )
}

export default SignOut