import logoImg from "../../assets/Logo.svg";
import { StyledLogo } from "./Logo.styles";
import * as motion from "motion/react-client";

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 16 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.75 }}
    >
      <StyledLogo src={logoImg} alt="Logo" />
    </motion.div>
  );
};
