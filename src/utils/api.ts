import { URL } from "./constant";
import axios from "axios";

export const shortenUrl = async (param: string) => {
  const res = await axios.get(URL, { params: { url: param } });

  return res;
};

// export const shortenUrl = async (param: string) => {
//   const options = {
//     method: "GET",
//     url: "https://shrtlnk.dev/api/v2/link",
//     params: {
//       url: param,
//     },
//     headers: {
//       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//       "X-RapidAPI-Host": "shoutlink.p.rapidapi.com",
//     },
//   };

//   const res = await axios.request(options);

//   return res;
// };
