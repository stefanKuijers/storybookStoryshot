import React from "react";
import { Props, State } from "./Dropdown.interfaces";

import classnames from "classnames";
import { Popover, PopoverBody } from "reactstrap";

import { Icon } from "../../atoms";

import "./Dropdown.scss";

export default class Dropdown extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      popoverOpen: false
    };
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  render() {
    const {
      id,
      content,
      dropdownItems,
      placement = "bottom",
      containerClassName = "",
      className = "",
      showArrow = false,
      openOnHover = false,
      ...rest
    } = this.props;
    const { popoverOpen } = this.state;

    let dropdownProps: object = {
      className: classnames("Dropdown", { "Dropdown--open": popoverOpen }, containerClassName)
    };
    if (openOnHover) {
      dropdownProps = {
        ...dropdownProps,
        onMouseEnter: this.toggle,
        onMouseLeave: this.toggle
      };
    }

    return (
      <div
        className={classnames(
          "Dropdown tclass-dropdown",
          { "Dropdown--open": popoverOpen },
          containerClassName
        )}
        {...dropdownProps}
      >
        <a id={id} onClick={this.toggle} className={"Dropdown__link"}>
          <span className="Dropdown__title">{content}</span>
          {showArrow && <Icon icon={"downarrow"} className={"DropdownIcon"} />}
        </a>
        {popoverOpen && (
          <Popover
            placement={placement}
            isOpen={popoverOpen}
            target={id}
            toggle={this.toggle}
            className={classnames(
              "Dropdown__content Dropdown__content--triangle-left Dropdown__content--no-border",
              "tclass-dropdown-popover",
              className
            )}
            {...rest}
          >
            <PopoverBody className="Dropdown__body">
              {dropdownItems.map((dropdownItem: any, index: number) => {
                const options = { ...dropdownItem.options };

                options.onClick = () => {
                  this.toggle();

                  if ("onClick" in dropdownItem.options) {
                    dropdownItem.options.onClick();
                  }
                };

                return React.createElement(
                  dropdownItem.type,
                  { key: index, ...options },
                  dropdownItem.children
                );
              })}
            </PopoverBody>
          </Popover>
        )}
      </div>
    );
  }
}
