// write jest test for useSeedColor hook

import { renderHook } from "@testing-library/react";
import { useSeedColor } from "../useSeedColor";

describe("useSeedColor", () => {
  test("returns a color", () => {
    const returnValue = renderHook(() =>
      useSeedColor("0xe6cc08e94d44184e5f412e52f9f1866b6d7c8990")
    );

    expect(returnValue.result.current).toMatchSnapshot();
  });
});
