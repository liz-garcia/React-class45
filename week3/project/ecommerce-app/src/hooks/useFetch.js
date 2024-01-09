import { useEffect, useState } from "react";

const useFetch = (url, triggerFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (triggerFetch) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, triggerFetch]);

  return { data, loading, error, fetchData };
};

export default useFetch;
