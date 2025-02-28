import { Header } from "./layouts/Header";
import { TitleBar } from "./layouts/TitleBar/TitleBar";
import { Grid } from "./components/Grid";
import { ContentTable } from "./layouts/ContentTable";

const TITLE_BAR_TEXT = "Funcionários";

function App() {
  return (
    <Grid>
      <Header />
      <TitleBar
        title={TITLE_BAR_TEXT}
      />
      <ContentTable />
    </Grid>
  );
}

export default App;
