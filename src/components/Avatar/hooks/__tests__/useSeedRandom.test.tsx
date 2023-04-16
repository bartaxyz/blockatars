// write jest test for useSeedColor hook

import { renderHook } from "@testing-library/react";
import { useSeedRandom } from "../useSeedRandom";

describe("useSeedColor", () => {
  test("returns a color", () => {
    const returnValue = renderHook(() => useSeedRandom("0x1234567890"));

    expect(returnValue.result.current).toMatchSnapshot();
  });
});
