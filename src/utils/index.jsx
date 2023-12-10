import axios from "axios";
const baseurl = "https://strapi-store-server.onrender.com/api";

export const instance = axios.create({
  baseURL: baseurl,
});
