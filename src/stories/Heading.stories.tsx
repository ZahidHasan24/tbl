import { Meta, StoryFn } from "@storybook/react";
import { H1, H2, H3, H4, H5, H6, HeadingProps } from "../components/ui/Heading";

export default {
  title: "Headings",
  component: H1,
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => (
  <H1 {...args}>Your Heading Text</H1>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  className: "text-dark py-2",
};

export const Heading2: StoryFn<HeadingProps> = (args) => (
  <H2 {...args}>Your Heading Text</H2>
);
Heading2.args = {
  className: "text-dark py-2",
};

export const Heading3: StoryFn<HeadingProps> = (args) => (
  <H3 {...args}>Your Heading Text</H3>
);
Heading3.args = {
  className: "text-dark py-2",
};

export const Heading4: StoryFn<HeadingProps> = (args) => (
  <H4 {...args}>Your Heading Text</H4>
);
Heading4.args = {
  className: "text-dark",
};

export const Heading5: StoryFn<HeadingProps> = (args) => (
  <H5 {...args}>Your Heading Text</H5>
);
Heading5.args = {
  className: "text-dark",
};

export const Heading6: StoryFn<HeadingProps> = (args) => (
  <H6 {...args}>Your Heading Text</H6>
);
Heading6.args = {
  className: "text-dark",
};
