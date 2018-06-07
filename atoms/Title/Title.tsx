import React from "react";
import { Props } from "./Title.interfaces";

export default class Title extends React.PureComponent<Props> {
  render() {
    const { title, className, type = "h1" } = this.props;

    return React.createElement(
      type,
      {
        className: `${className} tclass-title`
      },
      title
    );
  }
}
