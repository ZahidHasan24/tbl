import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../components/ui/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  className: "text-white py-2",
};

export const Secondary: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);
Secondary.args = {
  isPrimary: false,
  className: "text-white py-2",
};

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);
Disabled.args = {
  disabled: true,
  className: "text-white py-2",
};
