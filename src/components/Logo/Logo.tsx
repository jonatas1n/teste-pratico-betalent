import logoImg from "../../assets/Logo.svg";
import { StyledLogo } from "./Logo.styles";

export const Logo = () => {
  return (
    <StyledLogo src={logoImg} alt="Logo" />
  )
}