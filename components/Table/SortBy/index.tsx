import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "@/components/Icon";

const sortingOptions = [
    { id: 1, name: "By name (A → Z)" },
    { id: 2, name: "By name (Z → A)" },
    { id: 3, name: "Oldest → Newest" },
    { id: 4, name: "Newest → Oldest" },
];

type Props = {
    isShortButton?: boolean;
};

const SortBy = ({ isShortButton }: Props) => {
    const [activeOption, setActiveOption] = useState<number | null>(null);

    const handleOptionClick = (id: number) => {
        setActiveOption(id);
    };

    return (
        <Popover>
            <PopoverButton
                className={`group flex justify-center items-center h-10 border border-gray-100 rounded-[0.625rem] shadow-xs text-body-md font-medium text-gray-500 cursor-pointer outline-none transition-colors hover:text-gray-900 data-open:bg-gray-25 data-open:text-gray-900 ${
                    isShortButton
                        ? "w-10 !text-0"
                        : "px-2.75 gap-2 max-md:!gap-0 max-md:!w-10 max-md:!px-0 max-md:!text-0"
                }`}
            >
                <Icon
                    className="!size-4 fill-gray-400 transition-colors group-hover:fill-gray-900 group-[[data-open]]:fill-gray-900"
                    name="sorting"
                />
                Sort by
            </PopoverButton>
            <PopoverPanel
                className="[--anchor-gap:0.5rem] z-20 flex flex-col gap-0.5 w-54 p-2 border border-gray-100 rounded-2xl bg-white shadow-[0_1rem_2rem_-0.0625rem_rgba(128,136,151,0.20)] transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0"
                anchor="bottom end"
                transition
                modal={false}
            >
                {({ close }) => (
                    <>
                        {sortingOptions.map((option) => (
                            <button
                                className={`flex items-center h-10 px-4 rounded-lg font-medium transition-colors hover:bg-gray-25 ${
                                    activeOption === option.id
                                        ? "bg-gray-25"
                                        : ""
                                }`}
                                key={option.id}
                                onClick={() => {
                                    handleOptionClick(option.id);
                                    close();
                                }}
                            >
                                {option.name}
                            </button>
                        ))}
                    </>
                )}
            </PopoverPanel>
        </Popover>
    );
};

export default SortBy;
