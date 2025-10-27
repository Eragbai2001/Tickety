"use client";

import { useState } from "react";
import Link from "next/link";
import Login from "@/components/Login";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    return (
        <Login
            title="Welcome Back"
            description="Glad to see you again. Log in to your account."
            image="/images/icons/profile.svg"
        >
            <div className="flex flex-col gap-4 max-md:gap-3">
                <Field
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Field
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="flex justify-between items-center">
                    <Checkbox
                        label="Keep me login"
                        checked={remember}
                        onChange={(value) => setRemember(value)}
                    />
                    <Link
                        className="text-body-md font-medium text-primary-400 transition-colors hover:text-primary-600"
                        href="/forgot-password"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </div>
            <Button
                className="w-full mt-8 max-md:mt-5"
                isPrimary
                as="link"
                href="/"
            >
                Login
            </Button>
            <div className="mt-8 text-center text-body-lg text-gray-500 max-md:mt-5">
                Don’t have an account?{" "}
                <Link
                    className="font-medium text-primary-400 transition-colors hover:text-primary-600"
                    href="/create-account"
                >
                    Register
                </Link>
            </div>
        </Login>
    );
};

export default SignInPage;
