import classnames from "classnames";
import initials from "initials";
import React from "react";

import { Dropdown, DropdownItem } from "../../molecules";
import { DropdownItem as DropdownItemInterface } from "../../molecules/Dropdown/Dropdown.interfaces";

import { Props } from "./Avatar.interfaces";
import "./Avatar.scss";

export default class Avatar extends React.PureComponent<Props> {
  createDropdownContent = (): DropdownItemInterface[] => {
    const { name, emailAddress = null, userName } = this.props;

    return [
      {
        type: DropdownItem,
        children: (
          <article className="AvatarInfo tclass-avatar-info">
            <section className="AvatarInfo__left">{this.renderSimpleAvatar()}</section>
            <section className="AvatarInfo__right">
              <div className="AvatarInfo__names">
                {userName}
                <span className="AvatarInfo__userName">{"(" + name + ")"}</span>
              </div>
              <a href={`mailto:${emailAddress}`} target="_top" className="AvatarInfo__email">
                {emailAddress}
              </a>
            </section>
          </article>
        ),
        options: {
          doesNeedATag: false
        }
      }
    ];
  };

  renderAvatarWithInfo = () => {
    const { containerClassName, userName } = this.props;

    return (
      <Dropdown
        id={userName + "-info"}
        content={this.renderSimpleAvatar()}
        dropdownItems={this.createDropdownContent()}
        placement="top"
        containerClassName={containerClassName}
        className="AvatarDropdown"
        openOnHover
      />
    );
  };

  renderSimpleAvatar = () => {
    const { name, label, className } = this.props;

    return (
      <div className={classnames("Avatar tclass-avatar", className)}>
        <span className="Avatar__label">{label || initials(name)}</span>
      </div>
    );
  };

  render() {
    const { emailAddress = null } = this.props;

    return emailAddress !== null ? this.renderAvatarWithInfo() : this.renderSimpleAvatar();
  }
}
