import styled from "styled-components";

export const StyledSearch = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 0.5rem;
  color: #9e9e9e;

  input {
    padding: 0.5rem;
    border: none;
    width: 100%;
    font-family: Helvetica, sans-serif;
  }

  .icon {
    display: grid;
    align-items: center;
    color: #dfdfdf;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;
