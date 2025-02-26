import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px #00000033;
  border-spacing: 0;

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

  tbody {
    border-spacing: 1px;

    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray["5"]};
    }

    td {
      padding: 1rem;
    }
  }
`;
