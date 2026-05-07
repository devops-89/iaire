import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const RejectReason = () => {
  const [rejectReason, setRejectReason] = useState("");
  const [error, setError] = useState("");
  const submitHandler = () => {
    setError("Please Enter Reject Reason");
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
          Please provide a brief explanation for rejecting this training
          nomination.
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

      <Button
        sx={{
          backgroundColor: COLORS.PRIMARY_NAVY,
          color: COLORS.WHITE,
          fontFamily: roboto.style.fontFamily,
          textTransform: "none",
          fontWeight: 600,
          px: 4,
          py: 1,
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#1c2b3d",
          },
        }}
        onClick={submitHandler}
      >
        Submit Rejection
      </Button>
    </Box>
  );
};

export default RejectReason;
