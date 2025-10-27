import { Checkbox as CheckboxHeadless } from "@headlessui/react";
import Icon from "@/components/Icon/page";

type CheckboxProps = {
    className?: string;
    classTick?: string;
    label?: string;
    checked: boolean;
    onChange: (value: boolean) => void;
    isLarge?: boolean;
};

const Checkbox = ({
    className,
    classTick,
    label,
    checked,
    onChange,
    isLarge,
}: CheckboxProps) => (
    <CheckboxHeadless
        className={`group flex items-center gap-2 cursor-pointer ${
            className || ""
        }`}
        checked={checked}
        onChange={onChange}
    >
        <span
            className={`relative flex justify-center items-center shrink-0 bg-white border border-gray-100 transition-colors group-data-[hover]:border-primary-500 group-data-[checked]:border-primary-500 group-data-[checked]:bg-primary-500 ${
                isLarge ? "size-5 rounded-md" : "size-4 rounded"
            } ${classTick || ""}`}
        >
            <Icon
                className={`fill-white opacity-0 transition-opacity group-data-[checked]:opacity-100 ${
                    isLarge ? "!size-4" : "!size-3.5"
                }`}
                name="check"
            />
        </span>
        {label && <span className="text-body-md text-gray-500">{label}</span>}
    </CheckboxHeadless>
);

export default Checkbox;
