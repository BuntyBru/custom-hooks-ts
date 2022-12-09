import useDebounce from "../hooks/useDebounce";
import { Card, StyledButton } from "../styles/CommonStyles";

const UseDebounceComponent = () => {
  const getDataHandler = () => {
    console.log("Clicked");
  };

  const getDebouncedFunc = useDebounce(getDataHandler, 300);
  return (
    <Card>
      <StyledButton onClick={getDebouncedFunc}>Get Data</StyledButton>
    </Card>
  );
};

export default UseDebounceComponent;
