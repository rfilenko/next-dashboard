
import React from 'react'
import FormWrap from '@/components/Form/FormWrap'
import FormRegister from '@/components/Form/FormRegister'

export const metadata = {
    title: 'Register page',
    description: 'Register page',
}

const RegisterPage = () => {
    return (
        <FormWrap>
            <h1 className="text-2xl font-bold text-center mb-10">Register</h1>

            <FormRegister />
        </FormWrap>
    )
}

export default RegisterPage