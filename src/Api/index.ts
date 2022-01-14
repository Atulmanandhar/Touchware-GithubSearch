import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { createSearchRepoUrl } from "./SearchRepoApi";

interface Github_Fetch_Handler {
  url: string;
  successCB?: (payload: any) => void;
  failureCB?: (error: string) => void;
  finallyCB?: () => void;
  apiHeaders?: AxiosRequestConfig<any> | undefined | any;
}

export const DEFAULT_API_HEADERS = {
  "Content-Type": "application/json",
};

const githubFetchHandler = async ({
  url,
  successCB = () => {},
  finallyCB = () => {},
  failureCB = () => {},
  apiHeaders = DEFAULT_API_HEADERS,
}: Github_Fetch_Handler) => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: apiHeaders as any,
    });
    if (response.status === 200) {
      const payload = response.data;
      successCB(payload);
    } else {
      failureCB("Unable to fetch data at this time");
    }
  } catch (err: any) {
    failureCB(err?.response?.data?.message ?? "Failed to fetch data");
  } finally {
    finallyCB();
  }
};

export { githubFetchHandler, createSearchRepoUrl };
