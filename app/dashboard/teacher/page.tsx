"use client";
import TeacherDashboardLayout from "@/components/layouts/dashboard/teacher/Index";
import WelcomeBanner from "@/components/dashboard/student/WelcomeBanner";
import React from "react";
import { Grid, Box, Typography, Card, CardContent, Stack } from "@mui/material";
import { People, Psychology, MenuBook, Star } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";

const TeacherDashboard = () => {
  const stats = [
    { label: "Total Students", value: "150", icon: <People />, color: "#3B82F6" },
    { label: "Innovations to Review", value: "12", icon: <Psychology />, color: "#10B981" },
    { label: "Research Papers", value: "05", icon: <MenuBook />, color: "#F59E0B" },
    { label: "Training Score", value: "9.2", icon: <Star />, color: "#D1A054" },
  ];

  return (
    <TeacherDashboardLayout>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <WelcomeBanner name="Teacher" />
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {stats.map((stat, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ borderRadius: "20px", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: `${stat.color}15`, color: stat.color }}>
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: 13, color: "rgba(0,0,0,0.5)", fontFamily: montserrat.style.fontFamily }}>
                        {stat.label}
                      </Typography>
                      <Typography sx={{ fontSize: 24, fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontFamily: roboto.style.fontFamily }}>
                        {stat.value}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ borderRadius: "24px", minHeight: "400px", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2, fontFamily: roboto.style.fontFamily }}>Recent Innovation Submissions</Typography>
                <Typography sx={{ color: "rgba(0,0,0,0.5)", fontFamily: montserrat.style.fontFamily }}>Review and provide feedback on your students' latest innovations.</Typography>
                {/* Add a mini list here if needed */}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ borderRadius: "24px", minHeight: "400px", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2, fontFamily: roboto.style.fontFamily }}>Action Items</Typography>
                <Typography sx={{ color: "rgba(0,0,0,0.5)", fontFamily: montserrat.style.fontFamily }}>Tasks requiring your immediate attention.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </TeacherDashboardLayout>
  );
};

export default TeacherDashboard;
