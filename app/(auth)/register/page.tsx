import FormRegister from "@/components/Form/FormRegister";
import FormWrap from "@/components/Form/FormWrap";

const RegisterPage = () => {
    return (
        <FormWrap>
            <h1 className="text-2xl font-bold text-center mb-10">Register</h1>

            <FormRegister />
        </FormWrap>
    )
}

export default RegisterPage