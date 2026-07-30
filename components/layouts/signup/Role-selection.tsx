"use client";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, montserrat, roboto } from "@/utils/fonts";
import {
  School,
  SupervisorAccount,
  EmojiPeople,
  ArrowForward,
  Close,
  Check,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import BeamButton from "@/components/widgets/BeamButton";
import useSnackbar from "@/store/useSnackbar";
import logoWhite from "@/images/logo/iaire_logo_white.png";

const ROLES = [
  {
    id: USER_ROLES.INSTITUTION,
    title: "Institution",
    labelName: "Institution",
    description:
      "Manage your institution, staff, and researcher educators seamlessly.",
    icon: <School sx={{ fontSize: 28 }} />,
    accentColor: "#D1A054",
    glowColor: "rgba(209, 160, 84, 0.25)",
    bgGradient:
      "linear-gradient(135deg, rgba(209, 160, 84, 0.14) 0%, rgba(11, 23, 39, 0.85) 100%)",
  },
  {
    id: USER_ROLES.EDUCATOR,
    title: "Mentors",
    labelName: "Mentor",
    description: "Create classes, track progress, and inspire your students.",
    icon: <SupervisorAccount sx={{ fontSize: 28 }} />,
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.25)",
    bgGradient:
      "linear-gradient(135deg, rgba(56, 189, 248, 0.14) 0%, rgba(11, 23, 39, 0.85) 100%)",
  },
  {
    id: USER_ROLES.STUDENT,
    title: "Students",
    labelName: "Student",
    description: "Learn, grow, and connect with your learning community.",
    icon: <EmojiPeople sx={{ fontSize: 28 }} />,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    bgGradient:
      "linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(11, 23, 39, 0.85) 100%)",
  },
];

