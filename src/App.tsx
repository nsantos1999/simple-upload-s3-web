import React from "react";
import GlobalStyle from "./styles/global";

import { Container, Content } from "./styles";
import { FileProvider } from "./context/FileContext";
import Upload from "./components/Upload";
import FileList from "./components/FileList";

function App() {
  return (
    <FileProvider>
      <Container>
        <Content>
          <Upload />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    </FileProvider>
  );
}

export default App;
