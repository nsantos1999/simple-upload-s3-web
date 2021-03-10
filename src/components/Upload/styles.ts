import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

type IDropContainer = {
  isDragActive?: boolean;
  isDragReject?: boolean;
};

export const DropContainer = styled.div<IDropContainer>`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;

  ${({ isDragActive }) => isDragActive && dragActive};
  ${({ isDragReject }) => isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

type ITypeMessageColor = {
  type?: "default" | "error" | "success";
};

export const UploadMessage = styled.p<ITypeMessageColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  color: ${({ type }) => messageColors[type || "default"]};
`;
