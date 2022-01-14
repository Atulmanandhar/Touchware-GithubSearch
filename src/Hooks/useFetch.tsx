import { useEffect, useState } from "react";

interface Props {
  url: string;
  options?: RequestInit | undefined;
}

const useFetch = ({
  url,
  options,
}: Props): { response: any; isLoading: boolean; error: string } => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (url !== "") {
      (async () => {
        try {
          const res = await fetch(url, options);
          const resJson = await res.json();
          setResponse(resJson);
        } catch (err) {
          setError("failed to get data");
        }
      })();
    } else {
      setResponse(null);
    }
  }, [url]);
  return { response, error, isLoading };
};

useFetch.defaultProps = {
  options: {},
};

export default useFetch;

// const { response, isLoading, error } = useFetch({
//   url: `${SEARCH_REPO_API}?q=${text}in:name`,
// });
