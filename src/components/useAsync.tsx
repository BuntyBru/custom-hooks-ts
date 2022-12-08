import { useEffect, useState } from "react";

const useAsync = (api: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [api]);

  return [loading, data, error];
};

export default useAsync;
