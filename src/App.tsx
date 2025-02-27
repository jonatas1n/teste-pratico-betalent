import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { useState } from "react";
import { Logo } from "./components/Logo";
import { Grid } from "./components/Grid";
import { ContentTable } from "./layouts/ContentTable/ContentTable";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target?.value);
  };

  return (
    <Grid>
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
      <ContentTable />
    </Grid>
  );
}

export default App;
