"use client";
import SignupLayout from "@/components/layouts/signup/Index";
import Institution from "@/components/layouts/signup/institution/Index";
import Educator from "@/components/layouts/signup/educator/Index";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { Backdrop, Box, CircularProgress, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

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
  const router = useRouter();
  return (
    <Suspense
      fallback={
        <Backdrop open={true}>
          <CircularProgress />
        </Backdrop>
      }
    >
      <Box sx={{ position: "absolute", top: 20, right: 20, zIndex: 9999 }}>
        <IconButton
          onClick={() => router.back()}
          sx={{
            bgcolor: COLORS.WHITE,
            border: "2px solid #F3F4F6",
            "&:hover": { bgcolor: "#F9FAFB" },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Close sx={{ color: COLORS.PRIMARY_NAVY }} />
        </IconButton>
      </Box>
      <SignupContent />
    </Suspense>
  );
};

export default Signup;
