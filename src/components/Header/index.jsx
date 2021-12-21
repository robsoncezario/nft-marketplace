import React from "react";
import ConnectWallet from "../ConnectWallet/index.jsx";
import Logo from "../Logo/index.jsx";
import MintButton from "../MintButton/index.jsx";
import Navbar from "../Navbar/index.jsx";
import MobileNavbar from "../MobileNavbar/index.jsx";

import { Container, Row } from "./styles";

export default function Header() {
  return (
    <Container>
      <Row>
        <Logo />
        <Navbar />
      </Row>

      <Row>
        <MintButton />
        <ConnectWallet />
        <MobileNavbar />
      </Row>
    </Container>
  );
}
