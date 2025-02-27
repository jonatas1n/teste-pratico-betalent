import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px #00000033;
  border-collapse: collapse;

  thead {
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.blue.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem 0.5rem 0 0;

    th {
      text-align: left;
      padding: 1rem;
    }
  }
`;
