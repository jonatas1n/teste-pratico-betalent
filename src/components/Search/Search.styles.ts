import styled from "styled-components";

export const StyledSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding: .25rem .5rem;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: .5rem;
  color: #9e9e9e;

  input {
    padding: .5rem;
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
