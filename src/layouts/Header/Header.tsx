import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { StyledHeader } from "./Header.styles";

export const Header = () => {
  return (
    <StyledHeader
      initial={{ opacity: 0, translateY: -16 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Container>
        <Logo />
      </Container>
    </StyledHeader>
  );
};
