import React from "react";
import renderer from "react-test-renderer";

import { Branding } from "../../../atoms";

describe("Branding", () => {
  it("should match the snapshot", () => {
    const Renderer = renderer.create(
      <Branding
        logo={"https://i.ytimg.com/vi/4yikpWtIFU8/maxresdefault.jpg"}
        tagline={"Tag Line"}
      />
    );

    expect(Renderer.toJSON()).toMatchSnapshot();
  });
});
