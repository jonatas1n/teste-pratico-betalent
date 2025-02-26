import { Header } from "./componets/Header";
import { Container } from "./componets/Container";
import { TitleBar } from "./componets/TitleBar/TitleBar";
import { Title } from "./componets/Title";
import { Search } from "./componets/Search";
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
      <Container>
        <TitleBar>
          <Title title="Funcionários" />
          <Search
            value={searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target?.value)
            }
          />
        </TitleBar>
      </Container>
    </Body>
  );
}

export default App;
