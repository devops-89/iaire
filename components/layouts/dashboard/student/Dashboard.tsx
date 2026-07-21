"use client";
import React, { useEffect, useState } from "react";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  School,
  WorkspacePremium,
  Lightbulb,
  FileCopyOutlined,
  MenuBook,
  VerifiedUser,
  Star,
  Add,
  ArrowForward,
  BookmarkBorder,
  AutoStories,
  CheckCircle,
  RadioButtonUnchecked,
  TrendingUp,
  AccountCircle,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Typography,
  Card,
  Chip,
  LinearProgress,
  CircularProgress,
  Stack,
  Tabs,
  Tab,
  Divider} from "@mui/material";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import Link from "next/link";
import moment from "moment";
import BeamButton from "@/components/widgets/BeamButton";

// Styling constants for rich aesthetics
const goldGradient = "linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)";
const navyGradient = "linear-gradient(135deg, #0b1727 0%, #1a3052 100%)";
const glassCardStyle = {
  p: 3,
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.03)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.08)",
  },
};

const Dashboard = () => {
  const { data } = useSignup();
  const [activeTab, setActiveTab] = useState(0);

  // Fetch real-time count of research papers and innovations
  const { innovationData, fetchInnovationList, loading: innovationLoading } = useGetAllInnovation();
  const { researchData, fetchResearchData, loading: researchLoading } = useGetAllResearch();

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();
  }, []);

  const membershipCode =
    data?.payments?.map((val) => val.membership?.membershipCode) || [];

  const isMember =
    (data?.payments?.length ?? 0) > 0 &&
    data?.payments?.some(
      (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
    );

  const numInnovations = innovationData?.length || 0;
  const numResearch = researchData?.length || 0;

  // Dynamic Gamification of Student Status / Progression
  let currentTier = "Student Member";
  let nextTier = "Student Innovation Scholar";
  let requirementsCount = 0;
  let requirementsMet = 0;

  // Check progress
  const hasInnovation = numInnovations > 0;
  const hasResearch = numResearch > 0;
  const hasPayment = isMember;

  // Level thresholds
  if (hasInnovation && hasResearch && hasPayment) {
    currentTier = "Accredited Student Member";
    nextTier = "Fellow Student Member";
  } else if (hasInnovation && hasPayment) {
    currentTier = "Student Innovation Scholar";
    nextTier = "Accredited Student Member";
  } else if (hasPayment) {
    currentTier = "Student Member";
    nextTier = "Student Innovation Scholar";
  }

  // Define dynamic checklist for Next Tier progression
  const checklist = [
    { text: "Submit at least 1 innovation project", met: hasInnovation },
    { text: "Submit at least 1 research paper", met: hasResearch },
    { text: "Activate membership subscription", met: hasPayment },
  ];

  requirementsCount = checklist.length;
  requirementsMet = checklist.filter((c) => c.met).length;
  const progressPercent = Math.round((requirementsMet / requirementsCount) * 100);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: "1600px", mx: "auto" }}>
      {/* Top Banner and Level Progression */}
      <Grid container spacing={4} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 8 }}>
          {/* Welcome Banner */}
          <Box
            sx={{
              background: navyGradient,
              borderRadius: "28px",
              p: { xs: 3, md: 5 },
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(11, 23, 39, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Background elements */}
            <Box
              sx={{
                position: "absolute",
                top: "-40px",
                right: "-20px",
                width: "280px",
                height: "280px",
                background: "radial-gradient(circle, rgba(223,186,115,0.08) 0%, rgba(255,255,255,0) 70%)",
                zIndex: 1,
              }}
            />
            <School
              sx={{
                fontSize: 220,
                color: "rgba(255,255,255,0.02)",
                position: "absolute",
                right: -20,
                bottom: -40,
                transform: "rotate(-10deg)",
                zIndex: 1,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Chip
                label={isMember ? "Active Member" : "Membership Pending"}
                size="small"
                icon={<VerifiedUser sx={{ fontSize: "14px !important" }} />}
                sx={{
                  bgcolor: isMember ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
                  color: isMember ? "#34D399" : "#FBBF24",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: 10,
                  letterSpacing: 1,
                  px: 1,
                  mb: 3,
                  border: `1px solid ${isMember ? "rgba(16, 185, 129, 0.25)" : "rgba(245, 158, 11, 0.25)"}`,
                }}
              />
              <Typography
                sx={{
                  fontWeight: 800,
                  color: COLORS.WHITE,
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: 26, md: 36 },
                  letterSpacing: "-0.5px",
                }}
              >
                Welcome back,
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#DFBA73",
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: { xs: 24, md: 32 },
                  mt: 0.5,
                }}
              >
                {data ? `${data.firstName} ${data.lastName}` : "Student"}
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: 14,
                  fontWeight: 500,
                  mt: 2,
                }}
              >
                {data?.school?.name || "IAIE Academic Portal"}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                mt: 4,
                pt: 3,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Box>
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Membership ID
                </Typography>
                <Typography sx={{ color: COLORS.WHITE, fontWeight: 700, fontSize: 15, mt: 0.5 }}>
                  {membershipCode.length > 0 ? membershipCode[0] : "Pending Allocation"}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Current Tier
                </Typography>
                <Typography sx={{ color: COLORS.WHITE, fontWeight: 700, fontSize: 15, mt: 0.5, display: "flex", alignItems: "center", gap: 0.5 }}>
                  <WorkspacePremium sx={{ color: "#DFBA73", fontSize: 18 }} />
                  {currentTier}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          {/* Membership Advancement Card */}
          <Card
            sx={{
              ...glassCardStyle,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: 18,
                  fontWeight: 800,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <TrendingUp sx={{ color: "#C5A059" }} />
                Level Progression
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: 3 }}>
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgress
                    variant="determinate"
                    value={progressPercent}
                    size={80}
                    thickness={6}
                    sx={{ color: "#DFBA73" }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="caption" component="div" sx={{ fontWeight: 800, fontSize: 16, color: COLORS.PRIMARY_NAVY }}>
                      {progressPercent}%
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.5)", fontWeight: 600 }}>
                    NEXT MILESTONE
                  </Typography>
                  <Typography sx={{ fontSize: 15, fontWeight: 700, color: COLORS.PRIMARY_NAVY, mt: 0.5 }}>
                    {nextTier}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography sx={{ fontSize: 13, fontWeight: 700, color: COLORS.PRIMARY_NAVY, mb: 1.5 }}>
                REQUIREMENTS CHECKLIST
              </Typography>

              <Stack spacing={1.2}>
                {checklist.map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                    {item.met ? (
                      <CheckCircle sx={{ color: "#10B981", fontSize: 18, mt: 0.2 }} />
                    ) : (
                      <RadioButtonUnchecked sx={{ color: "rgba(0,0,0,0.25)", fontSize: 18, mt: 0.2 }} />
                    )}
                    <Typography
                      sx={{
                        fontSize: 12.5,
                        color: item.met ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                        fontWeight: item.met ? 600 : 500,
                        textDecoration: item.met ? "none" : "none",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Link href="/dashboard/student/membership-management" style={{ textDecoration: "none" }}>
                <BeamButton
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "12px",
                    textTransform: "none",
                    borderColor: COLORS.PRIMARY_NAVY,
                    color: COLORS.PRIMARY_NAVY,
                    fontWeight: 700,
                    fontSize: 13,
                    py: 1,
                    "&:hover": {
                      borderColor: COLORS.PRIMARY_NAVY,
                      bgcolor: "rgba(11,23,39,0.03)",
                    },
                  }}
                  endIcon={<ArrowForward sx={{ fontSize: "14px !important" }} />}
                >
                  Manage Membership Dues
                </BeamButton>
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions Panel */}
      <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 2.5,
          }}
        >
          Quick Actions
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/dashboard/student/innovation-management/add-innovation" style={{ textDecoration: "none" }}>
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
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(223, 186, 115, 0.12)",
                    border: "1px solid rgba(223, 186, 115, 0.4)",
                  },
                }}
              >
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: "rgba(223, 186, 115, 0.15)", color: "#C5A059", display: "flex" }}>
                  <Lightbulb sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14 }}>
                    New Innovation
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, mt: 0.5 }}>
                    Log an innovation project
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/dashboard/student/research-management/add-research" style={{ textDecoration: "none" }}>
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
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(223, 186, 115, 0.12)",
                    border: "1px solid rgba(223, 186, 115, 0.4)",
                  },
                }}
              >
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: "rgba(11, 23, 39, 0.05)", color: COLORS.PRIMARY_NAVY, display: "flex" }}>
                  <FileCopyOutlined sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14 }}>
                    Submit Research
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, mt: 0.5 }}>
                    Upload your research papers
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/dashboard/student/resource-access" style={{ textDecoration: "none" }}>
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
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(223, 186, 115, 0.12)",
                    border: "1px solid rgba(223, 186, 115, 0.4)",
                  },
                }}
              >
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: "rgba(16, 185, 129, 0.08)", color: "#10B981", display: "flex" }}>
                  <AutoStories sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14 }}>
                    Explore Resources
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, mt: 0.5 }}>
                    Read books, manuals & articles
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/dashboard/student/profile-settings" style={{ textDecoration: "none" }}>
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
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 25px rgba(223, 186, 115, 0.12)",
                    border: "1px solid rgba(223, 186, 115, 0.4)",
                  },
                }}
              >
                <Box sx={{ p: 1.5, borderRadius: "12px", bgcolor: "rgba(11, 23, 39, 0.05)", color: COLORS.PRIMARY_NAVY, display: "flex" }}>
                  <AccountCircle sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14 }}>
                    Account Settings
                  </Typography>
                  <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, mt: 0.5 }}>
                    Modify profile details
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>

      {/* Dynamic Statistics Cards */}
      <Box sx={{ mt: 5 }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 2.5,
          }}
        >
          Dynamic Analytics
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={glassCardStyle}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Typography sx={{ color: "rgba(0,0,0,0.55)", fontSize: 13, fontWeight: 700 }}>
                  INNOVATION PROJECTS
                </Typography>
                <Box sx={{ p: 1, borderRadius: "8px", bgcolor: "rgba(223, 186, 115, 0.15)", color: "#C5A059", display: "flex" }}>
                  <Lightbulb sx={{ fontSize: 18 }} />
                </Box>
              </Box>
              <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                {innovationLoading ? <CircularProgress size={20} /> : numInnovations}
              </Typography>
              <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 1, fontWeight: 600 }}>
                Total projects logged
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={glassCardStyle}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Typography sx={{ color: "rgba(0,0,0,0.55)", fontSize: 13, fontWeight: 700 }}>
                  APPROVED PROJECTS
                </Typography>
                <Box sx={{ p: 1, borderRadius: "8px", bgcolor: "rgba(16, 185, 129, 0.1)", color: "#10B981", display: "flex" }}>
                  <CheckCircle sx={{ fontSize: 18 }} />
                </Box>
              </Box>
              <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                {innovationLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  innovationData?.filter((i) => i.status?.toUpperCase() === "ACTIVE").length || 0
                )}
              </Typography>
              <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 1, fontWeight: 600 }}>
                Active / verified projects
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={glassCardStyle}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Typography sx={{ color: "rgba(0,0,0,0.55)", fontSize: 13, fontWeight: 700 }}>
                  RESEARCH PAPERS
                </Typography>
                <Box sx={{ p: 1, borderRadius: "8px", bgcolor: "rgba(11, 23, 39, 0.05)", color: COLORS.PRIMARY_NAVY, display: "flex" }}>
                  <FileCopyOutlined sx={{ fontSize: 18 }} />
                </Box>
              </Box>
              <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                {researchLoading ? <CircularProgress size={20} /> : numResearch}
              </Typography>
              <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 1, fontWeight: 600 }}>
                Total papers submitted
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={glassCardStyle}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                <Typography sx={{ color: "rgba(0,0,0,0.55)", fontSize: 13, fontWeight: 700 }}>
                  APPROVED PAPERS
                </Typography>
                <Box sx={{ p: 1, borderRadius: "8px", bgcolor: "rgba(16, 185, 129, 0.1)", color: "#10B981", display: "flex" }}>
                  <MenuBook sx={{ fontSize: 18 }} />
                </Box>
              </Box>
              <Typography sx={{ fontSize: 32, fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                {researchLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  researchData?.filter((r) => r.status?.toUpperCase() === "ACTIVE").length || 0
                )}
              </Typography>
              <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 1, fontWeight: 600 }}>
                Verified academic uploads
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Submissions Pipeline & Activity Feed */}
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid size={12}>
          <Card sx={{ ...glassCardStyle, p: 4, height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: 18,
                  fontWeight: 800,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                Submission Pipeline
              </Typography>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  minHeight: "auto",
                  "& .MuiTab-root": {
                    py: 1,
                    px: 2.5,
                    minHeight: "auto",
                    fontWeight: 700,
                    fontSize: 12,
                    borderRadius: "10px",
                    textTransform: "none",
                    color: "rgba(0,0,0,0.5)",
                    "&.Mui-selected": {
                      color: COLORS.PRIMARY_NAVY,
                    },
                  },
                  "& .MuiTabs-indicator": {
                    bgcolor: "#DFBA73",
                    height: 3,
                    borderRadius: "2px",
                  },
                }}
              >
                <Tab label="Innovations" />
                <Tab label="Research Papers" />
              </Tabs>
            </Box>

            {/* Innovations list */}
            {activeTab === 0 && (
              <Box>
                {innovationLoading ? (
                  <Box sx={{ py: 6, display: "flex", justifyContent: "center" }}>
                    <CircularProgress sx={{ color: COLORS.PRIMARY_NAVY }} />
                  </Box>
                ) : innovationData && innovationData.length > 0 ? (
                  <Stack spacing={2}>
                    {innovationData.slice(0, 3).map((item, index) => (
                      <Box
                        key={item.id || index}
                        sx={{
                          p: 2,
                          borderRadius: "16px",
                          border: "1px solid rgba(0,0,0,0.04)",
                          bgcolor: "rgba(255,255,255,0.4)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.8)",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                          },
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14.5 }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 0.5 }}>
                            Team: {item.team?.title || "Individual"}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Chip
                            label={item.status || "Pending"}
                            size="small"
                            sx={{
                              fontWeight: 800,
                              fontSize: 10,
                              textTransform: "uppercase",
                              borderRadius: "8px",
                              bgcolor:
                                item.status?.toUpperCase() === "ACTIVE"
                                  ? "#ECFDF5"
                                  : item.status?.toUpperCase() === "PENDING"
                                    ? "#FFFBEB"
                                    : "#FEF2F2",
                              color:
                                item.status?.toUpperCase() === "ACTIVE"
                                  ? "#10B981"
                                  : item.status?.toUpperCase() === "PENDING"
                                    ? "#F59E0B"
                                    : "#EF4444",
                            }}
                          />
                          <Link href={`/dashboard/student/innovation-management/innovation-details/${item.id}`}>
                            <BeamButton
                              size="small"
                              sx={{
                                color: COLORS.PRIMARY_NAVY,
                                textTransform: "none",
                                fontWeight: 700,
                                fontSize: 12,
                                minWidth: "auto",
                              }}
                            >
                              Details
                            </BeamButton>
                          </Link>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Box sx={{ py: 6, textAlign: "center" }}>
                    <Lightbulb sx={{ fontSize: 48, color: "rgba(0,0,0,0.15)", mb: 1.5 }} />
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.4)" }}>
                      No innovations logged yet
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: "rgba(0,0,0,0.35)", mt: 0.5, mb: 2 }}>
                      Track your academic developments by registering your first innovation
                    </Typography>
                    <Link href="/dashboard/student/innovation-management/add-innovation" style={{ textDecoration: "none" }}>
                      <BeamButton
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: COLORS.PRIMARY_NAVY,
                          color: COLORS.PRIMARY_NAVY,
                          borderRadius: "8px",
                          textTransform: "none",
                          fontWeight: 700,
                        }}
                      >
                        Create Project
                      </BeamButton>
                    </Link>
                  </Box>
                )}
              </Box>
            )}

            {/* Research papers list */}
            {activeTab === 1 && (
              <Box>
                {researchLoading ? (
                  <Box sx={{ py: 6, display: "flex", justifyContent: "center" }}>
                    <CircularProgress sx={{ color: COLORS.PRIMARY_NAVY }} />
                  </Box>
                ) : researchData && researchData.length > 0 ? (
                  <Stack spacing={2}>
                    {researchData.slice(0, 3).map((item, index) => (
                      <Box
                        key={item.id || index}
                        sx={{
                          p: 2,
                          borderRadius: "16px",
                          border: "1px solid rgba(0,0,0,0.04)",
                          bgcolor: "rgba(255,255,255,0.4)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.8)",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                          },
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontSize: 14.5 }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ color: "rgba(0,0,0,0.4)", fontSize: 11, mt: 0.5 }}>
                            Topic: {item.topic} • {moment(item.createdAt).format("DD MMM YYYY")}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Chip
                            label={item.status || "Pending"}
                            size="small"
                            sx={{
                              fontWeight: 800,
                              fontSize: 10,
                              textTransform: "uppercase",
                              borderRadius: "8px",
                              bgcolor:
                                item.status?.toUpperCase() === "ACTIVE"
                                  ? "#ECFDF5"
                                  : item.status?.toUpperCase() === "PENDING"
                                    ? "#FFFBEB"
                                    : "#FEF2F2",
                              color:
                                item.status?.toUpperCase() === "ACTIVE"
                                  ? "#10B981"
                                  : item.status?.toUpperCase() === "PENDING"
                                    ? "#F59E0B"
                                    : "#EF4444",
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Box sx={{ py: 6, textAlign: "center" }}>
                    <FileCopyOutlined sx={{ fontSize: 48, color: "rgba(0,0,0,0.15)", mb: 1.5 }} />
                    <Typography sx={{ fontSize: 14, fontWeight: 700, color: "rgba(0,0,0,0.4)" }}>
                      No research papers submitted yet
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: "rgba(0,0,0,0.35)", mt: 0.5, mb: 2 }}>
                      Submit your research papers to get them verified and published
                    </Typography>
                    <Link href="/dashboard/student/research-management/add-research" style={{ textDecoration: "none" }}>
                      <BeamButton
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: COLORS.PRIMARY_NAVY,
                          color: COLORS.PRIMARY_NAVY,
                          borderRadius: "8px",
                          textTransform: "none",
                          fontWeight: 700,
                        }}
                      >
                        Submit Paper
                      </BeamButton>
                    </Link>
                  </Box>
                )}
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
