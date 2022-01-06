import React from "react";
import Header from "../Header/index.jsx";
import { Container, Content } from "./styles";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
