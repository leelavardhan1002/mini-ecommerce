import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/atoms/Input";
import { InputProps } from "@/utils/types";

/**
 * Input Component
 *
 * A reusable input component with a label, supporting various types and custom styling.
 */
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    type: {
      control: {
        type: "select",
        options: [
          "text",
          "password",
          "email",
          "number",
          "search",
          "tel",
          "url",
        ],
      },
    },
    placeholder: { control: "text" },
    onChange: { action: "changed" },
    onBlur: { action: "blurred" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Default Input
 *
 * Basic usage of the Input component with text type.
 */
export const Default: Story = {
  args: {
    id: "default-input",
    label: "Default Input",
    type: "text",
    placeholder: "Enter text...",
    value: "",
  },
  render: (args) => <Input {...args} />,
};

/**
 * Password Input
 *
 * Usage of the Input component with password type.
 */
export const Password: Story = {
  args: {
    id: "password-input",
    label: "Password",
    type: "password",
    placeholder: "Enter your password...",
    value: "",
  },
  render: (args) => <Input {...args} />,
};

/**
 * Email Input
 *
 * Usage of the Input component with email type.
 */
export const Email: Story = {
  args: {
    id: "email-input",
    label: "Email",
    type: "email",
    placeholder: "Enter your email...",
    value: "",
  },
  render: (args) => <Input {...args} />,
};
