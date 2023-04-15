import { useMemo } from "react";
import seedrandom from "seedrandom";

export const useSeedRandom = (seed: string) => {
  return useMemo(() => {
    return seedrandom(seed);
  }, [seed]);
};
