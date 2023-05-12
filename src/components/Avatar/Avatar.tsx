import React, { FC, useMemo } from "react";
import { lighten } from "polished";
import { useSeedColor } from "./hooks/useSeedColor";
import { useSeedRandom } from "./hooks/useSeedRandom";
import { Noise } from "../Noise/Noise";

export interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  /**
   * A seed for the avatar (e.g. a wallet address, user id, etc.)
   */
  seed: string;

  /**
   * The display size of the avatar
   */
  size: number;

  /**
   * Disable automatic lower casing of the seed
   */
  disableLowerCase?: boolean;

  /**
   * Disable noise
   */
  disableNoise?: boolean;

  /**
   * Disable blur (for development & debugging purposes)
   */
  disableBlur?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
  seed,
  size,
  disableLowerCase = false,
  disableNoise = false,
  disableBlur = false,
  ...props
}) => {
  const transformedSeed = disableLowerCase ? seed : seed.toLowerCase();
  const { shift } = useSeedRandom(transformedSeed);
  const { backgroundColor, color1, color2 } = useSeedColor(transformedSeed);

  const { shape1, shape2 } = useMemo(() => {
    const shape1 = shift();
    const shape2 = shift();

    const boundingBox = 200 / Math.sqrt(2);

    const shape1CenterX =
      (boundingBox / 2) * (1 + Math.cos(shape1 * 2 * Math.PI));
    const shape1CenterY =
      (boundingBox / 2) * (1 + Math.sin(shape1 * 2 * Math.PI));
    const shape1Radius = 80 + 20 * shift();

    const shape2CenterX =
      (boundingBox / 2) * (1 + Math.cos(shape2 * 2 * Math.PI));
    const shape2CenterY =
      (boundingBox / 2) * (1 + Math.sin(shape2 * 2 * Math.PI));
    const shape2Radius = 80 + 20 * shift();

    return {
      shape1: (
        <circle
          cx={shape1CenterX}
          cy={shape1CenterY}
          r={shape1Radius}
          fill={lighten(0.1, color1)}
        />
      ),
      shape2: (
        <circle
          cx={shape2CenterX}
          cy={shape2CenterY}
          r={shape2Radius}
          fill={lighten(0.1, color2)}
        />
      ),
    };
  }, [color1, color2, shift]);

  const scale = size / 200;

  return (
    <svg
      width={size}
      height={size}
      // viewBox="0 0 200 200"
      {...props}
      style={{
        /**
         * Keeping the noise image texture filter pixelated
         */
        imageRendering: "pixelated",
        ...props.style,
      }}
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
      </defs>

      <g transform={`scale(${scale})`}>
        <rect
          width={size / scale}
          height={size / scale}
          fill={lighten(0.25, backgroundColor)}
        />
      </g>

      <g transform={`scale(${scale})`}>
        <g filter={!disableBlur ? "url(#blur)" : undefined}>
          <rect width="100%" height="100%" fillOpacity="0" />
          {shape1}
          {shape2}
        </g>
      </g>

      {!disableNoise && <Noise />}
    </svg>
  );
};
