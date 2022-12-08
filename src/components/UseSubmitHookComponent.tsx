import useSubmit from "../hooks/useSubmit";
import { Card, StyledButton } from "../styles/CommonStyles";

const UseSubmitHookComponent = () => {
  const mySubmitFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rnd = Math.random() * 10;
        rnd <= 1 ? resolve("data") : reject("Error occurred!");
      }, 2000);
    });
  };
  const [handleSubmit, isLoading, error] = useSubmit(mySubmitFunction);
  return (
    <Card>
      <h3>UseSubmit</h3>

      <StyledButton onClick={handleSubmit} disabled={isLoading}>
        {!isLoading ? "Click me" : "Loading..."}
      </StyledButton>
      {error ? <p>{error}</p> : null}
    </Card>
  );
};

export default UseSubmitHookComponent;
