import { boolean, text } from "@storybook/addon-knobs";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Placement } from "reactstrap/lib/Popper";

import { Title } from "../../../atoms";
import { Dropdown, DropdownItem, DropdownItemNavLink } from "../../../molecules";
import { stageStoriesOf, t } from "../utils";

const dropdownItems = [
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

const headerMenuDropdownItems = [
  {
    type: DropdownItemNavLink,
    children: "Active Projects (13)",
    options: {
      to: "/projects/active",
      icon: "active"
    }
  },
  {
    type: DropdownItemNavLink,
    children: "Removed Projects (1)",
    options: {
      to: "/projects/removed",
      icon: "trash"
    }
  },
  {
    type: DropdownItemNavLink,
    children: "Archived Projects (432)",
    options: {
      to: "/projects/archived",
      icon: "archived"
    }
  }
];

const placement: Placement = "auto";

stageStoriesOf("Molecules/Dropdown", "Dropdown")
  .add("Dropdown", () => (
    <Dropdown
      id="DropdownDefaultId"
      content={text("Custom child", "Lorem ipsum")}
      dropdownItems={dropdownItems}
      placement={placement}
      containerClassName={text("Container class name?", "")}
      className={text("Custom class?", "")}
      showArrow={boolean("Show arrow?", false)}
    />
  ))
  .add("Header Dropdown", () => (
    <Router>
      <Dropdown
        id={"headerDropdown"}
        content={<Title className={"HeaderTitle"} type={"h1"} title={t("This stuff")} />}
        dropdownItems={headerMenuDropdownItems}
        showArrow
      />
    </Router>
  ));
