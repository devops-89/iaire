"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Container,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import SignupStepper from "@/components/layouts/signup/SignupStepper";
import { ArrowBack, Payment } from "@mui/icons-material";
import { useSchoolSignup } from "@/hooks/school/useSignup";
import useSnackbar from "@/store/useSnackbar";
import { useModal } from "@/store/useModal";
import VerifyOtp from "@/components/modals/common/VerifyOtp";
import { InstitutionInfo } from "@/utils/type";
import InstitutionReview from "@/components/layouts/signup/review/InstitutionReview";
import MentorReview from "@/components/layouts/signup/review/MentorReview";

const ReviewPage = () => {
  const { educatorData, institutionData, data } = useSignup();
  // const
  // console.log("educator", educatorData);

  const [role, setRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let storedRole = localStorage.getItem("role");
      if (
        storedRole &&
        storedRole.startsWith('"') &&
        storedRole.endsWith('"')
      ) {
        storedRole = JSON.parse(storedRole);
      }

      if (!storedRole) {
        if (educatorData) storedRole = educatorData.role;
        else if (institutionData) storedRole = USER_ROLES.INSTITUTION;
      }

      setRole(storedRole);
    }
  }, [educatorData, institutionData]);

  return (
    <Box>
      {role === USER_ROLES.INSTITUTION ? (
        <InstitutionReview />
      ) : role === USER_ROLES.EDUCATOR ? (
        <MentorReview />
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default ReviewPage;
