import React from "react";
import JazzIcon from "../JazzIcon/index.jsx";

import {
  Container,
  ImageContainer,
  Image,
  Name,
  FullRow,
  Row,
  JazzIconContainer,
  Favorite,
  Price,
  Crypto,
  Address,
  Description,
} from "./styles";

import ethIcon from "../../assets/images/cryptos/eth_transparent.svg";

export default function Card({
  id,
  token,
  name,
  description,
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

      <Description>{description}</Description>

      <FullRow>
        <Row>
          <JazzIconContainer>
            <JazzIcon size={16} account={creator} />
          </JazzIconContainer>

          <JazzIconContainer style={{ marginLeft: -8 }}>
            <JazzIcon size={16} account={owner} />
          </JazzIconContainer>
        </Row>

        <Row>
          <Price>{new Intl.NumberFormat("en-US").format(price)}</Price>
          <Crypto src={ethIcon} />
        </Row>
      </FullRow>
    </Container>
  );
}
