"use client";

import { useState } from "react";
import Login from "@/components/Login";
import Field from "@/components/Field";
import Button from "@/components/Button";

const CreateNewPasswordPage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    return (
        <Login
            title="Create New Password"
            description="Please enter a new password. Your new password must be different from previous password."
            image="/images/icons/lock.svg"
        >
            <div className="flex flex-col gap-4 max-md:gap-3">
                <Field
                    label="New Password"
                    placeholder="Enter new password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <Field
                    label="Confirm New Password"
                    placeholder="Confirm new password"
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                />
            </div>
            <Button
                className="w-full mt-8 max-md:mt-5"
                isPrimary
                as="link"
                href="/sign-in"
            >
                Reset Password
            </Button>
        </Login>
    );
};

export default CreateNewPasswordPage;
