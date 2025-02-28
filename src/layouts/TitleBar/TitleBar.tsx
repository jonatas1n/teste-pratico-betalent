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
      <StyledTitleBar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Heading value={title} />
        <Search />
      </StyledTitleBar>
    </Container>
  );
};
