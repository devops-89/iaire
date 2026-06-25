"use client";
import React, { useState, useEffect } from "react";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Tabs,
  Tab,
  Stack,
  Chip,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  CreditCard,
  CheckCircle,
  TrendingUp,
  MilitaryTech,
  InfoOutlined,
  School,
  AutoStories,
  Lightbulb,
  WorkspacePremium,
} from "@mui/icons-material";
import { roboto, montserrat } from "@/utils/fonts";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { useSignup } from "@/store/useSignup";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import moment from "moment";
import { useModal } from "@/store/useModal";
import Plans from "@/components/modals/common/Plans";

// Design Styling Helpers
const glassCardStyle = {
  p: 4,
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.08)",
  },
};

const goldGradient = "linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)";
const navyGradient = "linear-gradient(135deg, #1A2847 0%, #111A30 100%)";
const glassBorder = "1px solid rgba(229, 231, 235, 0.5)";

const MembershipManagement = () => {
  const [tabValue, setTabValue] = useState(0);
  const { showModal } = useModal();
  const { data: studentData } = useSignup();
  const { loading: userLoading } = getUserDetails();

  const { innovationData, fetchInnovationList } = useGetAllInnovation();
  const { researchData, fetchResearchData } = useGetAllResearch();

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const numInnovations = innovationData?.length || 0;
  const numResearch = researchData?.length || 0;

  // Compute membership status
  const isMember =
    ((studentData?.payments?.length ?? 0) > 0 &&
      studentData?.payments?.some(
        (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
      )) ??
    false;

  const activeMembership = studentData?.payments?.find(
    (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
  );

  // Compute Upgrade Eligibility
  let currentTier = "Student Member";
  let nextTier = "Student Innovation Scholar";
  let nextTierProgress = 0;

  // Requirements Met Flags
  const reqTrainingCompleted = true; // Mocked as completed for active student
  const reqHasInnovation = numInnovations >= 1;
  const reqHasResearch = numResearch >= 1;
  const reqScholarMet = reqHasInnovation || reqHasResearch;

  const reqFellowMentor = numInnovations >= 2 || numResearch >= 2;
  const reqFellowTeamMentored = numInnovations >= 3 || numResearch >= 3;

  if (reqScholarMet) {
    if (reqFellowMentor && reqFellowTeamMentored) {
      currentTier = "Fellow of Innovation or Research";
      nextTier = "Fellow Student of Innovation or Research";
      nextTierProgress = 60; // Progress towards highest student fellowship
    } else {
      currentTier = "Student Innovation Scholar";
      nextTier = "Fellow of Innovation or Research";
      let progress = 20; // completed scholar level
      if (reqFellowMentor) progress += 40;
      if (reqFellowTeamMentored) progress += 40;
      nextTierProgress = progress;
    }
  } else {
    currentTier = "Student Member";
    nextTier = "Student Innovation Scholar";
    // scholar needs training + (1 innovation OR 1 research)
    let progress = 50; // training is done
    if (reqHasInnovation || reqHasResearch) {
      progress += 50;
    }
    nextTierProgress = progress;
  }

  // Certificate Download Generator via Canvas API
  const handleDownloadCertificate = () => {
    // 1. Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1130; // standard A4 certificate ratio
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 2. Draw background
    ctx.fillStyle = "#FAF8F5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Draw outer elegant border
    ctx.lineWidth = 16;
    ctx.strokeStyle = "#1A2847"; // Navy
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // 4. Draw inner gold border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#DFBA73"; // Gold
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

    // 5. Draw decorative corner brackets in gold
    const drawCorner = (x: number, y: number, xFact: number, yFact: number) => {
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#C5A059";
      ctx.moveTo(x + 50 * xFact, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + 50 * yFact);
      ctx.stroke();
    };
    drawCorner(55, 55, 1, 1);
    drawCorner(canvas.width - 55, 55, -1, 1);
    drawCorner(55, canvas.height - 55, 1, -1);
    drawCorner(canvas.width - 55, canvas.height - 55, -1, -1);

    // 6. Draw certificate titles
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Academy header
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText("INTERNATIONAL ACADEMY FOR INNOVATION, RESEARCH AND ENTREPRENEURSHIP", canvas.width / 2, 180);

    // Small divider line
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 150, 220);
    ctx.lineTo(canvas.width / 2 + 150, 220);
    ctx.stroke();

    // Main Certificate Header
    ctx.fillStyle = "#C5A059";
    ctx.font = "italic 48px Georgia, serif";
    ctx.fillText("Certificate of Student Membership", canvas.width / 2, 280);

    // Certificate Body text
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "20px Georgia, serif";
    ctx.fillText("This is to officially certify that", canvas.width / 2, 380);

    // Student Name
    const studentName = studentData ? `${studentData.firstName} ${studentData.lastName}` : "IAIRE Student";
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 56px sans-serif";
    ctx.fillText(studentName.toUpperCase(), canvas.width / 2, 470);

    // Name underlining
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 250, 520);
    ctx.lineTo(canvas.width / 2 + 250, 520);
    ctx.stroke();

    // Standing text
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "22px Georgia, serif";
    ctx.fillText("is hereby admitted as a registered Student Member in good standing of the Academy,", canvas.width / 2, 580);
    ctx.fillText("entitled to all rights, benefits, and privileges pertaining thereto.", canvas.width / 2, 620);

    // Membership code and Date
    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#6b7280";
    const membershipCode = activeMembership?.membership?.membershipCode || "N/A";
    const issueDate = activeMembership?.createdAt 
      ? moment(activeMembership.createdAt).format("DD-MMMM-YYYY") 
      : moment().format("DD-MMMM-YYYY");

    ctx.fillText(`MEMBERSHIP ID: ${membershipCode}`, canvas.width / 2, 710);
    ctx.fillText(`DATE OF ISSUANCE: ${issueDate}`, canvas.width / 2, 750);

    // 7. Draw Signatures
    ctx.fillStyle = "#1A2847";
    ctx.font = "18px sans-serif";
    
    // Left signature line
    ctx.fillText("Dr. Arthur Pendelton", canvas.width / 2 - 300, 880);
    ctx.fillText("President, IAIRE Board", canvas.width / 2 - 300, 915);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#9ca3af";
    ctx.moveTo(canvas.width / 2 - 420, 850);
    ctx.lineTo(canvas.width / 2 - 180, 850);
    ctx.stroke();

    // Right signature line
    ctx.fillText("Margaret Vance", canvas.width / 2 + 300, 880);
    ctx.fillText("Registrar, IAIRE Academic Council", canvas.width / 2 + 300, 915);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 180, 850);
    ctx.lineTo(canvas.width / 2 + 420, 850);
    ctx.stroke();

    // 8. Draw gold crest/seal in the bottom center
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 900, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#DFBA73";
    ctx.fill();
    ctx.strokeStyle = "#C5A059";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Star icon inside crest
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("★", canvas.width / 2, 895);
    ctx.font = "bold 11px sans-serif";
    ctx.fillText("SEAL", canvas.width / 2, 918);

    // 9. Trigger download
    const link = document.createElement("a");
    link.download = `IAIRE_Membership_Certificate_${studentName.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const renderDuePayment = () => {
    return (
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              {isMember ? (
                // Digital Membership Pass Card (Active)
                <Card
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    background: navyGradient,
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(26, 40, 71, 0.15)",
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-20%",
                      right: "-20%",
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      background: "rgba(223, 186, 115, 0.08)",
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Stack spacing={4}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 800,
                          fontFamily: roboto.style.fontFamily,
                          color: "#DFBA73",
                          letterSpacing: "1px",
                        }}
                      >
                        IAIRE ACADEMY PASS
                      </Typography>
                      <Chip
                        icon={<WorkspacePremium sx={{ color: "#1A2847 !important" }} />}
                        label="ACTIVE"
                        sx={{
                          bgcolor: "#DFBA73",
                          color: "#1A2847",
                          fontWeight: 800,
                          px: 1,
                        }}
                      />
                    </Stack>

                    <Box sx={{ my: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.5px" }}
                      >
                        MEMBER LEVEL
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          fontFamily: roboto.style.fontFamily,
                          textTransform: "capitalize",
                          color: "#fff",
                          mt: 0.5,
                        }}
                      >
                        {activeMembership?.membership?.type?.replace("-", " ") || "Student Member"}
                      </Typography>
                    </Box>

                    <Grid container spacing={3}>
                      <Grid size={6}>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}
                        >
                          PASSCODE / MEMBERSHIP ID
                        </Typography>
                        <Typography sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>
                          {activeMembership?.membership?.membershipCode || "N/A"}
                        </Typography>
                      </Grid>
                      <Grid size={6}>
                        <Typography
                          variant="caption"
                          sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}
                        >
                          EXPIRATION DATE
                        </Typography>
                        <Typography sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>
                          {activeMembership?.membership?.expiryDate
                            ? moment(activeMembership.membership.expiryDate).format("DD-MMMM-YYYY")
                            : "Non-Expiring"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </Card>
              ) : (
                // Due Payment Action Card
                <Card sx={glassCardStyle}>
                  <Stack spacing={3}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background: "rgba(245, 158, 11, 0.1)",
                          display: "flex",
                        }}
                      >
                        <InfoOutlined sx={{ color: "#F59E0B" }} />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontFamily: roboto.style.fontFamily,
                          color: COLORS.PRIMARY_NAVY,
                        }}
                      >
                        Membership Payment Outstanding
                    </Typography>
                    </Stack>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily: montserrat.style.fontFamily }}
                    >
                      Your student membership is currently inactive. Complete your annual dues payment to instantly unlock innovation submissions, research reviews, playbooks, and certificates.
                  </Typography>

                    <Box sx={{ borderTop: glassBorder, pt: 3 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                        <Box>
                          <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
                            MEMBERSHIP FEE
                        </Typography>
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: 800, color: COLORS.PRIMARY_NAVY, fontFamily: roboto.style.fontFamily }}
                          >
                            $99.00 <Typography component="span" variant="caption" sx={{ color: "text.secondary" }}>/year</Typography>
                          </Typography>
                        </Box>
                        <Chip label="UNPAID" color="warning" sx={{ fontWeight: 800 }} />
                      </Stack>

                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: goldGradient,
                          color: "#fff",
                          fontWeight: 800,
                          fontSize: 16,
                          p: 1.8,
                          borderRadius: "14px",
                          textTransform: "none",
                          boxShadow: "0 10px 20px rgba(223, 186, 115, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.01)",
                            boxShadow: "0 12px 24px rgba(223, 186, 115, 0.3)",
                          },
                        }}
                        onClick={() => showModal(<Plans role={USER_ROLES.STUDENT} />)}
                      >
                        Pay Dues & Activate Membership
                    </Button>
                    </Box>
                  </Stack>
                </Card>
              )}

              {/* Certificate Download Card */}
              {isMember && (
                <Card sx={glassCardStyle}>
                  <Stack spacing={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        color: COLORS.PRIMARY_NAVY,
                      }}
                    >
                      Certificate Download
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily: montserrat.style.fontFamily }}
                    >
                      Download your official IAIRE Membership Certificate to showcase your academic standing and credentials.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        background: goldGradient,
                        color: "#fff",
                        fontWeight: 800,
                        p: 1.8,
                        borderRadius: "14px",
                        textTransform: "none",
                        boxShadow: "0 10px 20px rgba(223, 186, 115, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 12px 24px rgba(223, 186, 115, 0.2)",
                        },
                      }}
                      onClick={handleDownloadCertificate}
                    >
                      Download Membership Certificate
                    </Button>
                  </Stack>
                </Card>
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            {/* Membership Privileges */}
            <Card sx={{ ...glassCardStyle, border: glassBorder }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontFamily: roboto.style.fontFamily,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 3,
                }}
              >
                Access & Privileges
              </Typography>

              <Stack spacing={2.5}>
                {[
                  "Submit Innovations for Official Patenting review",
                  "Submit Research Papers to journals and councils",
                  "Academy-approved playbooks, templates, and workshops",
                  "Direct student-mentor guidance features",
                  "Nomination eligibility to IAIRE Advancement Ranks",
                ].map((privilege, i) => (
                  <Stack key={i} direction="row" spacing={1.8} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(223, 186, 115, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        mt: 0.2,
                      }}
                    >
                      <CheckCircle sx={{ color: "#C5A059", fontSize: 16 }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        fontFamily: montserrat.style.fontFamily,
                        color: "text.primary",
                      }}
                    >
                      {privilege}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>

          <Grid size={12}>
            {/* Payment History */}
            <Card sx={glassCardStyle}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontFamily: roboto.style.fontFamily,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 3,
                }}
              >
                Payment & Billing Records
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ "& th": { borderBottom: "2px solid rgba(0,0,0,0.06)", fontWeight: 700 } }}>
                      <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Invoice / Code</TableCell>
                      <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Membership Type</TableCell>
                      <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Billing Date</TableCell>
                      <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Dues Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {studentData?.payments && studentData.payments.length > 0 ? (
                      studentData.payments.map((payment: any, index: number) => (
                        <TableRow key={payment.id || index} hover sx={{ "& td": { borderBottom: "1px solid rgba(0,0,0,0.04)" } }}>
                          <TableCell sx={{ fontFamily: montserrat.style.fontFamily, fontWeight: 600 }}>
                            {payment.membership?.membershipCode || "-"}
                          </TableCell>
                          <TableCell sx={{ textTransform: "capitalize", fontFamily: montserrat.style.fontFamily }}>
                            {payment.membership?.type?.replace("-", " ") || "Student Membership"}
                          </TableCell>
                          <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                            {payment.createdAt
                              ? moment(payment.createdAt).format("DD-MMMM-YYYY")
                              : "-"}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={payment.status || "UNPAID"}
                              size="small"
                              sx={{
                                fontWeight: 800,
                                fontSize: "11px",
                                textTransform: "uppercase",
                                ...(payment.status?.toUpperCase() === USER_STATUS.ACTIVE.toUpperCase()
                                  ? { bgcolor: "#ECFDF5", color: "#10B981" }
                                  : { bgcolor: "#FFFBEB", color: "#F59E0B" }),
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 6, color: "text.secondary" }}>
                          No payment invoices found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderUpgradeMembership = () => {
    return (
      <Box sx={{ mt: 3 }}>
        {/* Dynamic Eligibility Dashboard Gauge */}
        <Card
          sx={{
            ...glassCardStyle,
            p: 5,
            background: "linear-gradient(135deg, #fff 0%, #F9F7F5 100%)",
          }}
        >
          <Grid container spacing={5} alignItems="center">
            {/* Left Gauge */}
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRight: { md: `1.5px solid rgba(0,0,0,0.06)` },
              }}
            >
              <Box sx={{ position: "relative", display: "inline-flex", mb: 3 }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={146}
                  thickness={6}
                  sx={{ color: "rgba(0,0,0,0.04)", position: "absolute" }}
                />
                <CircularProgress
                  variant="determinate"
                  value={nextTierProgress}
                  size={146}
                  thickness={6}
                  sx={{
                    color: "#C5A059",
                    "& .MuiCircularProgress-circle": {
                      strokeLinecap: "round",
                    },
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      fontFamily: roboto.style.fontFamily,
                      color: COLORS.PRIMARY_NAVY,
                    }}
                  >
                    {nextTierProgress}%
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "1px" }}
                  >
                    ELIGIBLE
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  fontFamily: roboto.style.fontFamily,
                  textAlign: "center",
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                {currentTier}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#C5A059", fontWeight: 700, mt: 0.5, letterSpacing: "0.5px" }}
              >
                Next Rank: {nextTier}
              </Typography>
            </Grid>

            {/* Right Criteria Details */}
            <Grid size={{ xs: 12, md: 8 }} sx={{ pl: { md: 5 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontFamily: roboto.style.fontFamily,
                  mb: 1,
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                Advancement Tracker
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 4, fontFamily: montserrat.style.fontFamily }}
              >
                Your academic advancement is evaluated dynamically based on standard criteria including training completion, submissions, and research mentorship.
              </Typography>

              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>
                      Innovation Records ({numInnovations} / 1 Submitted)
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: numInnovations >= 1 ? "#10B981" : "#6B7280" }}>
                      {numInnovations >= 1 ? "Requirement Met" : "1 Required"}
                    </Typography>
                  </Stack>
                  <Box sx={{ width: "100%", height: 6, borderRadius: 3, bg: "#E5E7EB", overflow: "hidden" }}>
                    <Box
                      sx={{
                        width: `${Math.min(numInnovations * 100, 100)}%`,
                        height: "100%",
                        background: numInnovations >= 1 ? goldGradient : "#E5E7EB",
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, fontFamily: montserrat.style.fontFamily }}>
                      Research Records ({numResearch} / 1 Submitted)
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: numResearch >= 1 ? "#10B981" : "#6B7280" }}>
                      {numResearch >= 1 ? "Requirement Met" : "1 Required"}
                    </Typography>
                  </Stack>
                  <Box sx={{ width: "100%", height: 6, borderRadius: 3, bg: "#E5E7EB", overflow: "hidden" }}>
                    <Box
                      sx={{
                        width: `${Math.min(numResearch * 100, 100)}%`,
                        height: "100%",
                        background: numResearch >= 1 ? goldGradient : "#E5E7EB",
                        borderRadius: 3,
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Card>

        {/* Custom Timeline Layout */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontFamily: roboto.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mb: 4,
            mt: 5,
            textAlign: "center",
          }}
        >
          IAIRE Advancement Roadmap
        </Typography>

        <Stack spacing={4} sx={{ position: "relative", px: { xs: 1, md: 3 } }}>
          {[
            {
              tier: "Tier 1: Student Member",
              desc: "Entry-level designation conferred upon students admitted to the Academy; eligible to participate in Academy-approved programs, competitions, mentorship initiatives, training modules, and research or innovation activities.",
              criteria: ["Admitted to the Academy", "Access to Academy basic resources"],
              met: true,
              icon: <School />,
            },
            {
              tier: "Tier 2 & 3: Student Scholar / Associate",
              desc: "Demonstrate competencies prescribed under the published Standards of the Academy through training completion and patent-pending innovations or journal research papers.",
              criteria: [
                "Successfully complete Academy-approved training pathway",
                "At least one (1) patent-pending innovation OR one (1) accepted research paper",
              ],
              met: reqScholarMet,
              icon: <AutoStories />,
            },
            {
              tier: "Tier 4: Fellow of Innovation or Research",
              desc: "Sustained achievement, leadership, and mentorship capability. Guide student teams in developing inventions and papers.",
              criteria: [
                "Serve as Assistant Mentor, peer mentor, or student leader",
                "Mentor at least one (1) student team in developing patent-pending innovation or peer-reviewed research paper",
              ],
              met: reqFellowMentor,
              icon: <Lightbulb />,
            },
            {
              tier: "Tier 5: Fellow Student of Innovation or Research",
              desc: "The highest student distinction. Requires Associate Fellow status, personal patents/publications, and mentorship of multiple student teams.",
              criteria: [
                "Personal achievement of at least one (1) granted patent and/or peer-reviewed publication",
                "Successful mentorship of at least two (2) student teams",
                "Development of innovation recognized of outstanding significance by IAIRE",
              ],
              met: false,
              icon: <MilitaryTech />,
            },
          ].map((step, idx) => (
            <Card
              key={idx}
              sx={{
                ...glassCardStyle,
                p: 3.5,
                border: step.met ? "1px solid rgba(16, 185, 129, 0.2)" : glassBorder,
                position: "relative",
              }}
            >
              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={{ xs: 12, sm: 1 }} sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "18px",
                      background: step.met ? goldGradient : "rgba(0, 0, 0, 0.05)",
                      color: step.met ? "#fff" : "rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: step.met ? "0 8px 20px rgba(223, 186, 115, 0.3)" : "none",
                    }}
                  >
                    {step.icon}
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 11 }}>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontFamily: roboto.style.fontFamily,
                          color: COLORS.PRIMARY_NAVY,
                        }}
                      >
                        {step.tier}
                      </Typography>
                      <Chip
                        label={step.met ? "COMPLETED" : "LOCKED"}
                        size="small"
                        color={step.met ? "success" : "default"}
                        sx={{ fontWeight: 800, fontSize: "10px" }}
                      />
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily: montserrat.style.fontFamily, mb: 1 }}
                    >
                      {step.desc}
                    </Typography>

                    <Box sx={{ pt: 1, borderTop: "1px dashed rgba(0,0,0,0.06)" }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", mb: 1, display: "block" }}>
                        CRITERIA CHECKLIST:
                      </Typography>
                      <Stack spacing={1}>
                        {step.criteria.map((crit, cIdx) => (
                          <Stack key={cIdx} direction="row" spacing={1.5} alignItems="center">
                            {step.met ? (
                              <CheckCircle sx={{ color: "#10B981", fontSize: 16 }} />
                            ) : (
                              <Box sx={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(0,0,0,0.2)" }} />
                            )}
                            <Typography variant="caption" sx={{ color: step.met ? "text.primary" : "text.secondary", fontWeight: 500 }}>
                              {crit}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <StudentDashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: roboto.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
          }}
        >
          Membership Management
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          View your current plan, billing history, and upgrade options.
        </Typography>
      </Box>

      {/* Modern Glassmorphic Tabs */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 4,
          "& .MuiTabs-indicator": {
            height: "3px",
            borderRadius: "3px",
            background: goldGradient,
          },
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root": {
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              fontSize: "16px",
              pb: 2,
              color: "text.secondary",
              "&.Mui-selected": {
                color: COLORS.PRIMARY_NAVY,
              },
            },
          }}
        >
          <Tab icon={<CreditCard sx={{ fontSize: 18 }} />} iconPosition="start" label="Due Payment" />
          <Tab icon={<TrendingUp sx={{ fontSize: 18 }} />} iconPosition="start" label="Upgrade Membership" />
        </Tabs>
      </Box>

      {tabValue === 0 ? renderDuePayment() : renderUpgradeMembership()}
    </StudentDashboardLayout>
  );
};

export default MembershipManagement;
