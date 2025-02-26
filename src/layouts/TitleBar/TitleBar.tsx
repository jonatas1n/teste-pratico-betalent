import { StyledTitleBar } from "./TitleBar.styles";
import { Heading } from "../../components/Heading";
import { Search } from "../../components/Search";
import { Container } from "../../components/Container";

type TitleBarProps = {
  title: string;
  searchValue: string;
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TitleBar = ({
  title,
  searchValue,
  setSearchValue,
}: TitleBarProps) => {
  return (
    <Container>
      <StyledTitleBar>
        <Heading value={title} />
        <Search value={searchValue} onChange={setSearchValue} />
      </StyledTitleBar>
    </Container>
  );
};
