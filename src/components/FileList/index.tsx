import React from "react";
import { MdMoodBad } from "react-icons/md";
import { useFiles } from "../../context/FileContext";
import { IFile } from "../../context/FileContext";
import { FileItem } from "./FileItem";

import { Container } from "./styles";

const FileList = () => {
  const { uploadedFiles: files, deleteFile } = useFiles();

  if (!files.length)
    return (
      <span>
        <MdMoodBad
          style={{ marginLeft: "45%", marginTop: 10 }}
          size={24}
          color="#d5d2d2"
        />
      </span>
    );

  return (
    <Container>
      {files.map((uploadedFile: IFile) => (
        <FileItem uploadedFile={uploadedFile} deleteFile={deleteFile} />
      ))}
    </Container>
  );
};

export default FileList;
