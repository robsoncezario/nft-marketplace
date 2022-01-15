import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import fileSize from "filesize";

import Upload from "../Upload/index.jsx";

import {
  Container,
  Header,
  Close,
  Button,
  Input,
  TextArea,
  FeeContainer,
  Row,
  Icon,
  Price,
} from "./styles";
import CollectibleService from "../../services/CollectibleService/index.js";

import NFT from "../../../build/contracts/NFT.json";
import Marketplace from "../../../build/contracts/Marketplace.json";
import ToastyService from "../../services/ToastyService/index.js";

import ethIcon from "../../assets/images/cryptos/eth_transparent.svg";

export default function MintModal({ onClose }) {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState();

  const { library, account } = useWeb3React();

  const clearEverything = () => {
    if (library) {
      async function getListingFeeAsync() {
        const marketplaceContract = new library.eth.Contract(
          Marketplace.abi,
          process.env.MARKETPLACE_CONTRACT_ADDRESS
        );
        const wei = await marketplaceContract.methods.getFee().call();

        setFee(library.utils.fromWei(wei, "ether"));
      }

      getListingFeeAsync();
    }

    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  };

  useEffect(clearEverything, [library]);

  const handleUpload = (fileList) => {
    const lastFile = fileList[0];
    const data = {
      file: lastFile,
      name: lastFile.name,
      readableSize: fileSize(lastFile.size),
      preview: URL.createObjectURL(lastFile),
      progress: 0,
      uploaded: false,
    };

    setFile(data);
  };

  const handleDiscard = () => {
    URL.revokeObjectURL(file.preview);
    setFile();
  };

  const handleSubmit = () => {
    if (price == "" || parseFloat(price) == 0) {
      ToastyService.error("Please, fill the price field");
      return;
    }

    async function mintAsync() {
      try {
        const response = await CollectibleService.upload({
          file: file.file,
          name,
          description,
        });
        const data = response.data;

        const nftContract = new library.eth.Contract(
          NFT.abi,
          process.env.NFT_CONTRACT_ADDRESS
        );

        const transaction = await nftContract.methods
          .mint(data.collectible.id)
          .send({ from: account });
        const tokenId = transaction.events.Transfer.returnValues.tokenId;

        console.log(transaction);

        const marketplaceContract = new library.eth.Contract(
          Marketplace.abi,
          process.env.MARKETPLACE_CONTRACT_ADDRESS
        );

        const ethPrice = library.utils.toWei(price, "ether");

        const listingPrice = await marketplaceContract.methods.getFee().call();
        const marketTransaction = await marketplaceContract.methods
          .create(tokenId, ethPrice)
          .send({ from: account, value: listingPrice });

        //location.reload();
      } catch (e) {
        ToastyService.error(e.message, 1000000);
      }
    }

    mintAsync();
  };

  const handleNameInput = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    event.persist();
    setDescription(event.target.value);
  };

  const handlePriceInput = (event) => {
    const value = event.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1");
    setPrice(value);
  };

  return (
    <Container>
      <Header>
        <h4>Mint your own NFT</h4>
        <Close className="fas fa-times" onClick={onClose} />
      </Header>

      <Upload onUpload={handleUpload} file={file} onDiscard={handleDiscard} />

      <Input
        placeholder={"Name"}
        spellCheck={false}
        maxLength={64}
        onChange={handleNameInput}
        value={name}
      />
      <TextArea
        placeholder="Description"
        rows={7}
        spellCheck={false}
        maxLength={256}
        onChange={handleDescriptionInput}
        value={description}
      ></TextArea>

      <Input
        placeholder={"Price"}
        spellCheck={false}
        maxLength={64}
        onChange={handlePriceInput}
        value={price}
      />

      <FeeContainer>
        <Price>Fee</Price>

        <Row>
          <Icon src={ethIcon} />
          <Price>{fee}</Price>
        </Row>
      </FeeContainer>

      <Button onClick={handleSubmit}>Mint</Button>
    </Container>
  );
}
