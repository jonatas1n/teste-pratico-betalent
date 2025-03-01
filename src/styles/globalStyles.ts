import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
    font-family: "Helvetica Neue";
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.gray["0"]};
    color: ${({ theme }) => theme.colors.text};
  }
`;
