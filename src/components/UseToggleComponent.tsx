import React from "react";
import styled from "styled-components";

import { Card, StyledButton } from "../styles/CommonStyles";
import useToggle from "../hooks/useToggle";

const StyledHint = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const UseToggleComponent = () => {
  const [showHint, setShowHint] = useToggle();
  return (
    <Card>
      <h3>UseToggle</h3>
      <StyledButton onClick={setShowHint}>Show hint</StyledButton>

      {showHint ? (
        <StyledHint>useToggle hook toggles the boolean value</StyledHint>
      ) : null}
    </Card>
  );
};

export default UseToggleComponent;
