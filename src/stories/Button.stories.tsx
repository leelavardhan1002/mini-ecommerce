import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FaApplePay } from "react-icons/fa";
import Button from "@/components/atoms/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" },
    Icon: { control: false },
    className: { control: "text" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  Icon: FaApplePay,
  className:
    "bg-black text-white hover:bg-blue-600 font-bold rounded-lg py-2 px-4",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  Icon: FaApplePay,
  className:
    "bg-black text-white hover:bg-blue-600 font-bold rounded-lg py-2 px-4",
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: "Button without Icon",
  className:
    "bg-black text-white hover:bg-blue-600 font-bold rounded-lg py-2 px-4",
};
