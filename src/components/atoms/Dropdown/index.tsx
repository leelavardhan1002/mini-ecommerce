import { DropdownProps } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown: React.FC<DropdownProps> = ({ label, options, title, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-4 py-2 bg-white text-black rounded-md transition-all duration-300 ${
          isOpen ? "border-b-4 border-blue-500" : ""
        }`}
      >
        {Icon && <Icon className="text-lg" data-testid="icon" />}
        {label}
        <IoIosArrowDown
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-[32rem] mt-2 p-2 bg-white shadow-lg rounded-md animate-linearDropdown z-30">
          <h1 className="font-bold p-2">{title}</h1>
          <hr />
          <ul className="grid grid-cols-2 gap-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsOpen(false)}
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
