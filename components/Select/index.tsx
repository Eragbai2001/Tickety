import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Label,
} from "@headlessui/react";
import Icon from "@/components/Icon";
import { SelectOption } from "@/types/select";

type SelectProps = {
    className?: string;
    classButton?: string;
    label?: string;
    value?: SelectOption;
    onChange: (value: SelectOption) => void;
    options: SelectOption[];
    placeholder?: string;
    isMedium?: boolean;
    isSmall?: boolean;
    required?: boolean;
    note?: string;
};

const Select = ({
    className,
    classButton,
    label,
    value = undefined,
    onChange,
    options,
    placeholder,
    isMedium,
    isSmall,
    required,
    note,
}: SelectProps) => {
    return (
        <Listbox
            className={`${className || ""}`}
            value={value}
            onChange={onChange}
            as="div"
        >
            {label && (
                <Label className="block mb-2 text-body-md font-medium text-gray-500">
                    {label}
                    {required && <span className="text-error-100"> *</span>}
                </Label>
            )}
            <ListboxButton
                className={`group flex justify-between items-center w-full h-13 px-3 border border-gray-100 rounded-xl text-body-lg text-gray-900 fill-gray-400 transition-all outline-0 data-[hover]:border-primary-500 data-[hover]:fill-gray-900 data-[open]:fill-gray-900 data-[open]:border-primary-500 data-[open]:bg-primary-50 max-md:h-12 ${
                    isMedium
                        ? "!h-10 !pr-2 !rounded-[0.625rem] !text-body-md font-medium"
                        : ""
                } ${
                    isSmall
                        ? "!h-8 !pr-2 !rounded-lg !text-body-sm font-medium"
                        : ""
                } ${classButton || ""}`}
            >
                {value?.name ? (
                    <div className="truncate">{value.name}</div>
                ) : (
                    <div className="truncate text-gray-400">{placeholder}</div>
                )}
                <Icon
                    className={`shrink-0 ml-2 fill-inherit -rotate-90 transition-transform group-[[data-open]]:rotate-90 ${
                        isMedium || isSmall ? "!size-4" : ""
                    }`}
                    name="chevron"
                />
            </ListboxButton>
            <ListboxOptions
                className={`z-100 w-[var(--button-width)] bg-white border border-gray-100 shadow-lg rounded-xl origin-top transition duration-200 ease-out outline-none data-[closed]:scale-95 data-[closed]:opacity-0 ${
                    isMedium || isSmall
                        ? "[--anchor-gap:0.25rem] p-1"
                        : "[--anchor-gap:0.5rem] p-2"
                } ${isMedium ? "!rounded-[0.0625rem]" : ""} ${
                    isSmall ? "!rounded-lg" : ""
                }`}
                anchor="bottom"
                transition
                modal={false}
            >
                {options.map((option) => (
                    <ListboxOption
                        className={`group relative py-2.5 rounded-lg truncate text-body-lg font-medium text-gray-900 cursor-pointer transition-colors data-[focus]:bg-gray-25 data-[selected]:bg-gray-25 not-last:mb-0.5 ${
                            isMedium || isSmall
                                ? "px-2 !rounded-md data-[selected]:pr-6"
                                : "px-3 data-[selected]:pr-10.5"
                        } ${isMedium ? "!py-1.5 !text-body-md" : ""} ${
                            isSmall ? "!py-1 !text-body-sm" : ""
                        }`}
                        key={option.id}
                        value={option}
                    >
                        {option.name}
                        <Icon
                            className={`absolute top-1/2 right-3 -translate-y-1/2 opacity-0 transition-opacity group-[[data-selected]]:opacity-100 ${
                                isMedium || isSmall
                                    ? "!right-1.5 !size-3.5"
                                    : ""
                            }`}
                            name="check"
                        />
                    </ListboxOption>
                ))}
            </ListboxOptions>
            {note && <div className="mt-2 text-gray-400">{note}</div>}
        </Listbox>
    );
};

export default Select;
