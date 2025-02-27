import { Header } from "./layouts/Header";
import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { useState } from "react";
import { Grid } from "./components/Grid";
import { ContentTable } from "./layouts/ContentTable/ContentTable";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target?.value);
  };

  return (
    <Grid>
      <Header />
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
