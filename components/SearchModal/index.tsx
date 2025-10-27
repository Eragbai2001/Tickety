import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Icon from "@/components/Icon";
import Image from "@/components/Image/page";
import Modal from "@/components/Modal/page";
import JumpTo from "./JumpTo";
import Control from "./Control";

type Props = {
    disableHotkeys?: boolean;
    className?: string;
    onlyIcon?: boolean;
};

const SearchModal = ({
    className,
    onlyIcon,
    disableHotkeys = false,
}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    useHotkeys("meta+k", () => setIsModalOpen(true), {
        enabled: !disableHotkeys,
    });

    return (
        <>
            {onlyIcon ? (
                <button
                    className={`relative flex justify-center items-center size-8 mr-2 border border-gray-100 rounded-full text-0 cursor-pointer outline-none transition-colors hover:bg-gray-25 data-open:bg-gray-25 max-md:border-0 ${
                        className || ""
                    }`}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Icon
                        className="!size-4 max-md:!size-6 max-md:fill-gray-400"
                        name="search"
                    />
                </button>
            ) : (
                <div
                    className={`flex items-center gap-2 shrink-0 h-10 px-3 border border-gray-100 rounded-lg shadow-xs text-body-sm transition-colors cursor-pointer hover:border-primary-500 ${
                        className || ""
                    }`}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Icon className="fill-gray-400" name="search" />
                    <div className="text-gray-500">Search</div>
                    <div className="flex gap-1 ml-auto">
                        <div className="flex justify-center items-center size-5 rounded-sm bg-gray-50">
                            <Image
                                className="w-3 opacity-100"
                                src="/images/key-command.svg"
                                width={12}
                                height={12}
                                alt="Avatar"
                            />
                        </div>
                        <div className="flex justify-center items-center size-5 rounded-sm bg-gray-50 text-[0.8125rem] font-semibold text-gray-400">
                            K
                        </div>
                    </div>
                </div>
            )}
            <Modal
                classWrapper="!max-w-175 !p-0 !rounded-2xl"
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className="relative">
                    <button className="group absolute top-1/2 left-4 -translate-y-1/2 text-0">
                        <Icon
                            className="fill-gray-500 transition-colors group-hover:fill-gray-900"
                            name="search"
                        />
                    </button>
                    <input
                        className="w-full h-14 pl-12 pr-3 border-b border-gray-100 shadow-xs rounded-t-2xl text-body-md font-medium text-gray-900 transition-colors placeholder:text-gray-200 outline-none focus:border-primary-500 focus:bg-primary-50"
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>
                <JumpTo />
                <Control />
            </Modal>
        </>
    );
};

export default SearchModal;
