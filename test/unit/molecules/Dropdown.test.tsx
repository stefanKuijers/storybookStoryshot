import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Dropdown, DropdownItem } from "../../../molecules";

const items = [
  {
    children: "Item 1",
    type: DropdownItem,
    options: {}
  },
  {
    children: "Item 2",
    type: DropdownItem,
    options: {}
  },
  {
    children: "Item 3",
    type: DropdownItem,
    options: {}
  },
  {
    children: "Item 4",
    type: DropdownItem,
    options: {}
  }
];

describe("Dropdown", () => {
  describe("with property name", () => {
    const Component = (
      <Dropdown
        id="DropdownDefaultId"
        content={"Lorem ipsum"}
        dropdownItems={items}
        placement={"auto"}
        showArrow
      />
    );
    const Renderer = renderer.create(Component);
    const DOM = mount(Component);

    it("matches the snapshot", () => {
      expect(Renderer.toJSON()).toMatchSnapshot();
    });

    it("should open when clicked", () => {
      // mockEl to render this ID to the DOM so that
      // react-strap does not complain.
      const mockEl = document.createElement("div");
      mockEl.setAttribute("id", "DropdownDefaultId");
      document.body.appendChild(mockEl);

      DOM.find(".Dropdown__link").simulate("click");
      expect(DOM.find(".Dropdown--open").length).toEqual(1);
    });
  });
});
