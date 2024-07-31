import React from "react";
import { ButtonProps } from "@/utils/types";

const Button: React.FC<ButtonProps> = ({
  text,
  Icon,
  onClick,
  className = "font-bold py-4 px-4 rounded flex justify-center items-center space-x-2 w-full bg-TERTIARY",
}) => {
  return (
    <button className={className} onClick={onClick}>
      {Icon && <Icon className="text-xl" data-testid="icon" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
