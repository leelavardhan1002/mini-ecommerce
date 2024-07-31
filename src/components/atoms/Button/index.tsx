import React from "react";
import { ButtonProps } from "@/utils/types";

const Button: React.FC<ButtonProps> = ({
  text,
  Icon,
  variant = "solid",
  onClick,
  className = "font-bold py-4 px-4 rounded flex justify-center items-center space-x-2 w-full rounded-tl-xl rounded-tr-3xl rounded-br-xl rounded-bl-3xl ",
}) => {
  const variantClasses = {
    solid: "bg-TERTIARY hover:bg-PRIMARY text-[#000000]",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-100 hover:border-blue-600",
  };

  const buttonClass = `${className} ${variantClasses[variant]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {Icon && <Icon className="text-xl" data-testid="icon" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
