import React from "react";
import { Row, Image, Name } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Logo({ size = 36 }) {
  return (
    <Row>
      <Image src={logo} size={size} />
      <Name size={size}>Coffe</Name>
    </Row>
  );
}
