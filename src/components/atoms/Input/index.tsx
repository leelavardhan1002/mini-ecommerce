import React from "react";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-medium text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="px-4 py-4 bg-[#dde2e7] rounded-xl focus:outline-none"
      />
    </div>
  );
};

export default Input;
