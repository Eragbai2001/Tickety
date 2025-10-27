"use client";

import { useState } from "react";
import Login from "@/components/Login";
import Field from "@/components/Field";
import Button from "@/components/Button";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");

    return (
        <Login
            title="Forgot Password"
            description="Enter your email address and we’ll send you password reset instructions."
            image="/images/icons/lock.svg"
        >
            <Field
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button
                className="w-full mt-5"
                isPrimary
                as="link"
                href="/create-new-password"
            >
                Forgot Password
            </Button>
            <div className="mt-8 text-center text-body-lg max-md:mt-5">
                <div className="text-gray-500">Don’t have access anymore?</div>
                <button className="font-medium text-primary-400 transition-colors hover:text-primary-600">
                    Try another method
                </button>
            </div>
        </Login>
    );
};

export default ForgotPasswordPage;
