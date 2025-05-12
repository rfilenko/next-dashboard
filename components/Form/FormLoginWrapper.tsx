'use client'

import React from "react";
import Link from "next/link";
import Spacer from "@/components/Spacer";
import SignInGithub from "@/components/Form/SignInGithub";
import { useState } from "react";
import FormLogin from "@/components/Form/FormLogin";

const FormLoginWrapper = () => {
    const [error, setError] = useState<boolean>(false)

    return (
        <>
            <FormLogin error={error} setError={setError} />

            <div className="my-4">
                <SignInGithub />
            </div>

            <Spacer />
            <p className="text-sm text-center">Don&apos;t have an account? <Link href="/register" className="text-primary">Register</Link></p>
        </>
    )
}

export default FormLoginWrapper