import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

API.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
