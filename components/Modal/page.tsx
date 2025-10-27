import {
    Dialog,
    DialogPanel,
    DialogBackdrop,
    CloseButton,
} from "@headlessui/react";
import Icon from "@/components/Icon/page";
import Button from "@/components/Button/page";

type ModalProps = {
    className?: string;
    classWrapper?: string;
    title?: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    isSlidePanel?: boolean;
    contentFooter?: React.ReactNode;
};

const Modal = ({
    className,
    classWrapper,
    title,
    open,
    onClose,
    children,
    isSlidePanel,
    contentFooter,
}: ModalProps) => {
    return (
        <Dialog className="relative z-50" open={open} onClose={onClose}>
            <DialogBackdrop
                className="fixed inset-0 bg-gray-900/50 duration-300 ease-out backdrop-blur-[0.125rem] data-[closed]:opacity-0"
                transition
            />
            <div
                className={`fixed inset-0 flex w-screen p-8 max-md:p-6 ${
                    isSlidePanel
                        ? "justify-end overflow-hidden max-md:justify-center max-md:overflow-y-auto"
                        : "justify-center overflow-y-auto"
                } ${className || ""}`}
            >
                <DialogPanel
                    className={`bg-white ${
                        isSlidePanel
                            ? "relative flex flex-col w-135 h-[calc(100svh-4rem)] rounded-2xl duration-300 ease-out data-[closed]:translate-x-[calc(100%+2rem)] max-2xl:w-110 max-lg:w-100 max-md:block max-md:w-full max-md:h-auto max-md:my-auto max-md:data-[closed]:translate-x-0 max-md:data-[closed]:scale-95 max-md:data-[closed]:opacity-0"
                            : "w-full max-w-112.5 m-auto p-8 rounded-[1.25rem] duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 max-md:p-5"
                    } ${classWrapper || ""}`}
                    transition
                >
                    {isSlidePanel && (
                        <div className="flex justify-between items-center p-6 border-b border-gray-100 max-md:p-4">
                            <div className="text-body-xl font-semibold max-md:text-body-lg">
                                {title}
                            </div>
                            <CloseButton className="flex justify-center items-center shrink-0 size-10 ml-4 border border-gray-100 rounded-full shadow-xs transition-colors hover:bg-gray-25">
                                <Icon
                                    className="size-6 fill-t-secondary transition-colors group-hover:fill-t-primary"
                                    name="close"
                                />
                            </CloseButton>
                        </div>
                    )}
                    {isSlidePanel ? (
                        <div className="grow p-6 overflow-auto scrollbar-none max-md:p-4">
                            {children}
                        </div>
                    ) : (
                        children
                    )}
                    {isSlidePanel && (
                        <div className="flex justify-end gap-3 p-6 border-t border-gray-100 max-md:p-4">
                            <Button
                                className="min-w-30 max-md:flex-1 max-md:min-w-auto"
                                isSecondary
                                isMedium
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            {contentFooter}
                        </div>
                    )}
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default Modal;
