const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const serverConstants = {
  users: `${baseURL}/users`,
  base: `${baseURL}`,
  auth: `${baseURL}/auth`,
  plans: `${baseURL}/plans`,
  payment: `${baseURL}/payments`,
  training: `${baseURL}/training`,
  batch: `${baseURL}/batch`,
  team: `${baseURL}/team`,
  innovation: `${baseURL}/innovations`,
  research: `${baseURL}/research-submissions`,
  resources: `${baseURL}/resources`,
  assistance: `${baseURL}/need-assistance`,
  honorarium: `${baseURL}/honorariums`,
  platform: `${baseURL}/platform`,
  startup: `${baseURL}/startup`,
  noc: `${baseURL}/nocs`,
  complaints: `${baseURL}/complaint-reports`,
};
