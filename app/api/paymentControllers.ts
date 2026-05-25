import { paymentSecuredApi } from "./config";

export const paymentControllers = {
  createPayment: async ({
    planId,
    userId,
  }: {
    planId: number | string;
    userId?: string | number;
  }) => {
    try {
      const result = await paymentSecuredApi.post("/create-checkout-session", {
        planId: planId,
        ...(userId && { userId }),
      });
      return result?.data;
    } catch (error) {
      throw error;
    }
  },
};
