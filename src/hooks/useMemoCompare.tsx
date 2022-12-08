import { useRef, useEffect } from "react";

const useMemoCompare = (obj: any, compareFunction: any) => {
  const previousRef = useRef();
  const previous = previousRef.current;

  const isEqual = compareFunction(previous, obj);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = obj;
    }
  });

  return isEqual ? previous : obj;
};

export default useMemoCompare;
