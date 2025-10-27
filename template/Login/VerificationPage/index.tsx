"use client";

import { useState } from "react";
import Login from "@/components/Login";
import Field from "@/components/Field";
import Button from "@/components/Button";

const VerificationPage = () => {
    const [code, setCode] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");
    const [code4, setCode4] = useState("");
    const [code5, setCode5] = useState("");

    return (
        <Login
            title="OTP Verification"
            description={
                <>
                    We have sent a verification code to email address&nbsp;
                    <span className="block font-medium text-gray-900">
                        johndoe@examle.com
                    </span>
                </>
            }
            image="/images/icons/envelope.svg"
        >
            <div className="flex gap-4 max-md:gap-3">
                <Field
                    classInput="text-center text-h4"
                    type="tel"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <Field
                    classInput="text-center text-h4"
                    type="tel"
                    value={code2}
                    onChange={(e) => setCode2(e.target.value)}
                    required
                />
                <Field
                    classInput="text-center text-h4"
                    type="tel"
                    value={code3}
                    onChange={(e) => setCode3(e.target.value)}
                    required
                />
                <Field
                    classInput="text-center text-h4"
                    type="tel"
                    value={code4}
                    onChange={(e) => setCode4(e.target.value)}
                    required
                />
                <Field
                    classInput="text-center text-h4"
                    type="tel"
                    value={code5}
                    onChange={(e) => setCode5(e.target.value)}
                    required
                />
            </div>
            <Button
                className="w-full mt-8 max-md:mt-5"
                isPrimary
                as="link"
                href="/"
            >
                Verify
            </Button>
            <div className="mt-8 text-center text-body-lg text-gray-500 max-md:mt-5">
                Resend code in{" "}
                <span className="font-medium text-primary-400">00:37</span>
            </div>
        </Login>
    );
};

export default VerificationPage;
