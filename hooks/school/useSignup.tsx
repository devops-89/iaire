import { teacherController } from "@/app/api/teacherController";
import { userControllers } from "@/app/api/userControllers";
import { InstitutionInfo } from "@/utils/type";
import { useEffect, useState } from "react";

export const useSchoolSignup = () => {
  const [loading, setLoading] = useState(false);

  const createSchool = async (data: InstitutionInfo) => {
    try {
      setLoading(true);
      const result = await userControllers.signupSchool(data);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createSchool, loading };
};
