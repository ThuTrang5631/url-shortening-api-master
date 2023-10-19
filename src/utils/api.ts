import { URL, API_KEY } from "./constant";
import axios from "axios";

export const shortenUrl = async (url: string) => {
  let options = {
    method: "POST",
    redirect: "follow",
    url: URL,
    headers: {
      apiKey: API_KEY,
    },
    data: url,
  };

  const res = await axios.request(options);

  return res;
};
