import React from "react";
import { useForm, Controller, FieldError } from "react-hook-form";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { FormProps } from "@/utils/types";

const Form: React.FC<FormProps> = ({ inputs, buttonText, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {inputs.map((input) => (
        <div key={input.id}>
          <Controller
            name={input.id}
            control={control}
            defaultValue=""
            rules={{
              required: `${input.label} is required`,
              ...(input.type === "email" && {
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              }),
              ...(input.type === "password" && {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Minimum eight characters, at least one letter and one number",
                },
              }),
            }}
            render={({ field }) => (
              <Input
                id={input.id}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors[input.id] && (
            <div className="text-red-500">
              {(errors[input.id] as FieldError).message}
            </div>
          )}
        </div>
      ))}
      <Button text={buttonText} type="submit" />
    </form>
  );
};

export default Form;
