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
  IconButton,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { DownloadOutlined } from "@mui/icons-material";

const payments = [
  { id: "#INV-8821", date: "Oct 24, 2025", amount: "$29.99", status: "Paid" },
  { id: "#INV-7712", date: "Sep 24, 2025", amount: "$29.99", status: "Paid" },
  { id: "#INV-6601", date: "Aug 24, 2025", amount: "$29.99", status: "Paid" },
  { id: "#INV-5590", date: "Jul 24, 2025", amount: "$29.99", status: "Paid" },
];

const PaymentHistory = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 700,
          fontFamily: roboto.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
        }}
      >
        Payment History
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: "20px",
          border: "1px solid #f0f0f0",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ bgcolor: "#fafafa" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Invoice ID
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                Status
              </TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:hover": { bgcolor: "rgba(209, 160, 84, 0.02)" } }}
              >
                <TableCell
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 600,
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      bgcolor: "#E8F5E9",
                      color: "#2E7D32",
                      fontSize: "12px",
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" sx={{ color: COLORS.ACCENT_TAN }}>
                    <DownloadOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentHistory;
