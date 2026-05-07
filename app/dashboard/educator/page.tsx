"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import EducatorWelcomeBanner from "@/components/widgets/Dashboard/EducatorWelcomeBanner";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  FileCopyOutlined,
  Hail,
  Lightbulb,
  MenuBook,
  People,
  RocketLaunch,
  Science,
  WorkspacePremium,
} from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const EducatorDashboard = () => {
  const stats = [
    {
      label: "Student Trained",
      value: "150",
      icon: <People sx={{ fontSize: 28 }} />,
      color: "#3B82F6",
    },
    {
      label: "Startup Launched",
      value: "25",
      icon: <RocketLaunch sx={{ fontSize: 28 }} />,
      color: "#10B981",
    },
    {
      label: "Assistant Mentors",
      value: "50",
      icon: <Hail sx={{ fontSize: 28 }} />,
      color: "#F59E0B",
    },
    {
      label: "Patent Pending",
      value: "20",
      icon: <Lightbulb sx={{ fontSize: 28 }} />,
      color: "#D1A054",
    },
    {
      label: "Patent Granted",
      value: "40",
      icon: <WorkspacePremium sx={{ fontSize: 28 }} />,
      color: "#8B5CF6",
    },
    {
      label: "Research Submitted",
      value: "20",
      icon: <FileCopyOutlined sx={{ fontSize: 28 }} />,
      color: "#EC4899",
    },
    {
      label: "Research Published",
      value: "15",
      icon: <MenuBook sx={{ fontSize: 28 }} />,
      color: "#06B6D4",
    },
    {
      label: "Research Pending",
      value: "10",
      icon: <Science sx={{ fontSize: 28 }} />,
      color: "#6366F1",
    },
  ];

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: "1600px", mx: "auto" }}>
        <EducatorWelcomeBanner />

        <Box sx={{ mt: 10, mb: 3 }}>
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontSize: { xs: 20, md: 24 },
              fontWeight: 700,
              color: COLORS.PRIMARY_NAVY,
            }}
          >
            Dashboard Overview
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: COLORS.ACCENT_TAN || "#D1A054",
              borderRadius: 2,
              mt: 1,
            }}
          />
        </Box>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          {stats.map((stat, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  borderRadius: "24px",
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.03)",
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 20px 45px rgba(0,0,0,0.08)",
                    borderColor: `${stat.color}30`,
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Stack direction="row" alignItems="center" spacing={2.5}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        bgcolor: `${stat.color}12`,
                        color: stat.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 16px ${stat.color}15`,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "rgba(0,0,0,0.5)",
                          fontFamily: montserrat.style.fontFamily,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 28,
                          fontWeight: 800,
                          color: COLORS.PRIMARY_NAVY,
                          fontFamily: roboto.style.fontFamily,
                          lineHeight: 1,
                          mt: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default EducatorDashboard;
