import { useState } from "react";

const useSubmit = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await callback();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return [handleSubmit, isLoading, error];
};

export default useSubmit;
