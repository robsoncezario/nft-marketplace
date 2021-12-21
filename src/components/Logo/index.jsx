import React from "react";
import { Row, Icon, Name } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Logo({ size = 36, onlyIcon = false }) {
  return (
    <Row>
      <Icon className="fad fa-coffee-togo" size={size} />

      {!onlyIcon && <Name size={size}>Coffe</Name>}
    </Row>
  );
}
