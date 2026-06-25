"use client";
import React, { useState, useEffect } from "react";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
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
  Divider,
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
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";
import moment from "moment";
import { useModal } from "@/store/useModal";
import Plans from "@/components/modals/common/Plans";

// Premium Glassmorphic Design Helpers
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

const InstitutionMembershipManagement = () => {
  const [tabValue, setTabValue] = useState(0);
  const { showModal } = useModal();
  const { institutionData } = useSignup();

  // Fetch school-level counts from API hooks
  const { innovationData, fetchInnovationList, loading: innovationLoading } = useGetAllInnovation();
  const { researchData, fetchResearchData, loading: researchLoading } = useGetAllResearch();

  // Fetch teachers count
  const { userData: teachersData, fetchUserData: fetchTeachers, loading: teachersLoading } = useGetAllUser();
  // Fetch students count
  const { userData: studentsData, fetchUserData: fetchStudents, loading: studentsLoading } = useGetAllUser();

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();

    if (institutionData?.school?.id) {
      fetchTeachers({
        role: USER_ROLES.TEACHER,
        schoolId: institutionData.school.id,
      } as any);

      fetchStudents({
        role: USER_ROLES.STUDENT,
        schoolId: institutionData.school.id,
      } as any);
    }
  }, [institutionData]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const numInnovations = innovationData?.length || 0;
  const numResearch = researchData?.length || 0;
  const numEducators = teachersData?.data?.length || 0;

  // Compute active membership status
  const isMember =
    ((institutionData?.payments?.length ?? 0) > 0 &&
      institutionData?.payments?.some(
        (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
      )) ??
    false;

  const activeMembership = institutionData?.payments?.find(
    (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
  );

  // Upgrade Criteria Eligibility Logic based on screenshots
  let currentTier = "Institutional Member";
  let nextTier = "Certified Institutional Member";
  let progressPercent = 0;

  // Criteria Met Flags
  const isCertifiedEligible = numEducators >= 2;
  const isAssociateEligible = isCertifiedEligible && numInnovations >= 3 && numResearch >= 3;
  const isFellowEligible = isCertifiedEligible && numEducators >= 4 && numInnovations > 5 && numResearch > 5;

  if (isFellowEligible) {
    currentTier = "Fellow Institution";
    nextTier = "Max Tier Achieved";
    progressPercent = 100;
  } else if (isAssociateEligible) {
    currentTier = "Associate Fellow Institution";
    nextTier = "Fellow Institution";
    // Progress towards Fellow: requires 4 educators, 6 innovations, 6 research
    const met1 = numEducators >= 4 ? 1 : 0;
    const met2 = numInnovations > 5 ? 1 : 0;
    const met3 = numResearch > 5 ? 1 : 0;
    progressPercent = Math.round(((met1 + met2 + met3) / 3) * 100);
  } else if (isCertifiedEligible) {
    currentTier = "Certified Institutional Member";
    nextTier = "Associate Fellow Institution";
    // Progress towards Associate: requires 3 innovations, 3 research
    const met1 = Math.min(numInnovations, 3);
    const met2 = Math.min(numResearch, 3);
    progressPercent = Math.round(((met1 + met2) / 6) * 100);
  } else {
    currentTier = "Institutional Member";
    nextTier = "Certified Institutional Member";
    // Progress towards Certified: requires 2 educators
    const met = Math.min(numEducators, 2);
    progressPercent = Math.round((met / 2) * 100);
  }

  // Next Tier checklist definitions based on screenshots
  let checklist: { text: string; met: boolean }[] = [];
  if (currentTier === "Institutional Member") {
    checklist = [
      { text: "Admission into the Academy & active membership dues", met: isMember },
      { text: "Maintain not fewer than 2 IAIRE-trained and certified educators", met: numEducators >= 2 },
    ];
  } else if (currentTier === "Certified Institutional Member") {
    checklist = [
      { text: "Meet all requirements for Certified Institutional Member status", met: isCertifiedEligible },
      { text: "Minimum of 3 patents or logged innovation contributions", met: numInnovations >= 3 },
      { text: "Publication of at least 3 peer-reviewed research papers", met: numResearch >= 3 },
    ];
  } else {
    // Associate Fellow upgrading to Fellow
    checklist = [
      { text: "Maintenance of a minimum of 4 IAIRE-trained certified educators", met: numEducators >= 4 },
      { text: "Excellence through more than 5 granted patents", met: numInnovations > 5 },
      { text: "More than 5 peer-reviewed research publications", met: numResearch > 5 },
    ];
  }

  // Dynamic canvas certificate downloader
  const handleDownloadCertificate = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1130;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw background
    ctx.fillStyle = "#FAF8F5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw elegant navy border
    ctx.lineWidth = 16;
    ctx.strokeStyle = "#1A2847";
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Draw gold inner border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#DFBA73";
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

    // Draw gold decorative corners
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

    // Header Title
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText("INTERNATIONAL ACADEMY FOR INNOVATION, RESEARCH AND ENTREPRENEURSHIP", canvas.width / 2, 180);

    // Divider Line
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 150, 220);
    ctx.lineTo(canvas.width / 2 + 150, 220);
    ctx.stroke();

    // Main Certificate title
    ctx.fillStyle = "#C5A059";
    ctx.font = "italic 44px Georgia, serif";
    ctx.fillText("Certificate of Institutional Accreditation", canvas.width / 2, 280);

    // Certification context
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "20px Georgia, serif";
    ctx.fillText("This is to officially certify that", canvas.width / 2, 380);

    // School Name
    const schoolName = institutionData?.school?.name || "IAIE ACADEMIC INSTITUTION";
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 50px sans-serif";
    ctx.fillText(schoolName.toUpperCase(), canvas.width / 2, 470);

    // Underline
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 250, 520);
    ctx.lineTo(canvas.width / 2 + 250, 520);
    ctx.stroke();

    // Dues and active status subtext
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "20px Georgia, serif";
    ctx.fillText(`is hereby accredited as a registered ${currentTier} in good standing of the Academy,`, canvas.width / 2, 580);
    ctx.fillText("entitled to all rights, benefits, and privileges pertaining thereto.", canvas.width / 2, 620);

    // Metadata
    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#6b7280";
    const code = activeMembership?.membership?.membershipCode || "PENDING";
    const date = activeMembership?.createdAt
      ? moment(activeMembership.createdAt).format("DD-MMMM-YYYY")
      : moment().format("DD-MMMM-YYYY");

    ctx.fillText(`ACCREDITATION ID: ${code}`, canvas.width / 2, 710);
    ctx.fillText(`ACCEDITED ON: ${date}`, canvas.width / 2, 750);

    // Board Signatures
    ctx.fillStyle = "#1A2847";
    ctx.font = "18px sans-serif";

    ctx.fillText("Dr. Arthur Pendelton", canvas.width / 2 - 300, 880);
    ctx.fillText("President, IAIRE Board", canvas.width / 2 - 300, 915);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#9ca3af";
    ctx.moveTo(canvas.width / 2 - 420, 850);
    ctx.lineTo(canvas.width / 2 - 180, 850);
    ctx.stroke();

    ctx.fillText("Margaret Vance", canvas.width / 2 + 300, 880);
    ctx.fillText("Registrar, IAIRE Academic Council", canvas.width / 2 + 300, 915);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 180, 850);
    ctx.lineTo(canvas.width / 2 + 420, 850);
    ctx.stroke();

    // Trigger PNG Download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `IAIE_Accreditation_Certificate_${schoolName.replace(/\s+/g, "_")}.png`;
    link.href = dataUrl;
    link.click();
  };

  const renderDuesActivePass = () => {
    return (
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={4}>
            {/* Active Subscription Box */}
            {isMember ? (
              <Card
                sx={{
                  background: navyGradient,
                  borderRadius: "28px",
                  p: 4,
                  color: "#fff",
                  boxShadow: "0 12px 30px rgba(26, 40, 71, 0.25)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>
                        MEMBERSHIP ACCREDITATION
                      </Typography>
                      <Typography sx={{ fontWeight: 800, fontSize: 24, fontFamily: roboto.style.fontFamily, mt: 0.5 }}>
                        {currentTier}
                      </Typography>
                    </Box>
                    <Chip
                      label="Active Pass"
                      color="success"
                      sx={{
                        fontWeight: 800,
                        fontSize: 12,
                        textTransform: "uppercase",
                        bgcolor: "rgba(16, 185, 129, 0.2)",
                        color: "#34D399",
                      }}
                    />
                  </Box>

                  <Grid container spacing={3} sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Grid size={6}>
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>ACCREDITATION ID</Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: 15, mt: 0.5 }}>
                        #{activeMembership?.membership?.membershipCode}
                      </Typography>
                    </Grid>
                    <Grid size={6}>
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>EXPIRY DATE</Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: 15, mt: 0.5 }}>
                        {activeMembership?.membership?.expiryDate
                          ? moment(activeMembership.membership.expiryDate).format("DD MMM YYYY")
                          : "Ongoing"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Card>
            ) : (
              <Card
                sx={{
                  p: 4,
                  borderRadius: "28px",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  bgcolor: "#FEF2F2",
                }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography sx={{ color: "#EF4444", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                        UNPAID ACCOUNT DUES
                      </Typography>
                      <Typography sx={{ fontWeight: 800, fontSize: 22, color: COLORS.PRIMARY_NAVY, mt: 0.5, fontFamily: roboto.style.fontFamily }}>
                        Academics Dues Pending
                      </Typography>
                    </Box>
                    <Chip
                      label="Pending"
                      sx={{
                        fontWeight: 800,
                        fontSize: 12,
                        textTransform: "uppercase",
                        bgcolor: "rgba(239, 68, 68, 0.15)",
                        color: "#EF4444",
                      }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.5, fontFamily: montserrat.style.fontFamily }}>
                    Your institution registration requires activation payment to process academic certificates, educator certification sponsorships, and student credentials.
                  </Typography>

                  <Box sx={{ mt: 1 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: goldGradient,
                        color: "#fff",
                        fontWeight: 800,
                        px: 4,
                        py: 1.8,
                        borderRadius: "14px",
                        textTransform: "none",
                        boxShadow: "0 10px 20px rgba(223, 186, 115, 0.2)",
                        "&:hover": {
                          transform: "scale(1.01)",
                          boxShadow: "0 12px 24px rgba(223, 186, 115, 0.3)",
                        },
                      }}
                      onClick={() => showModal(<Plans role={USER_ROLES.SCHOOL} />)}
                    >
                      Pay Dues & Activate Institution
                    </Button>
                  </Box>
                </Stack>
              </Card>
            )}

            {/* Certificate download */}
            {isMember && (
              <Card sx={glassCardStyle}>
                <Stack spacing={3}>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY }}>
                    Accreditation Certificate
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: montserrat.style.fontFamily }}>
                    Download your official IAIRE Accreditation Certificate to display in your institution and academic publications.
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
                      "&:hover": {
                        transform: "scale(1.01)",
                        boxShadow: "0 12px 24px rgba(223, 186, 115, 0.2)",
                      },
                    }}
                    onClick={handleDownloadCertificate}
                  >
                    Download Accreditation Certificate
                  </Button>
                </Stack>
              </Card>
            )}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          {/* Institutional Privileges */}
          <Card sx={{ ...glassCardStyle, border: glassBorder }}>
            <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY, mb: 3 }}>
              Institution Privileges
            </Typography>

            <Stack spacing={2.5}>
              {[
                "Sponsor Educators for IAIRE training and certification",
                "Review and nominate student research contributions",
                "Verify and coordinate student startup proposals",
                "Access exclusive institution playbooks and curricula",
                "Utilize official IAIRE credentials on campus branding",
              ].map((privilege, idx) => (
                <Stack key={idx} direction="row" spacing={1.8} alignItems="flex-start">
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
                  <Typography variant="body2" sx={{ fontWeight: 500, fontFamily: montserrat.style.fontFamily, color: "text.primary" }}>
                    {privilege}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>

        {/* Invoice List */}
        <Grid size={12}>
          <Card sx={glassCardStyle}>
            <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY, mb: 3 }}>
              Accreditation & Billing History
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ "& th": { borderBottom: "2px solid rgba(0,0,0,0.06)", fontWeight: 700 } }}>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Invoice ID</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Level Type</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Billing Date</TableCell>
                    <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {institutionData?.payments && institutionData.payments.length > 0 ? (
                    institutionData.payments.map((payment: any, index: number) => (
                      <TableRow key={payment.id || index} hover sx={{ "& td": { borderBottom: "1px solid rgba(0,0,0,0.04)" } }}>
                        <TableCell sx={{ fontFamily: montserrat.style.fontFamily, fontWeight: 600 }}>
                          #{payment.membership?.membershipCode || "N/A"}
                        </TableCell>
                        <TableCell sx={{ textTransform: "capitalize", fontFamily: montserrat.style.fontFamily }}>
                          {payment.membership?.type?.replace("-", " ") || "Institutional Accreditation"}
                        </TableCell>
                        <TableCell sx={{ fontFamily: montserrat.style.fontFamily }}>
                          {payment.createdAt ? moment(payment.createdAt).format("DD-MMMM-YYYY") : "-"}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={payment.status || "UNPAID"}
                            size="small"
                            sx={{
                              fontWeight: 800,
                              fontSize: 10,
                              textTransform: "uppercase",
                              borderRadius: "8px",
                              bgcolor: payment.status?.toUpperCase() === "ACTIVE" ? "#ECFDF5" : "#FEF2F2",
                              color: payment.status?.toUpperCase() === "ACTIVE" ? "#10B981" : "#EF4444",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center" sx={{ py: 4, color: "text.secondary" }}>
                        No billing history records found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const renderUpgradeMembership = () => {
    return (
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={4}>
            {/* Progression Box */}
            <Card sx={glassCardStyle}>
              <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY, mb: 3 }}>
                Tier Advancement Progress
              </Typography>

              <Grid container spacing={3} alignItems="center">
                <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      variant="determinate"
                      value={progressPercent}
                      size={120}
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
                      <Typography variant="h6" component="div" sx={{ fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                        {progressPercent}%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                  <Stack spacing={1}>
                    <Typography sx={{ fontSize: 12, color: "rgba(0,0,0,0.45)", fontWeight: 700, textTransform: "uppercase" }}>
                      CURRENT ACCREDITATION
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: COLORS.PRIMARY_NAVY }}>
                      {currentTier}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "rgba(0,0,0,0.55)", fontWeight: 500 }}>
                      Next Level: <strong>{nextTier}</strong>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography sx={{ fontWeight: 800, fontSize: 14, color: COLORS.PRIMARY_NAVY, mb: 2 }}>
                UPGRADE ELIGIBILITY CHECKLIST
              </Typography>

              <Stack spacing={2.5}>
                {checklist.map((item, idx) => (
                  <Stack key={idx} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "2px solid",
                        borderColor: item.met ? "#10B981" : "rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: item.met ? "rgba(16, 185, 129, 0.08)" : "transparent",
                      }}
                    >
                      {item.met && <CheckCircle sx={{ color: "#10B981", fontSize: 18 }} />}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: item.met ? 600 : 500,
                        color: item.met ? COLORS.PRIMARY_NAVY : "rgba(0,0,0,0.5)",
                        fontFamily: montserrat.style.fontFamily,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>

            {/* Academic stats counters */}
            <Card sx={glassCardStyle}>
              <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY, mb: 3 }}>
                Academic Directory Analytics
              </Typography>
              <Grid container spacing={3}>
                <Grid size={4}>
                  <Box sx={{ p: 2, borderRadius: "16px", bgcolor: "rgba(223, 186, 115, 0.08)", border: "1px solid rgba(223, 186, 115, 0.15)", textAlign: "center" }}>
                    <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700 }}>CERTIFIED EDUCATORS</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: COLORS.PRIMARY_NAVY, mt: 1 }}>{numEducators}</Typography>
                  </Box>
                </Grid>
                <Grid size={4}>
                  <Box sx={{ p: 2, borderRadius: "16px", bgcolor: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.15)", textAlign: "center" }}>
                    <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700 }}>PATENTS LOGGED</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: COLORS.PRIMARY_NAVY, mt: 1 }}>{numInnovations}</Typography>
                  </Box>
                </Grid>
                <Grid size={4}>
                  <Box sx={{ p: 2, borderRadius: "16px", bgcolor: "rgba(11, 23, 39, 0.05)", border: "1px solid rgba(11, 23, 39, 0.08)", textAlign: "center" }}>
                    <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700 }}>RESEARCH PAPERS</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: COLORS.PRIMARY_NAVY, mt: 1 }}>{numResearch}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          {/* Tiers overview roadmap */}
          <Card sx={glassCardStyle}>
            <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: roboto.style.fontFamily, color: COLORS.PRIMARY_NAVY, mb: 3 }}>
              Institutional Tiers
            </Typography>

            <Stack spacing={3}>
              <Box sx={{ p: 2.5, borderRadius: "18px", bgcolor: currentTier === "Institutional Member" ? "rgba(223, 186, 115, 0.1)" : "transparent", border: currentTier === "Institutional Member" ? "1px solid #DFBA73" : "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: COLORS.PRIMARY_NAVY }}>Institutional Member</Typography>
                <Typography sx={{ fontSize: 11.5, color: "text.secondary", mt: 0.5, lineHeight: 1.5 }}>
                  Entry-level membership conferred upon admission to the Academy and activation of dues. Entitles the institution to sponsor educators and coordinate training.
                </Typography>
              </Box>

              <Box sx={{ p: 2.5, borderRadius: "18px", bgcolor: currentTier === "Certified Institutional Member" ? "rgba(223, 186, 115, 0.1)" : "transparent", border: currentTier === "Certified Institutional Member" ? "1px solid #DFBA73" : "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: COLORS.PRIMARY_NAVY }}>Certified Institutional Member</Typography>
                <Typography sx={{ fontSize: 11.5, color: "text.secondary", mt: 0.5, lineHeight: 1.5 }}>
                  Conferred upon maintaining at least two (2) certified educators or mentors. Showcases institutional capability to run structured Innovation & Research frameworks.
                </Typography>
              </Box>

              <Box sx={{ p: 2.5, borderRadius: "18px", bgcolor: currentTier === "Associate Fellow Institution" ? "rgba(223, 186, 115, 0.1)" : "transparent", border: currentTier === "Associate Fellow Institution" ? "1px solid #DFBA73" : "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: COLORS.PRIMARY_NAVY }}>Associate Fellow Institution</Typography>
                <Typography sx={{ fontSize: 11.5, color: "text.secondary", mt: 0.5, lineHeight: 1.5 }}>
                  Requires Certified status, plus a minimum of 3 innovations and 3 peer-reviewed research papers originating from the campus guidance framework.
                </Typography>
              </Box>

              <Box sx={{ p: 2.5, borderRadius: "18px", bgcolor: currentTier === "Fellow Institution" ? "rgba(223, 186, 115, 0.1)" : "transparent", border: currentTier === "Fellow Institution" ? "1px solid #DFBA73" : "1px solid rgba(0,0,0,0.04)" }}>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: COLORS.PRIMARY_NAVY }}>Fellow Institution</Typography>
                <Typography sx={{ fontSize: 11.5, color: "text.secondary", mt: 0.5, lineHeight: 1.5 }}>
                  The highest category of institutional recognition. Requires at least 4 certified educators, more than 5 patents, and more than 5 research publications in international journals.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <InstitutionDashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontSize: 32,
            fontWeight: 800,
            color: COLORS.PRIMARY_NAVY,
            mb: 1.5,
          }}
        >
          Accreditation & Membership Dues
        </Typography>
        <Typography
          sx={{
            fontFamily: montserrat.style.fontFamily,
            fontSize: 15,
            color: "text.secondary",
            maxWidth: "800px",
            lineHeight: 1.6,
          }}
        >
          Coordinate your academic subscription passes, download official institutional certification, and view advancement pathways.
        </Typography>
      </Box>

      {/* Tabs Menu */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          mb: 4,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          "& .MuiTab-root": {
            fontSize: 14,
            fontWeight: 700,
            textTransform: "none",
            color: "rgba(0,0,0,0.5)",
            pb: 1.5,
            fontFamily: montserrat.style.fontFamily,
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
        <Tab icon={<CreditCard sx={{ fontSize: 18 }} />} iconPosition="start" label="Dues / Active Pass" />
        <Tab icon={<TrendingUp sx={{ fontSize: 18 }} />} iconPosition="start" label="Upgrade Membership" />
      </Tabs>

      {/* Tab Panels */}
      {tabValue === 0 && renderDuesActivePass()}
      {tabValue === 1 && renderUpgradeMembership()}
    </InstitutionDashboardLayout>
  );
};

export default InstitutionMembershipManagement;
