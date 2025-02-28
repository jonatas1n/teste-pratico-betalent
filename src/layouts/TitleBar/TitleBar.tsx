import { StyledTitleBar } from "./TitleBar.styles";
import { Heading } from "../../components/Heading";
import { Search } from "../../components/Search";
import { Container } from "../../components/Container";

type TitleBarProps = {
  title: string;
};

export const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <Container>
      <StyledTitleBar>
        <Heading value={title} />
        <Search />
      </StyledTitleBar>
    </Container>
  );
};
