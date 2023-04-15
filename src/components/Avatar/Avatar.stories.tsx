import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "ReactComponentLibrary/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Base = Template.bind({});
Base.args = {
  size: 80,
};

export const Animated = Template.bind({});
Animated.args = {
  size: 80,
};
