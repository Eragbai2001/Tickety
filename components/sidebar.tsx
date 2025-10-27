import { useState } from "react";
import Link from "next/link";
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
          <Link className="flex items-center" href="/">
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

          <Button
            className={`transition-colors max-xl:hidden ${
              toggle ? "rotate-180" : ""
            }`}
            icon="chevron"
            isSecondary
            isXSmall
            isSquare
            onClick={onToggle}
          />
         
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
