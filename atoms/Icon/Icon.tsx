import classnames from "classnames";
import React from "react";

import { IconProps } from "./Icon.interfaces";
import "./Icon.scss";

const folder = "assets";
export default class Icon extends React.PureComponent<IconProps> {
  constructor(props: IconProps) {
    super(props);
    this.state = { error: null };
  }

  loadSvg = (icon: string, defaultIcon: string) => {
    try {
      return require(`!raw-loader!./${folder}/${icon}.svg`);
    } catch (error) {
      return defaultIcon === ""
        ? require(`!raw-loader!./${folder}/default.svg`)
        : require(`!raw-loader!./${folder}/${defaultIcon}.svg`);
    }
  };

  render() {
    const { className, icon = "", defaultIcon = "", color, size, onClick, ...rest } = this.props;
    const svg = this.loadSvg(icon, defaultIcon);
    return (
      <figure
        className={classnames(
          "Icon",
          "tclass-icon",
          "Icon__" + icon,
          className,
          size ? "Icon__" + size : "",
          color ? "Icon--" + color : "",
          onClick !== undefined ? "Icon__action" : ""
        )}
        onClick={onClick}
        {...rest}
      >
        <span className={"Icon__holder"} dangerouslySetInnerHTML={{ __html: svg }} />
      </figure>
    );
  }
}
