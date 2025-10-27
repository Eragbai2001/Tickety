import Icon from "@/components/Icon";

type Props = {
    item: {
        id: number;
        title: string;
        content: string;
        time: string;
        new: boolean;
        type: string;
    };
};

const Notification = ({ item }: Props) => (
    <div className="flex gap-3 py-4 max-md:py-2">
        <div className="flex justify-center items-center shrink-0 size-9 rounded-full bg-primary-50 shadow-[0_-0.25rem_0.375rem_0_rgba(255,255,255,0.50)_inset]">
            <Icon
                className="fill-primary-500"
                name={
                    item.type === "payment"
                        ? "wallet"
                        : item.type === "event"
                        ? "calendar"
                        : item.type === "review"
                        ? "message"
                        : "ticket"
                }
            />
        </div>
        <div className="grow">
            <div className="flex gap-3 mb-0.5">
                <div className="grow font-semibold">{item.title}</div>
                {item.new && (
                    <div className="shrink-0 mt-1.5 size-2 rounded-full bg-error-100"></div>
                )}
            </div>
            <div className="text-body-sm max-md:line-clamp-2">
                {item.content}
            </div>
            <div className="mt-1 text-body-sm text-gray-500">{item.time}</div>
        </div>
    </div>
);

export default Notification;
