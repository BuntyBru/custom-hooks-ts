import { useCallback, useState } from "react";

const useToggle = (initialValue: boolean = false): [boolean, any] => {
  const [show, setShow] = useState<boolean>(initialValue);
  const toggle = useCallback((): void => setShow((show) => !show), []);
  return [show, toggle];
};

export default useToggle;
