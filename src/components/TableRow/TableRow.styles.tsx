import styled from "styled-components";
import * as motion from "motion/react-client";

export const StyledTableRow = styled(motion.div)`
  display: contents;
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

  .expand-area {
    display: none;
    text-align: left;
    transition: .35s;
    background-color: ${({ theme }) => theme.colors.gray['0']};

    table {
      width: 100%;

      th, td {
        border-bottom: 1px dashed ${({ theme }) => theme.colors.gray['10']};
      }

      td {
        text-align: right;
      }
    }
  }

  @media screen and (max-width: 860px) {
    cursor: pointer;

    .expand-area {
      display: table-row;
    }

    .other-data {
      display: none;
    }

    .expand-icon {
      display: table-cell;
    }
  }
`;
