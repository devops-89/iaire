import { teacherController } from "@/app/api/teacherController";
import { useState } from "react";

export const useGetAllnocs = () => {
  const [loading, setLoading] = useState(false);
  const getAllnocs = async () => {
    try {
      setLoading(true);
      let result = await teacherController.getAllnocs();
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, getAllnocs };
};

export const useDownloadNoc = () => {
  const [loading, setLoading] = useState(false);
  const downloadNoc = async (id: string) => {
    try {
      setLoading(true);
      let result = await teacherController.downloadNoc(id);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, downloadNoc };
};
