"use client";
import { COLORS, APPROVAL_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import BeamButton from "@/components/widgets/BeamButton";
import { useUpdateTeacherStatus } from "@/hooks/common/useGetAllUser";
import { useModal } from "@/store/useModal";
import useSnackbar from "@/store/useSnackbar";

interface RejectReasonProps {
  teacherId: string | number;
  onSuccess?: () => void;
}

const RejectReason = ({ teacherId, onSuccess }: RejectReasonProps) => {
  const [rejectReason, setRejectReason] = useState("");
  const [error, setError] = useState("");

  const { updateStatus, loading } = useUpdateTeacherStatus();
  const { hideModal } = useModal();
  const { setSnackbar } = useSnackbar();

  const submitHandler = async () => {
    if (!rejectReason.trim()) {
      setError("Please Enter Reason for Rejection");
      return;
    }

    try {
      await updateStatus(
        teacherId,
        APPROVAL_STATUS.REJECTED,
        rejectReason.trim(),
      );
      setSnackbar("Educator rejected successfully", "success");
      hideModal();
      onSuccess?.();
    } catch (err: any) {
      setSnackbar(
        err?.response?.data?.message || "Failed to reject educator",
        "error",
      );
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
          }}
        >
          Rejection Reason
        </Typography>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 14,
            color: "text.secondary",
            mb: 3,
          }}
        >
          Please provide a brief explanation for rejecting this educator.
        </Typography>
        <TextField
          label="Enter reason here..."
          multiline
          rows={4}
          fullWidth
          sx={{
            "& .MuiInputBase-root": {
              fontFamily: roboto.style.fontFamily,
            },
            "& .MuiInputLabel-root": {
              fontFamily: roboto.style.fontFamily,
            },
          }}
          value={rejectReason}
          onChange={(e) => {
            setRejectReason(e.target.value);
            setError("");
          }}
          error={!!error}
          helperText={error}
        />
      </Box>

      <BeamButton
        sx={{
          backgroundColor: COLORS.PRIMARY_NAVY,
          color: COLORS.WHITE,
          fontFamily: roboto.style.fontFamily,
          textTransform: "none",
          fontWeight: 600,
          px: 4,
          py: 1,
          "&:hover": {
            backgroundColor: "#1c2b3d",
          },
        }}
        onClick={submitHandler}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={18} color="inherit" />
        ) : (
          "Submit Rejection"
        )}
      </BeamButton>
    </Box>
  );
};

export default RejectReason;
