import { paymentControllers } from "@/app/api/paymentControllers";
import { useState } from "react";

export const useMakePayment = () => {
  const [loading, setLoading] = useState(false);
  const makePayment = ({
    planId,
    userId,
  }: {
    planId: string | number;
    userId?: string | number;
  }) => {
    setLoading(true);
    paymentControllers
      .createPayment({ planId, userId })
      .then((res: any) => {
        const url =
          res?.data?.checkoutUrl ||
          res?.checkoutUrl ||
          res?.data?.data?.checkoutUrl;
        if (url) {
          window.location.href = url;
        } else {
          console.error("Checkout URL not found in backend response:", res);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };
  return { loading, makePayment };
};
