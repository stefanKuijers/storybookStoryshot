import React from "react";
import renderer from "react-test-renderer";

import { Avatar } from "../../../molecules";

describe("Avatar", () => {
  describe("with property name", () => {
    const Renderer = renderer.create(<Avatar name={"John Doe"} />);
    const Component = Renderer.root;

    it("matches the snapshot", () => {
      expect(Renderer.toJSON()).toMatchSnapshot();
    });

    it("should contain abreviated initials", () => {
      expect(Component.findByProps({ className: "Avatar__label" }).children).toEqual(["JD"]);
    });
  });

  describe("with additional information", () => {
    const Renderer = renderer.create(
      <Avatar name={"John Doe"} userName={"john88"} emailAddress={"john88@mail.com"} />
    );
    const Component = Renderer.root;

    it("matches the snapshot", () => {
      expect(Renderer.toJSON()).toMatchSnapshot();
    });

    it("should contain a popover rendered by DropDown", () => {
      expect(Component.findByProps({ className: "AvatarDropdown" }).children.length).toEqual(1);
    });
  });
});
