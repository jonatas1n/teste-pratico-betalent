import styled from "styled-components";

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid black;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray["5"]};

  td {
    padding: 1rem;
  }
`;
