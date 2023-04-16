import { Meta, StoryObj } from "@storybook/react";
import React, { FC } from "react";

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

const StylisedAvatar: FC<Partial<AvatarProps> & { label: string }> = ({
  label,
  ...props
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
    }}
  >
    <div
      style={{
        position: "relative",
        borderRadius: 4,
        boxShadow: " 0 1px 2px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 4,
          boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Avatar
        seed="0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990"
        size={32}
        style={{
          display: "block",
        }}
        {...props}
      />
    </div>

    <span
      style={{
        font: "normal normal 400 14px/20px monospace",
      }}
    >
      {label.toLowerCase()}
    </span>
  </div>
);

interface StylisedAvatarsProps {
  seeds: string[];
}
const StylisedAvatars: FC<StylisedAvatarsProps> = ({ seeds }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    {seeds.map((seed) => (
      <StylisedAvatar label={seed} seed={seed} />
    ))}
  </div>
);

export const Stylised: StoryObj<typeof StylisedAvatars> = {
  render: (props: StylisedAvatarsProps) => <StylisedAvatars {...props} />,
  args: {
    seeds: [
      "0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990",
      "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      "0x4c12a97f83036ef395325d7c7a2251ca43df0545",
      "0xA06C2B67e7435cE25a5969e49983ec3304D8e787"
    ],
  },
};
