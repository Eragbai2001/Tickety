"use client";

import Button from "@/components/Button/page";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";

type Props = {
  onClose: () => void;
};

const Logout = ({ onClose }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    try {
      signOut();
    } catch (e) {
      // ignore
    }
    onClose();
    router.push("/sign-in");
  };

  return (
    <div className="text-center">
      <div className="relative flex justify-center items-center size-21 mx-auto mb-4 max-md:size-14 max-md:mb-2">
        <div className="absolute inset-0 rounded-full border border-[#FFF0F3] bg-[#FFF0F3]/48 mask-b-from-5%"></div>
        <div className="relative z-2 flex justify-center items-center size-13 border border-error-25 rounded-full bg-white shadow-[0_0.125rem_0.25rem_0_rgba(250,219,225,0.04)] max-md:size-9">
          <svg
            className="size-6 fill-error-100 max-md:size-4.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M4 7.27c0-2.063 1.559-3.61 3.23-3.206l3.6.872C12.092 5.242 13 6.584 13 8.142V8.5a.5.5 0 0 1-.5.5H11a3 3 0 1 0 0 6h1.5a.5.5 0 0 1 .5.5v.358c0 1.558-.908 2.9-2.171 3.206l-3.6.872C5.559 20.34 4 18.793 4 16.73zm11.824 1.268a1 1 0 0 1 1.413.061l2.5 2.724a1 1 0 0 1 0 1.352l-2.5 2.724a1 1 0 1 1-1.474-1.352L16.725 13H11a1 1 0 1 1 0-2h5.725l-.962-1.048a1 1 0 0 1 .061-1.413z" />
          </svg>
        </div>
      </div>
      <div className="mb-2 text-h4 max-md:text-h5">Logout</div>
      <div className="mb-8 text-body-lg text-gray-500 max-md:mb-5 max-md:text-body-md">
        Are you sure want to Logout to Tickety?
      </div>
      <div className="flex gap-4 max-md:flex-col max-md:gap-3">
        <Button
          className="flex-1 max-md:flex-auto max-md:h-10 text-body-md"
          isSecondary
          onClick={onClose}>
          Cancel
        </Button>
        <Button
          className="flex-1 max-md:flex-auto max-md:h-10 text-body-md"
          isRed
          onClick={handleLogout}>
          Yes, Logout
        </Button>
      </div>
    </div>
  );
};

export default Logout;
