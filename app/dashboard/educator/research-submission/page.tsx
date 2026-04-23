"use client";
import React from "react";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Description,
  CloudUpload,
  AccessTime,
  LibraryBooks,
} from "@mui/icons-material";

const activities = [
  { student: "Alex Rivera", title: "Renewable Energy Research", date: "Jan 15, 2024", status: "Submitted" },
  { student: "Jordan Smith", title: "AI in Classroom", date: "Jan 12, 2024", status: "Draft" },
];

const ResearchSubmissionPage = () => {
  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 700, color: COLORS.PRIMARY_NAVY, mb: 1 }}>
              Research Submissions
            </Typography>
            <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
              Manage and track research projects and publications.
            </Typography>
          </Box>
          <Button
            startIcon={<CloudUpload />}
            variant="contained"
            sx={{
              bgcolor: COLORS.ACCENT_TAN,
              color: COLORS.WHITE,
              borderRadius: "12px",
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              padding: "12px 24px",
              boxShadow: "0px 4px 10px rgba(209, 160, 84, 0.3)",
              "&:hover": { bgcolor: "#B88A44" },
            }}
          >
            New Research Project
          </Button>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ borderRadius: "24px", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}>
              <CardContent>
                <Typography sx={{ fontWeight: 700, mb: 3, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY }}>Active Research Activity</Typography>
                {activities.map((act, i) => (
                  <Box key={i} sx={{ mb: 2.5, p: 2.5, borderRadius: "16px", bgcolor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ bgcolor: COLORS.WHITE, p: 1, borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0,0,0,0.05)" }}>
                        <LibraryBooks sx={{ color: COLORS.ACCENT_TAN }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontFamily: roboto.style.fontFamily }}>{act.title}</Typography>
                        <Typography sx={{ fontSize: 13, color: "rgba(0,0,0,0.5)", fontFamily: montserrat.style.fontFamily }}>Student: {act.student}</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ textAlign: "right" }}>
                        <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="flex-end">
                          <AccessTime sx={{ fontSize: 14, color: "rgba(0,0,0,0.4)" }} />
                          <Typography sx={{ fontSize: 13, color: "rgba(0,0,0,0.6)", fontFamily: montserrat.style.fontFamily }}>{act.date}</Typography>
                        </Stack>
                        <Typography sx={{ fontSize: 13, fontWeight: 700, color: act.status === "Submitted" ? "#10B981" : "#F59E0B", fontFamily: montserrat.style.fontFamily }}>{act.status}</Typography>
                      </Box>
                      <Button size="small" variant="text" sx={{ color: COLORS.PRIMARY_NAVY, fontWeight: 700 }}>Review</Button>
                    </Stack>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: "24px", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", bgcolor: COLORS.PRIMARY_NAVY, color: COLORS.WHITE }}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1, fontFamily: roboto.style.fontFamily }}>Submission Tips</Typography>
                <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.7)", mb: 3, fontFamily: montserrat.style.fontFamily }}>Follow these best practices for high-quality research submissions.</Typography>
                <Stack spacing={2}>
                  {[
                    "Ensure abstract clearly defines the problem",
                    "Cite all institutional resources",
                    "Include data visualization where possible",
                    "Get double review from subject mentor",
                  ].map((tip, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: COLORS.ACCENT_TAN, mt: 1 }} />
                      <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontFamily: montserrat.style.fontFamily }}>{tip}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default ResearchSubmissionPage;
