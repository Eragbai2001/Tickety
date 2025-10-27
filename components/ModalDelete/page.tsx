import Modal from "@/components/Modal/page";
import Button from "@/components/Button/page";

type Props = {
    open: boolean;
    onClose: () => void;
    content: string;
    onDelete: () => void;
};

const ModalDelete = ({ open, onClose, content, onDelete }: Props) => {
    return (
        <Modal classWrapper="text-center" open={open} onClose={onClose}>
            <div className="relative flex justify-center items-center size-21 mx-auto mb-4 max-md:size-14 max-md:mb-2">
                <div className="absolute inset-0 rounded-full border border-[#FFF0F3] bg-[#FFF0F3]/48 mask-b-from-5%"></div>
                <div className="relative z-2 flex justify-center items-center size-13 border border-error-25 rounded-full bg-white shadow-[0_0.125rem_0.25rem_0_rgba(250,219,225,0.04)] max-md:size-9">
                    <svg
                        className="size-6 fill-error-100 max-md:size-4.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                    >
                        <path d="M3.5 3.5h1.768a1.75 1.75 0 0 1 3.465 0H10.5a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1zM7 3a.75.75 0 0 1 .707.5H6.293A.75.75 0 0 1 7 3zm2.924 2H4.077a.5.5 0 0 0-.495.571l.734 5.141A1.5 1.5 0 0 0 5.801 12h2.398a1.5 1.5 0 0 0 1.485-1.288l.734-5.141A.5.5 0 0 0 9.924 5zM6 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V7a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V7a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </div>
            </div>
            <div className="mb-2 text-h4 max-md:text-h5">Confirm Delete</div>
            <div className="mb-8 text-body-lg text-gray-500 max-md:mb-5 max-md:text-body-md">
                {content}
            </div>
            <div className="flex gap-4 max-md:flex-col max-md:gap-3">
                <Button
                    className="flex-1 max-md:flex-auto max-md:!h-10 !text-body-md"
                    isSecondary
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    className="flex-1 max-md:flex-auto max-md:!h-10 !text-body-md"
                    isRed
                    onClick={onDelete}
                >
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

export default ModalDelete;
