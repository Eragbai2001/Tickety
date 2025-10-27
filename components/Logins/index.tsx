import Link from "next/link";
import Image from "@/components/Image/page";
import Icon from "@/components/Icon";

import { links } from "./links";

type Props = {
    title: string;
    description: React.ReactNode;
    image: string;
    children: React.ReactNode;
};

const Login = ({ title, description, image, children }: Props) => (
    <div className="relative max-md:bg-gray-25">
        <div className="absolute inset-0 pattern-dots bg-gray-25 mask-radial-at-center mask-radial-from-0% mask-radial-to-70% max-md:hidden"></div>
        <div className="relative z-2 flex justify-center items-center min-h-[100svh] pt-25 pb-21 max-md:pt-16 max-md:pb-16">
            <div className="absolute top-0 left-0 right-0 flex justify-center py-8 max-md:py-4">
                <Link className="flex items-center gap-3" href="/">
                    <Image
                        className="w-1o opacity-100"
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="Tickety"
                        priority
                    />
                    <div className="text-h4 max-md:text-h5">Tickety</div>
                </Link>
            </div>
            <div className="px-6 pt-3 pb-6 max-md:w-full max-md:py-4">
                <div className="w-125 p-8 bg-white rounded-2xl max-md:w-full max-md:px-4 max-md:py-5">
                    <div className="relative flex justify-center items-center size-21 mx-auto mb-4 max-md:size-14 max-md:mb-2">
                        <div className="absolute inset-0 rounded-full border border-[#E8F0FF] bg-[#E8F0FF]/48 mask-b-from-5%"></div>
                        <div className="relative z-2 flex justify-center items-center size-13 border border-primary-100 rounded-full bg-white shadow-[0_0.125rem_0.25rem_0_rgba(250,219,225,0.04)] max-md:size-9">
                            <Image
                                className="w-6 opacity-100 max-md:w-4.5"
                                src={image}
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mb-8 text-center max-md:mb-5">
                        <div className="text-h4 max-md:text-h5">{title}</div>
                        <div className="mt-2 text-body-lg text-gray-500 max-md:mt-1 max-md:text-body-md">
                            {description}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 flex justify-between items-center h-21 px-8 max-md:justify-center max-md:h-16">
                <div className="text-gray-500 max-md:text-center">
                    © 2025 Tickety. All right reserved.
                </div>
                <div className="flex gap-6 max-md:hidden">
                    {links.map((link) => (
                        <Link
                            className="group flex items-center gap-1.5 text-gray-500 transition-colors hover:text-gray-900"
                            key={link.title}
                            href={link.href}
                        >
                            <Icon
                                className="!size-4 fill-gray-400 transition-colors group-hover:fill-gray-900"
                                name={link.icon}
                            />
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Login;
