import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Icon from "@/components/Icon";
import ModalDelete from "@/components/ModalDelete/page";

type Props = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void | Promise<void>;
};

const Actions = ({ onView, onEdit, onDelete }: Props) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const items = [
    {
      title: "View",
      icon: "M1.395 6.264C2.211 5.087 4.105 2.92 6.993 2.92s4.783 2.167 5.598 3.344a1.28 1.28 0 0 1 0 1.479c-.816 1.177-2.709 3.344-5.598 3.344S2.211 8.92 1.395 7.743a1.28 1.28 0 0 1 0-1.479zm4.14.739a1.45 1.45 0 0 1-.858-.279c-.011.092-.017.185-.017.279 0 1.289 1.045 2.333 2.333 2.333s2.333-1.045 2.333-2.333S8.282 4.67 6.993 4.67a2.36 2.36 0 0 0-.279.017 1.45 1.45 0 0 1 .279.858 1.46 1.46 0 0 1-1.458 1.458z",
      onClick: () => onView?.(),
    },
    {
      title: "Edit",
      icon: "M11.667 11.083c.322 0 .583.261.583.583s-.261.583-.583.583H7.583c-.322 0-.583-.261-.583-.583s.261-.583.583-.583zM2.763 8.358l2.88 2.879c.111.111.112.294-.02.378a1.31 1.31 0 0 1-.491.189l-2.616.436c-.444.074-.829-.311-.755-.755l.436-2.616a1.31 1.31 0 0 1 .189-.491c.085-.132.268-.131.378-.02zm4.889-4.891l2.88 2.88c.111.111.111.292 0 .403l-3.685 3.684c-.111.111-.291.111-.402 0l-2.88-2.879c-.111-.111-.111-.291 0-.402l3.683-3.686c.111-.111.292-.111.403 0zm1.893-1.551l2.538 2.538a.57.57 0 0 1 0 .803.57.57 0 0 1-.803 0L8.742 2.72a.57.57 0 0 1 0-.803.57.57 0 0 1 .803 0z",
      onClick: () => onEdit?.(),
    },
    {
      title: "Delete",
      icon: "M3.5 3.5h1.768a1.75 1.75 0 0 1 3.465 0H10.5a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1zM7 3a.75.75 0 0 1 .707.5H6.293A.75.75 0 0 1 7 3zm2.924 2H4.077a.5.5 0 0 0-.495.571l.734 5.141A1.5 1.5 0 0 0 5.801 12h2.398a1.5 1.5 0 0 0 1.485-1.288l.734-5.141A.5.5 0 0 0 9.924 5zM6 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V7a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V7a.5.5 0 0 1 .5-.5z",
      onClick: () => setIsModalDeleteOpen(true),
    },
  ];
  return (
    <>
      <Menu>
        <MenuButton className="group">
          <Icon
            className="fill-gray-500 transition-colors group-hover:fill-gray-900 group-[[data-open]]:fill-gray-900"
            name="dots"
          />
        </MenuButton>
        <MenuItems
          className="[--anchor-gap:0.5rem] [--anchor-offset:0.75rem] z-20 flex flex-col w-50 p-2 border border-gray-100 rounded-2xl outline-0 bg-white shadow-[0_1rem_2rem_-0.0625rem_rgba(128,136,151,0.20)] transition duration-200 ease-out origin-top data-closed:scale-95 data-closed:opacity-0 max-md:!left-auto max-md:right-6"
          anchor="bottom end"
          transition
          modal={false}>
          {items.map((item) => (
            <MenuItem
              className="group flex items-center gap-3 h-10 px-3 rounded-lg text-body-md font-medium text-gray-500 transition-colors hover:bg-gray-25 hover:text-gray-900"
              key={item.title}
              onClick={() => item.onClick()}
              as="button">
              <svg
                className="size-5 fill-gray-400 transition-colors group-hover:fill-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14">
                <path d={item.icon} />
              </svg>
              {item.title}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <ModalDelete
        content="Are you sure you want to delete this item?"
        open={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        onDelete={async () => {
          setIsModalDeleteOpen(false);
          // call provided delete handler after closing modal
          try {
            await onDelete?.();
          } catch (e) {
            // swallow — callers handle toast/errors
          }
        }}
      />
    </>
  );
};

export default Actions;
