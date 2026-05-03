import { paymentSecuredApi } from "./config";

export const paymentControllers = {
  createPayment: async (planId: number | string) => {
    try {
      const result = await paymentSecuredApi.post("/create-checkout-session", {
        planId: planId,
      });
      return result?.data;
    } catch (error) {
      throw error;
    }
  },
};
