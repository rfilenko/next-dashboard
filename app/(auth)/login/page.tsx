import FormWrap from "@/components/Form/FormWrap"
import FormLoginWrapper from "@/components/Form/FormLoginWrapper"

const LoginPage = () => {
    return <FormWrap>
        <h1 className="text-2xl font-bold text-center mb-10">Login</h1>

        <FormLoginWrapper />
    </FormWrap>
}

export default LoginPage
