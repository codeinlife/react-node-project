import { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchingData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const initData = await res.json();
    callback(initData);
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return loading;
};

export default useFetch;