const RoleSelectionLayout = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { setSnackbar } = useSnackbar();

  const handleClick = () => {
    if (!selectedRole) {
      setSnackbar("Please select a role to continue", "error");
      return;
    }
    router.push(`/signup?role=${selectedRole}`);
    localStorage.setItem("role", JSON.stringify(selectedRole));
  };

  const selectedObj = ROLES.find((r) => r.id === selectedRole);
  const buttonText = selectedObj
    ? `Continue as ${selectedObj.labelName}`
    : "Select a Role to Continue";

  return (
    <Box
      sx={{
        background:
          "radial-gradient(ellipse at 50% -20%, #1E293B 0%, #0B1727 60%, #060D17 100%)",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-15%",
          left: "20%",
          width: "60%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.06) 0%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 2, md: 3 },
          px: { xs: 2, md: 4 },
          boxSizing: "border-box",
        }}
      >
        {/* 1. Top Close Control Bar */}
        <Box sx={{ width: "100%", textAlign: "right", flexShrink: 0 }}>
          <IconButton
            onClick={() => router.back()}
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
              bgcolor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(10px)",
              p: 0.8,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.12)",
                borderColor: COLORS.BEAM_COLOR,
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Close sx={{ color: COLORS.WHITE, fontSize: 18 }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            flexShrink: 0,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 1.2,
            }}
          >
            <Image
              src={logoWhite}
              alt="IAIRE Logo"
              height={34}
              width={125}
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box>
            <Chip
              label="STEP 2 OF 2 • ROLE SELECTION"
              size="small"
              sx={{
                bgcolor: "rgba(59, 130, 246, 0.12)",
                color: "#60A5FA",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: 1.1,
                px: 1,
                py: 0.2,
                mb: 0.8,
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: COLORS.WHITE,
              fontFamily: roboto.style.fontFamily,
              fontWeight: 800,
              fontSize: isMobile ? 24 : 32,
              letterSpacing: 1.1,
              mb: 0.5,
              background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHO ARE YOU?
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: isMobile ? 12 : 14,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.35,
            }}
          >
            Select your role to personalize your IAIRE experience and join our
            community of excellence.
          </Typography>
        </Box>

        {/* 3. Role Cards Grid Box */}
        <Box sx={{ width: "100%", flexShrink: 0 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {ROLES.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <Grid size={{ lg: 4, md: 4, xs: 12 }} key={role.id}>
                  <Card
                    onClick={() => setSelectedRole(role.id)}
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      position: "relative",
                      p: { xs: 2, md: 2.8 },
                      textAlign: "center",
                      backgroundColor: isSelected
                        ? "rgba(18, 35, 60, 0.9)"
                        : "rgba(255, 255, 255, 0.03)",
                      backgroundImage: isSelected ? role.bgGradient : "none",
                      backdropFilter: "blur(16px)",
                      borderRadius: "18px",
                      border: "2px solid",
                      borderColor: isSelected
                        ? role.accentColor
                        : "rgba(255, 255, 255, 0.08)",
                      boxShadow: isSelected
                        ? `0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${role.glowColor}`
                        : "0 6px 20px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        backgroundColor: isSelected
                          ? "rgba(22, 42, 70, 0.95)"
                          : "rgba(255, 255, 255, 0.06)",
                        borderColor: isSelected
                          ? role.accentColor
                          : "rgba(255, 255, 255, 0.25)",
                        boxShadow: `0 18px 35px rgba(0, 0, 0, 0.4), 0 0 20px ${role.glowColor}`,
                      },
                    }}
                  >
                    {/* Selected Checkmark Badge */}
                    {isSelected && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: role.accentColor,
                          color: "#0B1727",
                          borderRadius: "50%",
                          width: 22,
                          height: 22,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 0 8px ${role.glowColor}`,
                        }}
                      >
                        <Check sx={{ fontSize: 14, fontWeight: 900 }} />
                      </Box>
                    )}

                    {/* Icon Box */}
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        bgcolor: isSelected
                          ? role.accentColor
                          : "rgba(255, 255, 255, 0.08)",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isSelected ? "#0B1727" : COLORS.WHITE,
                        mx: "auto",
                        mb: 1.8,
                        transition: "all 0.3s ease",
                        boxShadow: isSelected
                          ? `0 6px 16px ${role.glowColor}`
                          : "none",
                      }}
                    >
                      {role.icon}
                    </Box>

                    {/* Role Title */}
                    <Typography
                      sx={{
                        color: COLORS.WHITE,
                        fontFamily: roboto.style.fontFamily,
                        fontWeight: 700,
                        fontSize: 19,
                        mb: 0.6,
                      }}
                    >
                      {role.title}
                    </Typography>

                    {/* Role Description */}
                    <Typography
                      sx={{
                        fontFamily: montserrat.style.fontFamily,
                        color: "rgba(255, 255, 255, 0.65)",
                        fontSize: 13,
                        lineHeight: 1.4,
                      }}
                    >
                      {role.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* 4. Action Button & Footer Box */}
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            pb: { xs: 1, md: 2 },
          }}
        >
          <BeamButton
            variant="contained"
            onClick={handleClick}
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: selectedRole ? COLORS.PRIMARY_NAVY : "#111E30",
              color: selectedRole ? COLORS.WHITE : "rgba(255, 255, 255, 0.6)",
              px: { xs: 4, md: 5 },
              py: 1.2,
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
              transition: "all 0.3s ease",
              border: selectedRole
                ? `1px solid ${COLORS.BEAM_COLOR}`
                : "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: selectedRole
                ? "0 10px 30px rgba(59, 130, 246, 0.35)"
                : "0 4px 15px rgba(0, 0, 0, 0.3)",
              zIndex: 2,
              "&:hover": {
                bgcolor: selectedRole ? COLORS.PRIMARY_BLUE : "#182A42",
                transform: selectedRole ? "translateY(-2px)" : "none",
                boxShadow: selectedRole
                  ? "0 15px 35px rgba(59, 130, 246, 0.5)"
                  : "0 6px 20px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            {buttonText}
          </BeamButton>

          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 11,
              color: "rgba(255, 255, 255, 0.45)",
            }}
          >
            Step 2 of 2: Let us know your primary role at IAIRE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RoleSelectionLayout;
