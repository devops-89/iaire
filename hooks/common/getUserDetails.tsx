"use client";
import { userControllers } from "@/app/api/userControllers";
import { useSignup } from "@/store/useSignup";
import { USER_ROLES } from "@/utils/enum";
import { useEffect, useState } from "react";

export const getUserDetails = (userId?: string | null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { setEducatorData, setInstitutionData, setUserData } = useSignup();
  useEffect(() => {
    const role = localStorage.getItem("role");
    const fetchUserDetails = async () => {
      setLoading(true);
      await userControllers
        .getUserDetails({ userId })
        .then((res) => {
          if (role === USER_ROLES.EDUCATOR) {
            setEducatorData(res.data.data);
          }
          if (role === USER_ROLES.INSTITUTION) {
            setInstitutionData(res.data.data);
          }
          if (role === USER_ROLES.STUDENT) {
            setUserData(res.data.data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    };
    fetchUserDetails();
  }, []);
  return { loading, data };
};
