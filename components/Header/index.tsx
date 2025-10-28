import Link from "next/link";
import Icon from "@/components/Icon";
import Button from "@/components/Button/page";

import Notifications from "./Notifications";

type Props = {
  title: string;
  toggle: boolean;
  onShow: () => void;
};

const Header = ({ title, toggle, onShow }: Props) => (
  <div
    className={`fixed top-0 right-0 z-20 px-8 bg-white max-md:px-0 ${
      toggle ? "left-18" : "left-69 max-xl:left-0"
    }`}>
    <div className="relative flex items-center h-18.25 border-b border-gray-100 max-md:h-16.25 max-md:px-6">
      <Button
        className="!hidden mr-6 [&_svg]:!size-5 max-xl:!flex"
        icon="burger"
        isSecondary
        isSmall
        isSquare
        onClick={onShow}
      />
      <div className="text-h5 ">{title}</div>
      <div className="flex items-center ml-auto">
        <Notifications />
        <div className="w-0.25 h-5 mx-2.5 bg-gray-100"></div>
        <Link className="flex items-center gap-2 max-md:gap-0" href="/sign-in">
          <div className="flex justify-center items-center shrink-0 size-8 bg-primary-100 rounded-full">
            <Icon className="size-4 fill-primary-500" name="user" />
          </div>
          <div className="text-body-sm max-md:hidden">
            <div className="font-semibold">Robert Johnson</div>
            <div className="text-gray-500">Super Admin</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
