import styled from "styled-components";

export const StyledSearch = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-betweeen;
  padding: .5rem;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: .5rem;
  color: #9e9e9e;

  input {
    border: none;
    width: 100%;
  }

  .icon {
    color: #dfdfdf;
  }
`;
