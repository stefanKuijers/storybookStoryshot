import React from "react";

import { Props } from "./Branding.interfaces";
import "./Branding.scss";

export default class Branding extends React.PureComponent<Props> {
  render() {
    const { logo, tagline = "" } = this.props;

    return (
      <div className="Branding tclass-branding">
        {logo && <img className="Branding__logo" src={logo} />}
        <b className="Branding__text">{tagline}</b>
      </div>
    );
  }
}
