"use client";
import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { HourglassTop, InfoOutlined } from "@mui/icons-material";
import { montserrat, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";
import { APPROVAL_STATUS, USER_STATUS } from "@/utils/enum";
import { useGetUserDetails } from "@/hooks/common/getUserDetails";

export const ApprovalPendingBanner = () => {
  const { educatorData, data: signupData } = useSignup();
  const { data: fetchedData } = useGetUserDetails();

  const activeUser = fetchedData || educatorData || signupData;

  const rawStatus =
    activeUser?.approvalStatus ||
    activeUser?.approval_status ||
    activeUser?.status;

  const isPending =
    rawStatus === APPROVAL_STATUS.PENDING ||
    rawStatus === USER_STATUS.PENDING ||
    String(rawStatus || "").toUpperCase() === "PENDING";

  if (!isPending) return null;

  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
        p: { xs: 2, sm: 2.5 },
        borderRadius: "16px",
        background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
        border: "1px solid #FCD34D",
        boxShadow: "0 4px 15px rgba(217, 119, 6, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            bgcolor: "#FDE68A",
            color: "#D97706",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <HourglassTop sx={{ fontSize: 24 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              color: "#92400E",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Your account needs approval from school
          </Typography>
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontSize: "0.85rem",
              color: "#B45309",
              mt: 0.3,
            }}
          >
            Your registration is currently pending review by your institution administration.
          </Typography>
        </Box>
      </Box>

      <Chip
        icon={<InfoOutlined sx={{ fontSize: "16px !important", color: "#D97706 !important" }} />}
        label="APPROVAL PENDING"
        size="small"
        sx={{
          bgcolor: "#FEF3C7",
          color: "#92400E",
          border: "1px solid #FCD34D",
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: 0.5,
          px: 1,
          py: 0.5,
          flexShrink: 0,
        }}
      />
    </Box>
  );
};

export default ApprovalPendingBanner;
