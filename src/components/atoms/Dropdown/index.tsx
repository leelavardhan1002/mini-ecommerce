import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { DropdownProps } from "@/utils/types";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  title,
  Icon,
  dropdownWidth,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <MenuButton className="flex items-center px-4 py-2 bg-white text-black rounded-md hover:bg-gray-50">
              {Icon && <Icon className="text-xl" />}
              {label}
              <IoIosArrowDown
                className={`w-5 h-5 ml-2 text-gray-400 transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className={`absolute left-0 mt-2 ${dropdownWidth} origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in z-30`}
          >
            <div className="py-1">
              <div className="px-4 py-2 font-bold">{title}</div>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                {options.map((option, index) => (
                  <MenuItem key={index}>
                    {({ active }) => (
                      <button
                        onClick={option.optionOnClick}
                        className={`flex items-center space-x-2 px-4 py-2 text-left w-full ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {option.image && (
                          <Image
                            src={option.image}
                            alt={option.name ?? "ProductImage"}
                            className="w-8 h-8 rounded-full"
                            width={30}
                            height={30}
                          />
                        )}
                        <div>
                          <div className="font-medium">{option.name}</div>
                          {option.quantity !== undefined && (
                            <div className="text-gray-500 text-sm">
                              Quantity: {option.quantity}
                            </div>
                          )}
                        </div>
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
