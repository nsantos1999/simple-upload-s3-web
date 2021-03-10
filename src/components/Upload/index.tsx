import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFiles } from "../../context/FileContext";
import { DropContainer, UploadMessage } from "./styles";

export default function Upload() {
  const { handleUpload } = useFiles();

  const onDrop = useCallback((files) => {
    handleUpload(files);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: ["image/jpeg", "image/pjpeg", "image/png", "image/gif"],
    onDrop,
  });

  const DragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Arraste imagens aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte as imagens aqui</UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <DropContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <DragMessage />
    </DropContainer>
  );
}
