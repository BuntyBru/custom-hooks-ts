import React from "react";
import styled from "styled-components";

import UseToggleComponent from "./components/UseToggleComponent";
import UseSubmitHookComponent from "./components/UseSubmitHookComponent";

const StyledParentContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
`;

function App() {
  return (
    <StyledParentContainer>
      <UseToggleComponent />
      <UseSubmitHookComponent />
    </StyledParentContainer>
  );
}

export default App;
