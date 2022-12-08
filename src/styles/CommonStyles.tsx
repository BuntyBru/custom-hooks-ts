import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 300px;
  margin: 2rem;
  padding: 10px;
  background: #21242ce8;

  h3 {
    font-size: 18px;
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  background: grey;
  padding: 6px;
  font-size: 13px;
  font-weight: 900;
  border-radius: 10px;
  text-transform: uppercase;
  outline: none;
`;
