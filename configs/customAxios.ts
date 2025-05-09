import ENV from "@/constants/environment";
import { getAccessToken } from "@/helpers/functions/accessToken";
import axios from "axios";
// import { IAppResponseBase } from '~/baseTypes';
const baseURL = String(ENV.BACKEND_URL);
console.log("baseURL", baseURL);
const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
http.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // window.location.href = "/login";
    }
    return await Promise.reject(error);
  }
);
export default http;
