import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [searchValue, setSearchValue] = useState("");

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
    </Grid>
  );
}

export default App;
