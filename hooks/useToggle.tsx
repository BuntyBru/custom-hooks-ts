import React, { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [show, setShow] = useState(initialValue);
  const toggle = useCallback(() => setShow((show) => !show), []);
  return [show, toggle];
};
