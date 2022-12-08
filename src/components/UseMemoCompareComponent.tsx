import { Card } from "../styles/CommonStyles";
import useMemoCompare from "../hooks/useMemoCompare";

const UseMemoCompareComponent = () => {
  const objFinal = useMemoCompare({ id: 110 }, (prev: any, next: any) => {
    return prev && prev.id === next.id;
  });
  return (
    <Card>
      <h3>UseMemoCompare</h3>
    </Card>
  );
};

export default UseMemoCompareComponent;
