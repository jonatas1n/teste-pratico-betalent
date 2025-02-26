import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { useState } from "react";
import { Body } from "./componets/Body";
import { Logo } from "./componets/Logo";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Body>
      <Header>
        <Container>
          <Logo />
        </Container>
      </Header>
      <TitleBar
        title="Funcionários"
        searchValue={searchValue}
        setSearchValue={handleSearchChange}
      />
  );
}

export default App;
