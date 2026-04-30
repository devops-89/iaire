import axios from "axios";
import { serverConstants } from "./serverConstant";

const userSecuredApi = axios.create({
  baseURL: serverConstants.users,
});

userSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const userPublicApi = axios.create({
  baseURL: serverConstants.users,
});

const basePublicApi = axios.create({
  baseURL: serverConstants.base,
});

const authApi = axios.create({
  baseURL: serverConstants.auth,
});

export { userPublicApi, userSecuredApi, authApi, basePublicApi };
