import { useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
  }, [url, refresh]);

  return { data, isLoading, error, setRefresh };
};

export default useDataFetch;
