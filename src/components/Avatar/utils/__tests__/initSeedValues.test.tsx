import { initSeedValues } from "../initSeedValues";

describe("initSeedValues", () => {
  it("should return the seed values", () => {
    expect(initSeedValues("0x1234567890")).toEqual({
      seedValues: [47764, 116988, 48789, 49772],
    });
  });
});
