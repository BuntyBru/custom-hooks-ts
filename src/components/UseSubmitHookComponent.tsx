import { useState } from "react";
import { Card, StyledButton } from "../styles/CommonStyles";

const UseSubmitHookComponent = () => {
  const [state, setState] = useState(false);

  const submitHandler = () => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 3500);
  };
  return (
    <Card>
      <h3>UseSubmit</h3>
      <StyledButton onClick={submitHandler} disabled={state}>
        Submit
      </StyledButton>
    </Card>
  );
};

export default UseSubmitHookComponent;
