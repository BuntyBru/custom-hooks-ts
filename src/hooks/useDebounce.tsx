import React from "react";

const useDebounce = (callback: any, timeout: number) => {
  const [timer, setTimer] = React.useState<string | number | undefined | any>(
    null
  );

  const returnedFunc = (...args: any[]) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        callback.apply(this, args);
      }, timeout)
    );
  };

  return returnedFunc;
};

export default useDebounce;
