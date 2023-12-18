import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const httpService = axios.create({
  baseURL: BASE_URL,
});

export const httpServiceAuth = axios.create({
  baseURL: BASE_URL,
});

httpServiceAuth.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      authorization: `Bearer ${token}`,
    };
    return config;
  }
  (error) => Promise.error(error);
});

httpServiceAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
