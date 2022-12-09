import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";
import { Card, StyledButton } from "../styles/CommonStyles";

const UsePreviousComponent = () => {
  const [count, setCount] = useState<number>(0);

  const prevCount: number = usePrevious<number>(count);

  return (
    <Card>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <StyledButton onClick={() => setCount(count + 1)}>Increment</StyledButton>
    </Card>
  );
};

export default UsePreviousComponent;
