import axios, { InternalAxiosRequestConfig } from "axios";
import { serverConstants } from "./serverConstant";

const createPublicApi = (baseURL: string) => axios.create({ baseURL });

const createSecuredApi = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });
  return instance;
};

const userPublicApi = createPublicApi(serverConstants.users);
const basePublicApi = createPublicApi(serverConstants.base);
const authApi = createPublicApi(serverConstants.auth);
const plansApi = createPublicApi(serverConstants.plans);

const userSecuredApi = createSecuredApi(serverConstants.users);
const securedPlansApi = createSecuredApi(serverConstants.plans);
const paymentSecuredApi = createSecuredApi(serverConstants.payment);
const trainingSecuredApi = createSecuredApi(serverConstants.training);
const batchSecuredApi = createSecuredApi(serverConstants.batch);
const teamSecuredApi = createSecuredApi(serverConstants.team);
const innovationSecuredApi = createSecuredApi(serverConstants.innovation);
const researchSecuredApi = createSecuredApi(serverConstants.research);
const resourcesSecuredApi = createSecuredApi(serverConstants.resources);
const needAssistance = createSecuredApi(serverConstants.assistance);
const honorariumSecuredApi = createSecuredApi(serverConstants.honorarium);

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
  needAssistance,
  honorariumSecuredApi,
};
