import React from "react";
import { Props } from "./DropdownItemNavLink.interfaces";

import { Icon } from "../../atoms";

import { NavLink } from "react-router-dom";

import "./DropdownItemNavLink.scss";

export default class DropdownItem extends React.PureComponent<Props> {
  render() {
    const { icon = null, to, onClick, children } = this.props;

    // TODO: refactor to at least extend DropdownItem. But probable dropdownItem should be refactored
    // to take care of this case as well. Current approach leads to architectual mistakes like reuseing
    // BEM classes out of scope.
    // TODO: DropdownNavLink: consider deprication
    return (
      <div className="DropdownItem tclass-dropdownItem">
        <NavLink to={to} onClick={onClick}>
          {icon !== null ? <Icon icon={icon} className="DropdownItem__icon" size="medium" /> : null}
          <span className={"DropdownItem__link"}>{children}</span>
        </NavLink>
      </div>
    );
  }
}
