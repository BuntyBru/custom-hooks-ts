import { useState } from "react";

const useSubmit = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [handleSubmit, isLoading, error];
};

export default useSubmit;
