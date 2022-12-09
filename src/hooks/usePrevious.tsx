import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T {
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
    console.log("Value", value);
    console.log("Ref.current", ref.current);
  }, [value]);
  console.log("Ref.current out", ref.current);
  return ref.current;
}
