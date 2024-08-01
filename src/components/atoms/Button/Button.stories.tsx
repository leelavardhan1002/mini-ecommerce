import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BiCart, BiAlarm } from "react-icons/bi";
import Button from "@/components/atoms/Button";

/**
 * Button Component
 *
 * A versatile button component that can display text, an icon, or both.
 * It supports custom styling and click handlers.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    Icon: {
      control: { type: "select" },
      options: ["BiCart", "BiAlarm", "None"],
      mapping: {
        BiCart: BiCart,
        BiAlarm: BiAlarm,
        None: undefined,
      },
    }, // 'control: none' for components or icons
    onClick: { action: "clicked" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Default Button
 *
 * Basic usage of the Button component with text only.
 */
export const Default: Story = {
  args: {
    text: "Click Me",
    className:
      "font-bold py-4 px-4 rounded flex justify-center items-center space-x-2 w-full bg-TERTIARY",
  },
  render: (args) => <Button {...args} />,
};

/**
 * Button with Icon
 *
 * Button component displaying both an icon and text.
 */
export const WithIcon: Story = {
  args: {
    text: "Add to Cart",
    Icon: BiCart,
  },
  render: (args) => <Button {...args} />,
};

/**
 * Custom Styled Button
 *
 * Button component with custom styling applied.
 */
export const CustomStyle: Story = {
  args: {
    text: "Custom Button",
    className:
      "bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700",
  },
  render: (args) => <Button {...args} />,
};

/**
 * Icon Only Button
 *
 * Button component displaying only an icon.
 */
export const IconOnly: Story = {
  args: {
    Icon: BiAlarm,
    className: "p-2 rounded-full bg-gray-200 hover:bg-gray-300",
  },
  render: (args) => <Button {...args} />,
};
