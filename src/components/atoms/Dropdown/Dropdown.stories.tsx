import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BiCart } from "react-icons/bi";
import Dropdown from ".";

/**
 * Dropdown Component
 *
 * A customizable dropdown menu component that supports icons, labels, and various styling options.
 */
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    title: { control: "text" },
    Icon: {
      control: { type: "select" },
      options: ["BiCart", "None"],
      mapping: {
        BiCart: BiCart,
        None: undefined,
      },
    },
    dropdownWidth: { control: "text" },
    options: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/**
 * Default Dropdown
 *
 * Basic usage of the Dropdown component with a label and options.
 */
export const Default: Story = {
  args: {
    label: "Select an option",
    title: "Options",
    options: [
      {
        name: "Option 1",
        optionOnClick: () => console.log("Option 1 clicked"),
      },
      {
        name: "Option 2",
        optionOnClick: () => console.log("Option 2 clicked"),
      },
    ],
    dropdownWidth: "w-[20rem]",
  },
};

/**
 * Dropdown with Icon
 *
 * Dropdown component with an icon in the button.
 */
export const WithIcon: Story = {
  args: {
    ...Default.args,
    Icon: BiCart,
    label: "Cart",
  },
};

/**
 * Dropdown with Images
 *
 * Dropdown component with images in the options.
 */
export const WithImages: Story = {
  args: {
    ...Default.args,
    options: [
      {
        name: "Product 1",
        image: "https://via.placeholder.com/30",
        quantity: 2,
        optionOnClick: () => console.log("Product 1 clicked"),
      },
      {
        name: "Product 2",
        image: "https://via.placeholder.com/30",
        quantity: 1,
        optionOnClick: () => console.log("Product 2 clicked"),
      },
    ],
  },
};

/**
 * Wide Dropdown
 *
 * Dropdown component with a wider menu.
 */
export const WideDropdown: Story = {
  args: {
    ...Default.args,
    dropdownWidth: "w-[30rem]",
  },
};
