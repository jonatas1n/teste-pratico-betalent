import styled from "styled-components";
import * as motion from "motion/react-client";

export const StyledTableRow = styled(motion.tr)`
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray["10"]};
  }

  td {
    padding: 1rem;
    vertical-align: middle;
  }

  td:first-child {
    min-width: 0;
    width: 4rem;
  }

  .other-data {
    display: table-cell;
  }

  .expand-icon {
    display: none;
    min-width: 0;
    width: 4rem;
  }

  @media screen and (max-width: 860px) {
    cursor: pointer;

    .other-data {
      display: none;
    }

    .expand-icon {
      display: table-cell;
    }
  }
`;

export const StyledTableRowExpanded = styled(motion.tr)`
  display: none;
  text-align: left;
  transition: 0.35s;
  background-color: ${({ theme }) => theme.colors.gray["0"]};

  table {
    width: 100%;
    padding: 1rem;

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px dashed ${({ theme }) => theme.colors.gray["10"]};
    }

    td {
      text-align: right;
    }
  }

  @media screen and (max-width: 860px) {
    display: table-row;
  }
`;
