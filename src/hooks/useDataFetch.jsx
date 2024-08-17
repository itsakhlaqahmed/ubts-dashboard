import { useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        var body = response.data;
        setData(body);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useDataFetch;
