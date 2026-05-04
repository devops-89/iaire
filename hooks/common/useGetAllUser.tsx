import { userControllers } from "@/app/api/userControllers";
import { APPROVAL_STATUS } from "@/utils/enum";
import { ALL_USER_REQUEST_PROPS } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetAllUser = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const fetchUserData = async ({
    page,
    limit,
    role,
    approvalStatus,
  }: ALL_USER_REQUEST_PROPS) => {
    try {
      setLoading(true);
      const result = await userControllers.getAllUsers({
        page,
        limit,
        role,
        approvalStatus,
      });
      setUserData(result?.data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { userData, loading, fetchUserData };
};

export const useUpdateTeacherStatus = () => {
  const [loading, setLoading] = useState(false);

  const updateStatus = async (id: string | number, status: APPROVAL_STATUS) => {
    setLoading(true);
    try {
      const res = await userControllers.updateUserStatus(id, status);
      console.log("res", res);
      return res;
    } catch (err) {
      console.log("err", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateStatus, loading };
};
