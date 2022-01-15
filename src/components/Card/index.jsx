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
  Price,
  Crypto,
  Button,
  Description,
  OwnerRow,
} from "./styles";

import ethIcon from "../../assets/images/cryptos/eth_transparent.svg";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const handleBuy = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    history.push("/details/" + token);
  };

  return (
    <Container href={"/details/" + token} onClick={handleClick}>
      <ImageContainer>
        <Image src={url} />

        <OwnerRow>
          <JazzIconContainer>
            <JazzIcon size={16} account={creator} />
          </JazzIconContainer>

          <JazzIconContainer style={{ marginLeft: -8 }}>
            <JazzIcon size={16} account={owner} />
          </JazzIconContainer>
        </OwnerRow>
      </ImageContainer>

      <FullRow>
        <Name>{name}</Name>
      </FullRow>

      <Description>{description}</Description>

      <FullRow>
        <Row>
          <Crypto src={ethIcon} />
          <Price>{new Intl.NumberFormat("en-US").format(price)}</Price>
        </Row>
        <Button onClick={handleBuy}>Buy now</Button>
      </FullRow>
    </Container>
  );
}
