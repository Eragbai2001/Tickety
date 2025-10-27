import { useState } from "react";
import Search from "@/components/Search";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";
import Pagination from "@/components/Pagination";
import Filter from "./Filter";
import SortBy from "./SortBy";
import { SelectOption } from "@/types/select";

const sortingOptions = [
    { id: 1, name: "10" },
    { id: 2, name: "20" },
    { id: 3, name: "30" },
];

type Props = {
    className?: string;
    title: string;
    search: string;
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectAll?: boolean;
    onSelectAll?: (enabled: boolean) => void;
    cellsThead: React.ReactNode[];
    isNumber?: boolean;
    isPagination?: boolean;
    isShortHead?: boolean;
    children: React.ReactNode;
};

const Table = ({
    className,
    title,
    search,
    setSearch,
    selectAll,
    onSelectAll,
    cellsThead,
    isNumber,
    isPagination,
    isShortHead,
    children,
}: Props) => {
    const [sorting, setSorting] = useState<SelectOption>(sortingOptions[0]);

    return (
        <div
            className={`border border-gray-100 rounded-2xl shadow-[0_0.0625rem_0.125rem_0_rgba(228,229,231,0.24)] ${
                className || ""
            }`}
        >
            <div className="flex items-center px-5 py-3 max-md:px-4">
                <div className="mr-auto text-body-lg font-semibold">
                    {title}
                </div>
                <div className="flex gap-3">
                    <Search
                        className="w-64 max-lg:hidden"
                        value={search}
                        onChange={setSearch}
                        placeholder="Search"
                    />
                    <Filter isShortButton={isShortHead} />
                    <SortBy isShortButton={isShortHead} />
                </div>
            </div>
            <div className="px-5 py-2 max-lg:overflow-x-auto max-lg:scrollbar-none max-md:px-4">
                <table className="w-full text-body-md font-medium [&_th,&_td]:pl-3 [&_th,&_td]:last:pr-3 [&_th]:relative [&_th]:z-2 [&_th]:font-medium [&_th]:text-left [&_th]:text-gray-500 max-lg:min-w-268">
                    <thead>
                        <tr className="relative [&_th]:py-2.25 after:absolute after:inset-0 after:border after:border-gray-100 after:bg-gray-25 after:rounded-[0.625rem] max-md:[&_th]:bg-gray-25 max-md:[&_th]:first:rounded-l-[0.625rem] max-md:[&_th]:last:rounded-r-[0.625rem] max-md:after:hidden">
                            {onSelectAll && (
                                <th className="w-7">
                                    <Checkbox
                                        checked={selectAll || false}
                                        onChange={(value) => onSelectAll(value)}
                                    />
                                </th>
                            )}
                            {isNumber && (
                                <th className="w-13 !pl-2.5 max-2xl:w-10">
                                    No
                                </th>
                            )}
                            {cellsThead.map((head, index) => (
                                <th className="" key={index}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
            {isPagination && (
                <div className="flex items-center px-5 py-4 max-md:justify-between max-md:px-4">
                    <div className="font-medium">
                        <div className="max-md:hidden">
                            Showing 1 to 10 of, 500 results
                        </div>
                        <div className="hidden max-md:block">Page 2 of 12</div>
                    </div>
                    <div className="flex items-center mx-auto max-md:hidden">
                        <div className="flex items-center h-8 px-2 border border-r-0 border-gray-100 rounded-l-lg text-body-sm font-medium">
                            Per page
                        </div>
                        <Select
                            className="min-w-14.5"
                            classButton="!pl-2 !rounded-l-none"
                            value={sorting}
                            onChange={setSorting}
                            options={sortingOptions}
                            isSmall
                        />
                    </div>
                    <Pagination />
                </div>
            )}
        </div>
    );
};

export default Table;
