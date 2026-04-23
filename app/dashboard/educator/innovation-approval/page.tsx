"use client";
import React from "react";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
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
  Stack,
  IconButton,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  CheckCircle,
  Cancel,
  Visibility,
  History,
} from "@mui/icons-material";

const innovations = [
  {
    id: "I-201",
    student: "Alex Rivera",
    title: "Smart Water Recycling",
    category: "Sustainability",
    status: "Pending",
    date: "May 10, 2024",
  },
  {
    id: "I-202",
    student: "Jordan Smith",
    title: "EduPals AI",
    category: "EdTech",
    status: "Under Review",
    date: "May 12, 2024",
  },
];

const InnovationApprovalPage = () => {
  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 700, color: COLORS.PRIMARY_NAVY, mb: 1 }}>
              Innovation Approvals
            </Typography>
            <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
              Review and approve student innovation submissions.
            </Typography>
          </Box>
          <Button
            startIcon={<History />}
            variant="outlined"
            sx={{
              borderColor: COLORS.ACCENT_TAN,
              color: COLORS.ACCENT_TAN,
              borderRadius: "10px",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              padding: "10px 20px",
              "&:hover": { bgcolor: "rgba(209, 160, 84, 0.05)", borderColor: "#B88A44" },
            }}
          >
            Review History
          </Button>
        </Stack>

        <Paper elevation={0} sx={{ borderRadius: "24px", border: "1px solid #f0f0f0", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "rgba(11, 23, 39, 0.02)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Student</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {innovations.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 500 }}>{item.id}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: COLORS.PRIMARY_NAVY }}>{item.student}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.title}</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>{item.category}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          bgcolor: item.status === "Pending" ? "rgba(245, 158, 11, 0.1)" : "rgba(59, 130, 246, 0.1)",
                          color: item.status === "Pending" ? "#F59E0B" : "#3B82F6",
                          fontWeight: 700,
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <IconButton color="success" size="small"><CheckCircle fontSize="small" /></IconButton>
                        <IconButton color="error" size="small"><Cancel fontSize="small" /></IconButton>
                        <IconButton color="primary" size="small"><Visibility fontSize="small" /></IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default InnovationApprovalPage;
