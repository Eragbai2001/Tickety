import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/page";

import { navigation } from "./Navigation";

type Props = {
    toggle: boolean;
};

const Menu = ({ toggle }: Props) => {
    const pathname = usePathname();
    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <div className={`flex flex-col mb-auto ${toggle ? "gap-6" : "gap-4"}`}>
            {navigation.map((item, index) => (
                <div className="" key={index}>
                    {!toggle && (
                        <div className="flex items-center h-7 mb-1 px-3 text-gray-300">
                            {item.title}
                        </div>
                    )}
                    <div className="flex flex-col">
                        {item.items.map((item, index) => (
                            <Link
                                className={`group relative flex items-center h-10 rounded-lg text-body-lg font-medium text-gray-500 transition-colors before:absolute before:top-2 before:-left-4 before:bottom-2 before:w-1 before:bg-primary-600 before:rounded-r-sm before:transition-opacity hover:text-gray-900 ${
                                    toggle
                                        ? "justify-center w-10 before:hidden"
                                        : "px-3"
                                } ${
                                    isActive(item.href)
                                        ? "bg-gray-25 text-gray-900 before:opacity-100"
                                        : "before:opacity-0"
                                }`}
                                key={index}
                                href={item.href}
                            >
                                <Icon
                                    className={`fill-gray-500 transition-colors group-hover:fill-gray-900 ${
                                        toggle ? "size-6" : ""
                                    } ${
                                        isActive(item.href)
                                            ? "fill-primary-500"
                                            : ""
                                    }`}
                                    name={item.icon}
                                />
                                {!toggle && (
                                    <span className="ml-2">{item.title}</span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;
