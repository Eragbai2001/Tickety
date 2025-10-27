import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";
import Field from "@/components/Field";
import Button from "@/components/Button/page";
import { useState } from "react";

type Props = {
    isShortButton?: boolean;
};

const Filter = ({ isShortButton }: Props) => {
    const [amountStart, setAmountStart] = useState<number>(500);
    const [amountEnd, setAmountEnd] = useState<number>(12000);
    const [dateStart, setDateStart] = useState<string>("1 Dec 2024");
    const [dateEnd, setDateEnd] = useState<string>("31 Jun 2024");
    const [checkboxes, setCheckboxes] = useState([
        {
            id: 0,
            label: "Approved",
            checked: false,
            onChange: (value: boolean) => handleCheckboxChange(0, value),
        },
        {
            id: 1,
            label: "Pending",
            checked: false,
            onChange: (value: boolean) => handleCheckboxChange(1, value),
        },
        {
            id: 2,
            label: "Rejected",
            checked: false,
            onChange: (value: boolean) => handleCheckboxChange(2, value),
        },
    ]);

    const handleCheckboxChange = (id: number, checked: boolean) => {
        setCheckboxes((prev) =>
            prev.map((item) => (item.id === id ? { ...item, checked } : item))
        );
    };

    return (
        <Popover>
            <PopoverButton
                className={`group flex justify-center items-center h-10 border border-gray-100 rounded-[0.625rem] shadow-xs text-body-md font-medium text-gray-500 cursor-pointer outline-none transition-colors hover:text-gray-900 data-open:bg-gray-25 data-open:text-gray-900 ${
                    isShortButton
                        ? "w-10 !text-0"
                        : " px-2.75 gap-2 max-md:!gap-0 max-md:!w-10 max-md:!px-0 max-md:!text-0"
                }`}
            >
                <Icon
                    className="!size-4 fill-gray-400 transition-colors group-hover:fill-gray-900 group-[[data-open]]:fill-gray-900"
                    name="filter"
                />
                Filter
            </PopoverButton>
            <PopoverPanel
                className="[--anchor-gap:0.5rem] z-20 flex flex-col gap-4 w-72 p-5 border border-gray-100 rounded-2xl bg-white shadow-[0_1rem_2rem_-0.0625rem_rgba(128,136,151,0.20)] transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0 max-md:[--anchor-offset:4.375rem]"
                anchor="bottom end"
                transition
                modal={false}
            >
                {({ close }) => (
                    <>
                        <div className="">
                            <div className="mb-2 font-semibold">Amount, $</div>
                            <div className="flex gap-2">
                                <Field
                                    classInput="!h-10 !text-body-md"
                                    type="tel"
                                    value={amountStart}
                                    onChange={(e) =>
                                        setAmountStart(Number(e.target.value))
                                    }
                                    required
                                />
                                <Field
                                    classInput="!h-10 !text-body-md"
                                    type="tel"
                                    value={amountEnd}
                                    onChange={(e) =>
                                        setAmountEnd(Number(e.target.value))
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-2 font-semibold">Date</div>
                            <div className="flex gap-2">
                                <Field
                                    classInput="!h-10 !text-body-md"
                                    type="tel"
                                    value={dateStart}
                                    onChange={(e) =>
                                        setDateStart(e.target.value)
                                    }
                                    required
                                />
                                <Field
                                    classInput="!h-10 !text-body-md"
                                    type="tel"
                                    value={dateEnd}
                                    onChange={(e) => setDateEnd(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-2 font-semibold">Status</div>
                            <div className="flex flex-col items-start gap-2">
                                {checkboxes.map((checkbox) => (
                                    <Checkbox
                                        label={checkbox.label}
                                        checked={checkbox.checked}
                                        onChange={checkbox.onChange}
                                        key={checkbox.id}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                className="flex-1"
                                isSecondary
                                isMedium
                                onClick={() => close()}
                            >
                                Clear
                            </Button>
                            <Button
                                className="flex-1"
                                isPrimary
                                isMedium
                                onClick={() => close()}
                            >
                                Apply
                            </Button>
                        </div>
                    </>
                )}
            </PopoverPanel>
        </Popover>
    );
};

export default Filter;
