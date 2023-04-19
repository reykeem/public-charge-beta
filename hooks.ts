// custom hook for handling fetch requests
import React, { useState, useEffect } from "react";
import { ChargeStation } from "./Components/types/types";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchChargers = () => {
    fetch(url)
      .then((res: Response) => res.json())
      .then((data: ChargeStation[]) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchChargers();
  }, []);

  return { data, loading, error };
};

export default useFetch;
