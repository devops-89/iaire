"use client";
import SignupLayout from "@/components/layouts/signup/Index";
import Institution from "@/components/layouts/signup/institution/Index";
import Educator from "@/components/layouts/signup/educator/Index";
import { USER_ROLES } from "@/utils/enum";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SignupContent = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  return (
    <div>
      {role === USER_ROLES.INSTITUTION ? (
        <Institution />
      ) : role === USER_ROLES.EDUCATOR ? (
        <Educator />
      ) : (
        <SignupLayout />
      )}
    </div>
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
