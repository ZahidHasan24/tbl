import { Meta, StoryFn } from "@storybook/react";
import Navbar, { NavbarProps } from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: "Home", link: "/", align: "left" },
    { label: "About", link: "/about", align: "left", hasSubmenu: true },
    { label: "Contact", link: "/contact", align: "left" },
    { label: "Services", link: "/services", align: "right", button: true },
  ],
};
