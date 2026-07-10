"use client";
import { userControllers } from "@/app/api/userControllers";
import { useSignup } from "@/store/useSignup";
import { USER_ROLES } from "@/utils/enum";
import { useEffect, useState } from "react";

export const getUserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const { setEducatorData, setInstitutionData, setUserData } = useSignup();
  useEffect(() => {
    const role = localStorage.getItem("role");
    const fetchUserDetails = async () => {
      setLoading(true);
      await userControllers
        .getUserDetails()
        .then((res) => {
          if (role === USER_ROLES.EDUCATOR) {
            setEducatorData(res.data);
          }
          if (role === USER_ROLES.INSTITUTION) {
            setInstitutionData(res.data);
          }
          if (role === USER_ROLES.STUDENT) {
            setUserData(res.data);
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

export const useGetUserDetailsPublic = (userId: string | null) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await userControllers
        .getUserDetailsPublic({ userId: userId })
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", err);
        });
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);
  return { loading, data };
};

export const useGetUserDetailsById = (userId: string | null) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await userControllers
        .getUserDetailsById({ userId: userId })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", err);
        });
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);
  return { loading, data };
};
