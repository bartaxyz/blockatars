import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Blockatar/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: ({ ...props }: Partial<AvatarProps>) => (
    <Avatar
      seed="0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990"
      size={160}
      {...props}
    />
  ),
  args: {
    seed: "0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990",
    size: 160,
  },
};

export const Stylised: Story = {
  render: ({ ...props }: Partial<AvatarProps>) => (
    <div
      style={{
        borderRadius: 4,
        border: "1px solid #eee",
      }}
    >
      <Avatar
        seed="0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990"
        size={160}
        {...props}
      />
    </div>
  ),
  args: {
    seed: "0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990",
    size: 160,
  },
};
