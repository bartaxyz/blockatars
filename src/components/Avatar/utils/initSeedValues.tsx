export const initSeedValues = (seed: string) => {
  const seedValues = new Array(4);

  seedValues.fill(0);

  for (let i = 0; i < seed.length; i++) {
    seedValues[i % 4] =
      (seedValues[i % 4] << 5) - seedValues[i % 4] + seed.charCodeAt(i);
  }

  return { seedValues };
};
