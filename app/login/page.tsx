import FormWrap from "@/components/Form/FormWrap"
import FormLogin from "@/components/Form/FormLogin"

const LoginPage = () => {
    return (
        <FormWrap>
            <h1 className="text-2xl font-bold text-center mb-10">Login</h1>

            <FormLogin />
        </FormWrap>
    )
}

export default LoginPage
