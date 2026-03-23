"use client";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { ReceiptLong, Payment } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const INVOICES = [
  { id: "INV-8821", date: "Oct 12, 2023", amount: "$499.00", status: "Unpaid", description: "Annual Membership Fee" },
  { id: "INV-9042", date: "Jan 15, 2024", amount: "$150.00", status: "Unpaid", description: "Teacher Training Sponsoring (2 Teachers)" },
];

const InvoiceList = () => {
  const router = useRouter();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "24px",
        border: "1px solid #f0f0f0",
        mb: 4,
        backgroundColor: COLORS.WHITE,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
        <ReceiptLong sx={{ color: COLORS.PRIMARY_NAVY }} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontWeight: 700,
            color: COLORS.PRIMARY_NAVY,
          }}
        >
          Unpaid Invoices
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead sx={{ bgcolor: "rgba(11, 23, 39, 0.02)" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Invoice ID</TableCell>
              <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {INVOICES.map((invoice) => (
              <TableRow key={invoice.id} hover>
                <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{invoice.id}</TableCell>
                <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{invoice.description}</TableCell>
                <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{invoice.date}</TableCell>
                <TableCell sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY }}>{invoice.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={invoice.status}
                    size="small"
                    sx={{
                      bgcolor: "rgba(239, 68, 68, 0.1)",
                      color: "#EF4444",
                      fontWeight: 700,
                      borderRadius: "6px",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Payment />}
                    onClick={() => router.push(`/dashboard/school/membership-management/pay-dues/${invoice.id}`)}
                    sx={{
                      borderColor: COLORS.ACCENT_TAN,
                      color: COLORS.ACCENT_TAN,
                      fontWeight: 700,
                      textTransform: "none",
                      borderRadius: "8px",
                      "&:hover": {
                        borderColor: "#B88A40",
                        bgcolor: "rgba(209, 160, 84, 0.05)",
                      },
                    }}
                  >
                    Select & Pay
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InvoiceList;
