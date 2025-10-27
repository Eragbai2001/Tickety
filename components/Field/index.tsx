import { useState } from "react";
import Icon from "@/components/Icon";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    textarea?: boolean;
    type?: string;
    required?: boolean;
    note?: string;
};

const Field = ({
    className,
    classInput,
    label,
    textarea,
    type,
    required,
    note,
    ...inputProps
}: FieldProps &
    React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const maxLength = inputProps.maxLength || 200;
    const currentLength = (inputProps.value as string)?.length || 0;
    const isOverLimit = currentLength > maxLength;
    const [showPassword, setShowPassword] = useState(false);

    const error = false;

    return (
        <div className={`${className || ""}`}>
            {label && (
                <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-gray-500">
                        {label}
                        {required && <span className="text-error-100"> *</span>}
                    </div>
                    {textarea && (
                        <div
                            className={`text-body-sm ${
                                isOverLimit ? "text-error-100" : "text-gray-300"
                            }`}
                        >
                            {currentLength}/{maxLength}
                        </div>
                    )}
                </div>
            )}
            <div className={`relative ${textarea ? "flex" : ""}`}>
                {textarea ? (
                    <textarea
                        className={`w-full h-37.5 p-3 border border-gray-100 rounded-xl text-body-lg text-gray-900 transition-colors resize-none outline-0 focus:!border-primary-500 focus:bg-primary-50 ${
                            error ? "!border-error-100 bg-error-0" : ""
                        } ${classInput || ""}`}
                        {...inputProps}
                    ></textarea>
                ) : (
                    <input
                        className={`w-full h-13 px-3 border border-gray-100 rounded-xl text-body-lg text-gray-900 transition-colors outline-0 focus:!border-primary-500 focus:bg-primary-50 max-md:h-12 ${
                            error ? "!border-error-100 bg-error-0" : ""
                        } ${classInput || ""}`}
                        type={
                            type === "password"
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : type || "text"
                        }
                        {...inputProps}
                    />
                )}
                {type === "password" && (
                    <button
                        className={`group absolute right-3 top-1/2 -translate-y-1/2 outline-0 before:absolute before:top-1/2 before:left-1/2 before:w-5.5 before:h-0.75 before:border-t before:border-white before:-translate-1/2 before:-rotate-45 before:transition-all before:bg-gray-400 hover:before:bg-gray-900 ${
                            showPassword
                                ? "before:opacity-0"
                                : "before:opacity-100"
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <Icon
                            className="size-6 fill-gray-400 transition-colors group-hover:fill-gray-900"
                            name="eye"
                        />
                    </button>
                )}
            </div>
            {note && (
                <div
                    className={`mt-2 ${
                        error ? "text-error-100" : "text-gray-400"
                    }`}
                >
                    {note}
                </div>
            )}
        </div>
    );
};

export default Field;
