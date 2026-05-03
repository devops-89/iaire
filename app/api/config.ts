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

const plansApi = axios.create({
  baseURL: serverConstants.plans,
});

const paymentSecuredApi = axios.create({
  baseURL: serverConstants.payment,
});

paymentSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export {
  userPublicApi,
  userSecuredApi,
  authApi,
  basePublicApi,
  plansApi,
  paymentSecuredApi,
};
