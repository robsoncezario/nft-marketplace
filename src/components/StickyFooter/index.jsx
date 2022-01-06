import React from "react";
import ConnectWallet from "../ConnectWallet/index.jsx";
import MintButton from "../MintButton/index.jsx";

import { Wrapper, Container, Spacer } from "./styles";

export default function StickyFooter() {
  return (
    <Wrapper>
      <Container>
        <ConnectWallet />
        <Spacer />
        <MintButton />
      </Container>
    </Wrapper>
  );
}
