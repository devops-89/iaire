"use client";
import { studentControllers } from "@/app/api/studentControllers";
import useSnackbar from "@/store/useSnackbar";
import { ASSISTANCE_RESPONSE_DATA_PROPS } from "@/utils/type";
import { useState } from "react";
import { useModal } from "@/store/useModal";

export const useCreateStudentSupportTicket = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();
  const { hideModal } = useModal();

  const raiseTicket = async (
    data: ASSISTANCE_RESPONSE_DATA_PROPS,
    onSuccess: () => void,
  ) => {
    setLoading(true);
    try {
      const res = await studentControllers.needAssistance(data);
      setSnackbar(
        res?.message || "Support ticket raised successfully!",
        "success",
      );
      onSuccess();
      hideModal();
    } catch (err: any) {
      console.log("Error raising support ticket:", err);
      const errMsg = err?.response?.data?.message || "Something went wrong";
      setSnackbar(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, raiseTicket };
};

export const useGetAllStudentSupportTickets = () => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<any[]>([]);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await studentControllers.getAllTickets();
      if (Array.isArray(res)) {
        setTickets(res);
      } else if (res && Array.isArray(res.data)) {
        setTickets(res.data);
      } else if (res?.data && Array.isArray(res.data.data)) {
        setTickets(res.data.data);
      } else {
        setTickets([]);
      }
    } catch (err) {
      console.log("Error fetching support tickets:", err);
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };

  return { tickets, fetchTickets, loading };
};
