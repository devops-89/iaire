"use client";
import SignupLayout from "@/components/layouts/signup/Index";
import School from "@/components/layouts/signup/school/Index";
import { USER_ROLES } from "@/utils/enum";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SignupContent = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  return (
    <div>{role === USER_ROLES.SCHOOL ? <School /> : <SignupLayout />}</div>
  );
};

const Signup = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
};

export default Signup;
