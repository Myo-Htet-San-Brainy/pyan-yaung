import axios from "axios";
const baseurl = "https://pyan-yaung.as.r.appspot.com/api/v1";

export const instance = axios.create({
  baseURL: baseurl,
});
