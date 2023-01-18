import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null); // changing blog to data for future use data is universal
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortContrl = new AbortController(); // simple fetch will pause
    //A controller object that allows you to abort one or more DOM requests as and when desired. enabled controller
    fetch(url, { signal: abortContrl.signal }) // rather then hard code use it in a home page as a default value in hook
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          // console.log('failed to fetch')
          setError(err.message);
        }
      });
    return () => abortContrl.abort();
  }, [url]);

  return { data, isPending, error, setData };
};
export default useFetch;
