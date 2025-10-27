import Link from "next/link";
import Icon from "@/components/Icon";

import { items } from "./items";

const JumpTo = ({}) => (
    <div className="px-1 py-4">
        <div className="mb-2 px-3 text-body-sm font-semibold text-gray-500">
            JUMP TO
        </div>
        <div className="">
            {items.map((item, index) => (
                <Link
                    className="group flex items-center gap-3 px-3 py-2.5 text-body-lg font-medium rounded-xl transition-colors hover:bg-gray-25"
                    href={item.href}
                    key={index}
                >
                    <div className="flex justify-center items-center size-8 bg-gray-25 border border-gray-100 rounded-lg transition-colors group-hover:bg-white">
                        <Icon
                            className="!size-4.5 fill-primary-500"
                            name={item.icon}
                        />
                    </div>
                    <div className="">{item.title}</div>
                </Link>
            ))}
        </div>
    </div>
);

export default JumpTo;
