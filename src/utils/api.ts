import { URL } from "./constant";
import axios from "axios";

export const shortenUrl = async (param: string) => {
  const res = await axios.get(URL, { params: { url: param } });

  return res;
};
