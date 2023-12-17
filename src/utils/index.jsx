import axios from "axios";
const baseurl = "http://localhost:5000/api/v1";

export const instance = axios.create({
  baseURL: baseurl,
});
