import axios from "axios";
const baseurlAppEngine = "https://pyan-yaung.as.r.appspot.com/api/v1";
const baseurlRender = "https://pyan-yaung.onrender.com/api/v1";
const baseurlLocal = "http://localhost:5000/api/v1";

export const instance = axios.create({
  baseURL: baseurlRender,
});
