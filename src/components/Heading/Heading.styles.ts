import styled from "styled-components";

export const HeadingStyles = styled.div<{ variant?: "h1" | "h2" | "h3" }>`
  font-weight: ${props => props.variant === "h3" ? "400" : "500"};
  font-size: ${props => props.variant !== "h1" ? "1rem" : "1.25rem"};
  font-family: Helvetica;
`;
