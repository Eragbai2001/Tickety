import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "@/components/Image/page";
import Button from "@/components/Button/page";
import Icon from "@/components/Icon/page";
import Modal from "@/components/Modal/page";

import Menu from "@/components/Menu/page";
import HelpAndCenter from "@/components/HelpAndCenter/page";
import Logout from "@/components/LogOut/page";
import SearchModal from "./SearchModal";

type Props = {
  toggle: boolean;
  visible: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const Sidebar = ({ toggle, visible, onToggle, onClose }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // Track large-screen state so we can completely omit the toggle button DOM on small screens
  // This prevents leftover spacing when the button is hidden via CSS.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1259px)");
    const onChange = (ev: MediaQueryListEvent | MediaQueryList) => {
      setIsLargeScreen(!!(ev as any).matches);
    };
    // initial
    setIsLargeScreen(mq.matches);
    // listen
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange as any);
    } else {
      // Safari fallback
      (mq as any).addListener(onChange);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", onChange as any);
      } else {
        (mq as any).removeListener(onChange);
      }
    };
  }, []);

  const handleHomeClick = async (e: React.MouseEvent) => {
    // ensure sidebar closes first
    try {
      onClose();
    } catch (err) {
      // ignore
    }
    // navigate then force a quick reload to avoid stale UI state
    try {
      await router.push("/");
    } catch (err) {
      // if router push fails, fallback to hard navigation
      window.location.href = "/";
      return;
    }
    // slight delay to allow navigation; then reload to ensure fresh UI
    setTimeout(() => window.location.reload(), 60);
  };

  const handleToggleClick = (e: React.MouseEvent) => {
    // Only allow toggle on screens wider than the xl breakpoint
    // (project uses max-xl breakpoint at ~1259px). We require min-width:1259px.
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1259px)");
    if (mq.matches) {
      onToggle();
    }
    // otherwise ignore click (disabled behavior)
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 z-10 flex flex-col bg-white border-r border-gray-100 max-xl:z-30 max-xl:transition-transform max-md:w-full ${
          toggle ? "w-18" : "w-69"
        } ${visible ? "max-xl:translate-x-0" : "max-xl:-translate-x-full"}`}>
        <div
          className={`flex items-center gap-2 border-b border-gray-100 ${
            toggle ? "flex-col px-5 py-3" : "justify-between p-5 max-md:py-4"
          }`}>
          <Link
            className="flex items-center"
            href="/"
            onClick={handleHomeClick}>
            <Image
              className="w-8 opacity-100"
              src="/images/logo.png"
              width={32}
              height={32}
              alt="Tickety"
              priority
            />
            {!toggle && <div className="ml-2.5 text-h5">Tickety</div>}
          </Link>

          {isLargeScreen && (
            <Button
              className={`transition-colors ${toggle ? "rotate-180" : ""}`}
              icon="chevron"
              isSecondary
              isXSmall
              isSquare
              onClick={handleToggleClick}
            />
          )}
        </div>
        <div className="flex flex-col p-4 pt-5 grow overflow-y-auto scrollbar-none">
          {!toggle && <SearchModal className="mb-4 max-xl:hidden" />}
          <Menu toggle={toggle} />
          {toggle ? (
            <div className="flex flex-col">
              <Link
                className="group flex items-center justify-center size-10 rounded-lg"
                href="/">
                <Icon
                  className="size-6 fill-gray-500 transition-colors group-hover:fill-gray-900"
                  name="headphone"
                />
              </Link>
              <button
                className="group flex items-center justify-center size-10 rounded-lg cursor-pointer"
                onClick={() => setIsModalOpen(true)}>
                <Icon
                  className="size-6 fill-error-100 transition-colors group-hover:fill-error-100/80"
                  name="logout"
                />
              </button>
            </div>
          ) : (
            <HelpAndCenter />
          )}
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Logout onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Sidebar;
