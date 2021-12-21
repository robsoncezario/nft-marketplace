import React from "react";
import Dropzone from "react-dropzone";

import {
  Container,
  Button,
  Label,
  PreviewContainer,
  Preview,
  Name,
  FileSize,
  Trashcan,
} from "./styles";

export default function Upload({ file, onUpload, onDiscard }) {
  const getMessage = (isDragActive, isDragReject) => {
    switch (true) {
      case isDragReject === true:
        return "Only .jpg, .png";
      case isDragActive === true:
        return "Nice :) Now drop your NFT here";
      default:
        return "Drag your NFT file here...";
    }
  };

  if (file) {
    return (
      <Container>
        <PreviewContainer>
          <Preview src={file.preview} />
          <Trashcan className="fas fa-trash-alt" onClick={onDiscard} />
        </PreviewContainer>

        <Name>{file.name}</Name>
        <FileSize>{file.readableSize}</FileSize>
      </Container>
    );
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload} multiple={false}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Container
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          <Button
            className="fal fa-arrow-to-top"
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          />
          <Label isDragActive={isDragActive} isDragReject={isDragReject}>
            {getMessage(isDragActive, isDragReject)}
          </Label>
        </Container>
      )}
    </Dropzone>
  );
}
