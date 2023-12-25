import { Meta, StoryFn } from "@storybook/react";
import { ReactComponent as GroupOneIcon } from "../assets/img/group-1.svg";
import { ReactComponent as GroupTwoIcon } from "../assets/img/group-2.svg";
import HomeGridImgActive from "../assets/img/home-grid-bg-active.png";
import HomeGridImg from "../assets/img/home-grid-bg-alt.png";
import Card, { CardProps } from "../components/ui/Card";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => (
  <div className="flex">
    <div className="w-1/3">
      <Card {...args} />
    </div>
  </div>
);

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  icon: <GroupOneIcon />,
  imgSrc: HomeGridImgActive,
  title: "Card Title",
  description: "This is an active card.",
  gradientBg: "linear-gradient(91deg, #3F68FF 0%, #CD63FF 100%)",
};

export const Inactive = Template.bind({});
Inactive.args = {
  isActive: false,
  icon: <GroupTwoIcon />,
  imgSrc: HomeGridImg,
  title: "Card Title",
  description: "This is an inactive card.",
  gradientBg: "white",
};
