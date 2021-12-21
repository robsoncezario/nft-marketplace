import React from "react";
import ConnectWallet from "../ConnectWallet/index.jsx";
import Logo from "../Logo/index.jsx";
import MintButton from "../MintButton/index.jsx";
import { Container, Row } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo />

      <Row>
        <MintButton />
        <ConnectWallet />
      </Row>
    </Container>
  );
}
