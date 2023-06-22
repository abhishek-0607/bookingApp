import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  url = "https://booking-app-backend-9d1a.onrender.com/api" + url;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};
export default useFetch;
