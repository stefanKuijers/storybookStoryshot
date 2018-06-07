import React from "react";
import renderer from "react-test-renderer";

import { DropdownItem } from "../../../molecules";
import { t } from "../mocks/util";

describe("DropdownItem", () => {
  it("matches the snapshot", () => {
    const Renderer = renderer.create(
      <DropdownItem isSeparator={false} icon={"fire"}>
        {t("Lorem ipsum")}
      </DropdownItem>
    );

    expect(Renderer.toJSON()).toMatchSnapshot();
  });
});
