import React, { FC } from "react";

export interface AvatarProps {
  /**
   * A seed for the avatar (e.g. a wallet address, user id, etc.)
   */
  seed: string;

  /**
   * The display size of the avatar
   */
  size: number;
}

export const Avatar: FC<AvatarProps> = ({ seed, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
        </filter>
        {/* <filter id="noise-all">
          <feTurbulence baseFrequency="1" type="fractalNoise" result="noisy" />
          <feColorMatrix
            type="saturate"
            values="0"
            result="rgba(0, 0, 0, 0.1)"
          />
          <feBlend
            mode="multiply"
            in="rgba(0, 0, 0, 0.1)"
            in2="SourceGraphic"
          />
        </filter> */}
      </defs>

      <g filter="url(#noise-all)">
        <rect width="100%" height="100%" fill="#fAfAf0" filter="url(#noise)" />
        <g filter="url(#blur)">
          <rect width="100%" height="100%" fill-opacity="0" />
          <circle cx="40" cy="130" r="80" fill="#FF6F00" />
          <circle cx="140" cy="70" r="80" fill="#FFC107" />
        </g>
      </g>
    </svg>
  );
};
