import { useMemo } from "react";
import { useSeedRandom } from "./useSeedRandom";

interface UseSeedColorReturnType {
  backgroundColor: string;
  color1: string;
  color2: string;
}

export const useSeedColor = (seed: string): UseSeedColorReturnType => {
  const { shift } = useSeedRandom(seed);

  return useMemo(() => {
    const createColor = () => {
      // saturation is the whole color spectrum
      const h = Math.floor(shift() * 360) + "deg";

      // saturation goes from 40 to 100, it avoids greyish colors
      const s = (shift() * 60 + 40).toFixed(1) + "%";

      // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
      const l = ((shift() + shift() + shift() + shift()) * 25).toFixed(1) + "%";

      return "hsl(" + h + ", " + s + ", " + l + ")";
    };

    return {
      backgroundColor: createColor(),
      color1: createColor(),
      color2: createColor(),
    };
  }, [seed]);
};
