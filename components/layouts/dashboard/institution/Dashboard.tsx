import WelcomeBanner from "@/components/widgets/Dashboard/WelcomeBanner";
import { Box, Stack, Typography, Grid, Card } from "@mui/material";
import React from "react";
import StatsBox from "./components/dashboard/StatsBox";
import { DASHBOARD_STAT_CARDS } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  School,
  Groups,
  Lightbulb,
  WorkspacePremium,
  ArrowForward,
} from "@mui/icons-material";
import Link from "next/link";

const InstitutionDashboards = () => {
  const quickActions = [
    {
      title: "Membership Management",
      desc: "Manage dues and view certificate",
      icon: <WorkspacePremium sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/membership-management",
      color: "#C5A059",
      bgColor: "rgba(223, 186, 115, 0.15)",
    },
    {
      title: "Educator Management",
      desc: "View and coordinate teachers",
      icon: <School sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/educator-management",
      color: COLORS.PRIMARY_NAVY,
      bgColor: "rgba(11, 23, 39, 0.08)",
    },
    {
      title: "Team Management",
      desc: "Manage student-mentor groups",
      icon: <Groups sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/team-management",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.12)",
    },
    {
      title: "Log Innovation",
      desc: "Submit new student innovations",
      icon: <Lightbulb sx={{ fontSize: 24 }} />,
      href: "/dashboard/institution/innovation-submission",
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.12)",
    },
  ];

  return (
    <Stack spacing={4} sx={{ width: "100%", pb: 4 }}>
      {/* Premium Header */}
      <Box>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: { xs: 28, md: 36 },
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            letterSpacing: "-0.5px",
          }}
        >
          Institution Dashboard
        </Typography>
        <Typography
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontSize: { xs: 13, md: 15 },
            color: "rgba(0,0,0,0.5)",
            mt: 0.5,
            fontWeight: 500,
          }}
        >
          Manage your educators, student teams, innovations, and institutional membership.
        </Typography>
      </Box>

      {/* Welcome Banner Card & Tier Progress (side by side) */}
      <WelcomeBanner />

      {/* Quick Actions Section */}
      <Box>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 2,
          }}
        >
          Quick Actions
        </Typography>
        <Grid container spacing={3}>
          {quickActions.map((action, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Link href={action.href} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #ffffff 0%, #f6f8fb 100%)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    height: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 25px ${action.bgColor}`,
                      borderColor: action.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: action.bgColor,
                      color: action.color,
                      display: "flex",
                    }}
                  >
                    {action.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: COLORS.PRIMARY_NAVY,
                        fontSize: 14,
                        fontFamily: montserrat.style.fontFamily,
                      }}
                    >
                      {action.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(0,0,0,0.5)",
                        fontSize: 11,
                        mt: 0.5,
                        fontFamily: montserrat.style.fontFamily,
                      }}
                    >
                      {action.desc}
                    </Typography>
                  </Box>
                  <ArrowForward sx={{ color: "rgba(0,0,0,0.2)", fontSize: 16 }} />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Main Statistics Sections */}
      <Box>
        {DASHBOARD_STAT_CARDS.map((val, i) => (
          <StatsBox title={val.title} data={val.data} key={i} />
        ))}
      </Box>
    </Stack>
  );
};

export default InstitutionDashboards;
