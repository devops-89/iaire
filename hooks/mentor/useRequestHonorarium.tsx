"use client";
import { teacherController } from "@/app/api/teacherController";
import useSnackbar from "@/store/useSnackbar";
import { REQUEST_HONORARIUM_REQUEST_PROPS } from "@/utils/type";
import { useState } from "react";

export const useRequestHonorarium = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useSnackbar();

  const createHonorariumRequest = async (
    data: REQUEST_HONORARIUM_REQUEST_PROPS,
    onSuccess?: () => void,
  ) => {
    setLoading(true);
    try {
      const res = await teacherController.requestHonorarium(data);
      setSnackbar(
        res?.message || "Honorarium request submitted successfully!",
        "success",
      );
      onSuccess?.();
    } catch (err: any) {
      console.log("Error creating honorarium request:", err);
      const errMsg = err?.response?.data?.message || "Something went wrong";
      setSnackbar(errMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, createHonorariumRequest };
};

export const useGetAllHonorariums = () => {
  const [loading, setLoading] = useState(false);
  const [honorariums, setHonorariums] = useState<any[]>([]);

  const fetchHonorariums = async () => {
    setLoading(true);
    try {
      const res = await teacherController.getAllHonorariums();
      if (Array.isArray(res)) {
        setHonorariums(res);
      } else if (res && Array.isArray(res.data)) {
        setHonorariums(res.data);
      } else if (res?.data && Array.isArray(res.data.data)) {
        setHonorariums(res.data.data);
      } else {
        setHonorariums([]);
      }
    } catch (err) {
      console.log("Error fetching honorariums:", err);
      setHonorariums([]);
    } finally {
      setLoading(false);
    }
  };

  return { honorariums, fetchHonorariums, loading };
};

export const useGetHonorariumDetails = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<any>(null);

  const fetchHonorariumDetails = async (id: string) => {
    setLoading(true);
    try {
      const res = await teacherController.getHonorariumsDetails(id);
      const data = res?.data?.data || res?.data || res || null;
      setDetails(data);
    } catch (err) {
      setDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const clearDetails = () => setDetails(null);

  return { details, fetchHonorariumDetails, clearDetails, loading };
};
