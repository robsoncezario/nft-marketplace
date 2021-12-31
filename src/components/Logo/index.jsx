import React from "react";
import { Row, Icon, Name } from "./styles";

export default function Logo({ size = 36, onlyIcon = false }) {
  return (
    <Row>
      <Icon className="fad fa-coffee-togo" size={size} />
      {!onlyIcon && <Name size={size}>Coffe</Name>}
    </Row>
  );
}
