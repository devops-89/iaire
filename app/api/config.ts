import axios, { InternalAxiosRequestConfig } from "axios";
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

const securedPlansApi = axios.create({
  baseURL: serverConstants.plans,
});

securedPlansApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

const trainingSecuredApi = axios.create({
  baseURL: serverConstants.training,
});

trainingSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const batchSecuredApi = axios.create({
  baseURL: serverConstants.batch,
});
batchSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const teamSecuredApi = axios.create({
  baseURL: serverConstants.team,
});

teamSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const innovationSecuredApi = axios.create({
  baseURL: serverConstants.innovation,
});

innovationSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const researchSecuredApi = axios.create({
  baseURL: serverConstants.research,
});

researchSecuredApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const resourcesSecuredApi = axios.create({
  baseURL: serverConstants.resources,
});

resourcesSecuredApi.interceptors.request.use((config) => {
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
  trainingSecuredApi,
  securedPlansApi,
  batchSecuredApi,
  teamSecuredApi,
  innovationSecuredApi,
  researchSecuredApi,
  resourcesSecuredApi,
};
