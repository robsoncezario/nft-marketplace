import React from "react";
import { Blockie } from "react-identicon-variety-pack";

import {
  Container,
  ImageContainer,
  Image,
  Name,
  FullRow,
  Row,
  BlockieContainer,
  Favorite,
  Price,
  Crypto,
  Address,
} from "./styles";

import ethIcon from "../../assets/images/cryptos/eth_transparent.svg";

export default function Card({
  id,
  token,
  name,
  url,
  price,
  creator,
  owner,
  favorite,
}) {
  return (
    <Container>
      <ImageContainer>
        <Image src={url} />
        <Favorite className="fas fa-heart" favorite={favorite} />
      </ImageContainer>

      <FullRow>
        <Name>{name}</Name>
      </FullRow>

      <FullRow>
        <Row>
          <BlockieContainer>
            <Blockie size={24} seed={creator} circle={true} />
          </BlockieContainer>
          <BlockieContainer style={{ marginLeft: -8 }}>
            <Blockie size={24} seed={owner} circle={true} />
          </BlockieContainer>
        </Row>

        <Row>
          <Price>{new Intl.NumberFormat("en-US").format(price)}</Price>
          <Crypto src={ethIcon} />
        </Row>
      </FullRow>
    </Container>
  );
}
