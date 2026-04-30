const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const serverConstants = {
  users: `${baseURL}/users`,
  base: `${baseURL}`,
  auth: `${baseURL}/auth`,
};
