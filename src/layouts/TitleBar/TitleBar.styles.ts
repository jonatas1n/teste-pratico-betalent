import styled from "styled-components";

export const StyledTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: .5rem;

  @media screen and (max-width: 860px) {
    text-align: left;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
`