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
    let rawRole = localStorage.getItem("role") || "";
    try {
      if (rawRole.startsWith('"')) {
        rawRole = JSON.parse(rawRole);
      }
    } catch (e) {}

    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const res = await userControllers.getUserDetails();
        const userObj = res?.data?.data || res?.data || res;
        setData(userObj);

        const roleUpper = (userObj?.role || rawRole || "")
          .toString()
          .toUpperCase();

        if (
          roleUpper === USER_ROLES.EDUCATOR ||
          roleUpper === "MENTOR" ||
          roleUpper === "TEACHER" ||
          roleUpper === "EDUCATOR"
        ) {
          setEducatorData(userObj);
        } else if (
          roleUpper === USER_ROLES.INSTITUTION ||
          roleUpper === "INSTITUTION" ||
          roleUpper === "SCHOOL" ||
          roleUpper === USER_ROLES.SCHOOL_ADMIN
        ) {
          setInstitutionData(userObj);
          console.log("new user object", userObj);
        } else if (
          roleUpper === USER_ROLES.STUDENT ||
          roleUpper === "STUDENT"
        ) {
          setUserData(userObj);
        } else {
          setEducatorData(userObj);
        }
      } catch (err) {
        console.log("err fetching user details:", err);
      } finally {
        setLoading(false);
      }
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
