import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fileSize from "filesize";

import Upload from "../Upload/index.jsx";

import { Container, Header, Close, Button, Input, TextArea } from "./styles";
import { requestMintToken } from "../../store/mint/actions.js";

export default function MintModal({ onClose }) {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const clearEverything = () => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  };

  useEffect(clearEverything, []);

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
    dispatch(requestMintToken(file.file, name, description));
  };

  const handleNameInput = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    event.persist();
    setDescription(event.target.value);
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
        onInput={handleNameInput}
        value={name}
      />
      <TextArea
        placeholder="Description"
        rows={7}
        spellCheck={false}
        maxLength={256}
        onInput={handleDescriptionInput}
        value={description}
      ></TextArea>

      <Button onClick={handleSubmit}>Mint</Button>
    </Container>
  );
}
