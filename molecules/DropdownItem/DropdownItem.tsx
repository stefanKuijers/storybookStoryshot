import React from "react";

import { Icon } from "../../atoms";

import { Props } from "./DropdownItem.interfaces";
import "./DropdownItem.scss";

export default class DropdownItem extends React.PureComponent<Props> {
  getSeparator() {
    return <div className="DropdownItem__separator" />;
  }
  getInnerContent() {
    const { icon = null, children } = this.props;
    return (
      <>
        {icon !== null && <Icon icon={icon} className="DropdownItem__icon" />}
        <span className="DropdownItem__content">{children}</span>
      </>
    );
  }
  getContent() {
    const { onClick, doesNeedATag = true } = this.props;
    if (doesNeedATag) {
      return <a onClick={onClick}>{this.getInnerContent()}</a>;
    } else {
      return <div>{this.getInnerContent()}</div>;
    }
  }
  render() {
    const { isSeparator = false } = this.props;

    // TODO: Consider refactor for inline if statement for render instead of function calls
    return (
      <div className="DropdownItem tclass-dropdownItem">
        {isSeparator ? this.getSeparator() : this.getContent()}
      </div>
    );
  }
}
