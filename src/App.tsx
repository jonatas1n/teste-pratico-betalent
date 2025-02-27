import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { useState } from "react";
import { Grid } from "./components/Grid";

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
    </Grid>
  );
}

export default App;
