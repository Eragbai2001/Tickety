import React from "react";
import Link, { LinkProps } from "next/link";
import Icon from "@/components/Icon";

type CommonProps = {
    className?: string;
    icon?: string;
    children?: React.ReactNode;
    isPrimary?: boolean;
    isSecondary?: boolean;
    isRed?: boolean;
    isWhite?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
    isXSmall?: boolean;
    isSquare?: boolean;
};

type ButtonAsButton = {
    as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = {
    as: "a";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAsLink = {
    as: "link";
} & LinkProps;

type ButtonProps = CommonProps &
    (ButtonAsButton | ButtonAsAnchor | ButtonAsLink);

const Button: React.FC<ButtonProps> = ({
    className,
    icon,
    children,
    isPrimary,
    isSecondary,
    isRed,
    isWhite,
    isLarge,
    isMedium,
    isSmall,
    isXSmall,
    isSquare,
    as = "button",
    ...props
}) => {
    const isLink = as === "link";
    const Component: React.ElementType = isLink ? Link : as;

    return (
        <Component
            className={`inline-flex items-center justify-center gap-2 h-13 px-3.75 border rounded-xl text-body-lg font-semibold transition-all cursor-pointer disabled:pointer-events-none max-md:h-12 ${
                isPrimary
                    ? "bg-primary-500 border-transparent text-white fill-white hover:bg-primary-600"
                    : ""
            } ${
                isSecondary
                    ? "border-gray-100 shadow-xs text-gray-900 fill-gray-400 hover:bg-gray-25 hover:fill-gray-900"
                    : ""
            } ${
                isWhite
                    ? "bg-white border-transparent text-primary-500 fill-primary-500 hover:bg-gray-25"
                    : ""
            } ${
                isRed
                    ? "bg-error-100 border-transparent text-white fill-white hover:bg-error-200"
                    : ""
            } ${isSquare ? "w-13 !px-0" : ""} ${
                isLarge ? "!h-12 !rounded-[0.625rem]" : ""
            } ${isMedium ? "!h-10 !rounded-[0.625rem] !text-body-md" : ""} ${
                isSmall ? "!h-8 !rounded-lg !text-body-sm" : ""
            } ${isSmall && !isSquare ? "!px-2.75" : ""} ${
                isXSmall ? "!h-6 !rounded-md !text-body-sm" : ""
            }
    ${isSquare && isLarge ? "!w-12" : ""} ${
                isSquare && isMedium ? "!w-10" : ""
            } ${isSquare && isSmall ? "!w-8" : ""} ${
                isSquare && isXSmall ? "!w-6 !h-6" : ""
            }
     ${className || ""}`}
            {...(isLink ? (props as LinkProps) : props)}
        >
            {icon && (
                <Icon
                    className={`fill-inherit ${
                        isMedium || isSmall || isXSmall ? "!size-4" : ""
                    }`}
                    name={icon}
                />
            )}
            {children}
        </Component>
    );
};

export default Button;
