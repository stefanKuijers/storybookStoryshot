import { boolean, text } from "@storybook/addon-knobs";
import React from "react";

import { DropdownItem } from "../../../molecules";
import { stageStoriesOf } from "../utils";

stageStoriesOf("Molecules/Dropdown", "DropdownItem").add("DropdownItem", () => (
  <DropdownItem isSeparator={boolean("Is separator?", false)} icon={"fire"} onClick={console.log}>
    {text("Custom child?", "Lorem ipsum")}
  </DropdownItem>
));
