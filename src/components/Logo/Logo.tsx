import logoImg from "../../assets/Logo.svg";
import { StyledLogo } from "./Logo.styles";

export const Logo = () => {
  return (
    <StyledLogo
      src={logoImg}
      initial={{ opacity: 0, translateX: 16 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      alt="Logo"
    />
  );
};
