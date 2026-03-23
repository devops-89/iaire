"use client";
import SignupLayout from "@/components/layouts/signup/Index";
import School from "@/components/layouts/signup/school/Index";
import { USER_ROLES } from "@/utils/enum";
import { useSearchParams } from "next/navigation";
import React from "react";

const Signup = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  return (
    <div>{role === USER_ROLES.SCHOOL ? <School /> : <SignupLayout />}</div>
  );
};

export default Signup;
