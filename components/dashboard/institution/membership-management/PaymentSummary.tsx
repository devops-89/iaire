"use client";
import React from "react";
import { Paper, Typography, Stack, Box, Divider } from "@mui/material";
import { Info } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";

interface PaymentSummaryProps {
  selectedInvoice: any;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ selectedInvoice }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "24px",
        bgcolor: COLORS.PRIMARY_NAVY,
        color: COLORS.WHITE,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          mb: 4,
        }}
      >
        Payment Summary
      </Typography>

      <Stack spacing={3}>
        <Box>
          <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.5)", mb: 0.5 }}>
            Membership Plan / Item
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {selectedInvoice?.description || "Select an invoice"}
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.5)", mb: 0.5 }}>
            Invoice ID
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {selectedInvoice?.id || "---"}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>Due Amount</Typography>
          <Typography sx={{ fontWeight: 700, color: COLORS.ACCENT_TAN, fontSize: 32 }}>
            {selectedInvoice?.amount || "$0.00"}
          </Typography>
        </Stack>

        <Box
          sx={{
            p: 2,
            bgcolor: "rgba(209, 160, 84, 0.1)",
            borderRadius: "12px",
            border: `1px dashed ${COLORS.ACCENT_TAN}`,
            mt: "auto",
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <Info sx={{ color: COLORS.ACCENT_TAN, mt: 0.2 }} />
            <Typography sx={{ fontSize: 12, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              Your payment directly supports innovation and research management for your institution.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default PaymentSummary;
