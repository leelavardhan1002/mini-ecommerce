import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import React, { useState } from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface FormProps {
  inputs: FormInputProps[];
  buttonText: string;
  onSubmit: (formData: { [key: string]: string }) => void;
}

const Form: React.FC<FormProps> = ({ inputs, buttonText, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {inputs.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          value={formData[input.id] || ""}
          onChange={handleChange}
        />
      ))}
      <Button text={buttonText} onClick={() => handleSubmit} />
    </form>
  );
};

export default Form;
