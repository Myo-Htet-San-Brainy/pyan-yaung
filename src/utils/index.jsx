import axios from "axios";
const baseurl = "https://pyan-yaung.onrender.com/api/v1";

export const instance = axios.create({
  baseURL: baseurl,
});
