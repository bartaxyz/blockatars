import { useMemo } from "react";
import { initSeedValues } from "../utils/initSeedValues";

export const useSeedRandom = (seed: string) => {
  return useMemo(() => {
    const { seedValues } = initSeedValues(seed);

    const shift = () => {
      const t = seedValues[0] ^ (seedValues[0] << 11);

      seedValues[0] = seedValues[1];
      seedValues[1] = seedValues[2];
      seedValues[2] = seedValues[3];
      seedValues[3] = seedValues[3] ^ (seedValues[3] >> 19) ^ t ^ (t >> 8);

      return (seedValues[3] >>> 0) / ((1 << 31) >>> 0);
    };

    return { seedValues, shift };
  }, [seed]);
};
