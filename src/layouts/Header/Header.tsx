import { Container } from "../../components/Container"
import { Logo } from "../../components/Logo"
import { StyledHeader } from "./Header.styles"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
      </Container>
    </StyledHeader>
  )
};
