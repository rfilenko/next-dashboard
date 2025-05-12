import { Button } from "@/components/ui/button"
import { SignInGithubAction } from "@/actions/register"

const SignInGithub = () => {
    return (
        <form action={SignInGithubAction} className="w-full flex items-center justify-center"
        >
            <Button type="submit">Signin with GitHub</Button>
        </form>
    )
}

export default SignInGithub