import styled from "styled-components";
import { FaSpinner } from "react-icons/fa"

export const StyledSpinner = styled(FaSpinner)`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  animation: spin 1s linear infinite;
`;