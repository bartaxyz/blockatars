import React from "react";
import { render } from "@testing-library/react";

import { Avatar } from "../Avatar";

describe("Avatar", () => {
  test("renders the Avatar component", () => {
    const { asFragment } = render(<Avatar seed="0x1234567890" size={24} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
