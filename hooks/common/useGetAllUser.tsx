import { userControllers } from "@/app/api/userControllers";
import { useState } from "react";

export const useGetAllUser = ({}) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const result = await userControllers.getAllUsers({});
      setUserData(result);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
};
