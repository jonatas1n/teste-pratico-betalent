import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 2rem;
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
  .expand-header {
    display: none;
    min-width: 0;
    width: 4rem;
  }

  @media screen and (max-width: 860px) {
    .other-header {
      display: none;
    }

    .expand-header {
      display: table-cell;
    }
  }
`;
