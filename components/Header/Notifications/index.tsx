import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "@/components/Icon";
import Button from "@/components/Button/page";
import Notification from "./Notification";

import { notifications } from "./notifications";

const Notifications = ({}) => {
    const isNewNotification = true;

    return (
        <Popover>
            <PopoverButton className="relative size-8 border border-gray-100 rounded-full text-0 cursor-pointer outline-none transition-colors hover:bg-gray-25 data-open:bg-gray-25 max-md:border-0">
                <Icon
                    className="size-4 max-md:size-6 max-md:fill-gray-400"
                    name="bell"
                />
                {isNewNotification && (
                    <div className="absolute top-1.75 right-1.5 size-2 border-[1.5px] border-white rounded-full bg-error-100 max-md:top-1.25 max-md:right-1 max-md:size-2.5"></div>
                )}
            </PopoverButton>
            <PopoverPanel
                className="!right-8 !left-auto [--anchor-gap:1.25rem] z-20 w-100 border border-gray-100 rounded-2xl bg-white shadow-[0_1rem_2rem_-0.0625rem_rgba(128,136,151,0.20)] transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0 max-md:!right-6 max-md:!left-6 max-md:w-auto max-md:[--anchor-gap:0.75rem]"
                anchor="bottom"
                transition
                modal={false}
            >
                <div className="flex items-center h-18 px-6 border-b border-gray-100 max-md:h-16">
                    <div className="text-body-xl font-semibold">
                        Notifications
                    </div>
                    <button className="group ml-auto">
                        <Icon
                            className="fill-gray-400 transition-colors group-hover:fill-gray-900"
                            name="gear"
                        />
                    </button>
                </div>
                <div className="px-6 py-4">
                    {notifications.map((notification) => (
                        <Notification
                            item={notification}
                            key={notification.id}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center p-6 border-t border-gray-100 max-md:py-3">
                    <button className="text-body-md font-semibold text-primary-500 transition-colors hover:text-primary-600">
                        Mark all as read
                    </button>
                    <Button className="max-md:min-w-34" isPrimary isMedium>
                        <span>
                            View All
                            <span className="max-md:hidden">
                                &nbsp;Notifications
                            </span>
                        </span>
                    </Button>
                </div>
            </PopoverPanel>
        </Popover>
    );
};

export default Notifications;
