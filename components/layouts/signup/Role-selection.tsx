"use client";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, montserrat, roboto } from "@/utils/fonts";
import { ArrowForward, Close, Check } from "@mui/icons-material";
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
import logo from "@/images/logo/iaire_logo.png";

const ROLES = [
  {
    id: USER_ROLES.INSTITUTION,
    title: "Institution",
    labelName: "Institution",
    description:
      "Manage your institution, staff, and researcher educators seamlessly.",
    image: "/images/signup/institution_official.png",
    accentColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.2)",
    bgGradient:
      "linear-gradient(135deg, rgba(254, 243, 199, 0.7) 0%, #FFFFFF 100%)",
  },
  {
    id: USER_ROLES.EDUCATOR,
    title: "Mentors",
    labelName: "Mentor",
    description: "Create classes, track progress, and inspire your students.",
    image: "/images/signup/mentor.png",
    accentColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.2)",
    bgGradient:
      "linear-gradient(135deg, rgba(224, 242, 254, 0.7) 0%, #FFFFFF 100%)",
  },
  {
    id: USER_ROLES.STUDENT,
    title: "Students",
    labelName: "Student",
    description: "Learn, grow, and connect with your learning community.",
    image: "/images/signup/student.png",
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.2)",
    bgGradient:
      "linear-gradient(135deg, rgba(209, 250, 229, 0.7) 0%, #FFFFFF 100%)",
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
          "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F1F5F9 100%)",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
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
            "radial-gradient(circle, rgba(217, 119, 6, 0.06) 0%, rgba(0, 0, 0, 0) 70%)",
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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          py: { xs: 4, md: 6 },
          boxSizing: "border-box",
        }}
      >
        {/* 1. Top Close Control Bar */}
        <Box sx={{ width: "100%", textAlign: "right", flexShrink: 0 }}>
          <IconButton
            onClick={() => router.push("/login")}
            sx={{
              border: "1px solid rgba(15, 23, 42, 0.12)",
              bgcolor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
              p: 0.8,
              "&:hover": {
                bgcolor: "#F1F5F9",
                borderColor: COLORS.PRIMARY_BLUE,
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Close sx={{ color: "#0F172A", fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* 2. Header Branding & Headline */}
        <Box
          sx={{
            textAlign: "center",
            flexShrink: 0,
            maxWidth: "600px",
            mx: "auto",
            mb: { xs: 1.5, md: 2 },
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
              src={logo}
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
                bgcolor: "rgba(59, 130, 246, 0.08)",
                color: "#1D4ED8",
                border: "1px solid rgba(59, 130, 246, 0.2)",
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
              color: "#0F172A",
              fontFamily: roboto.style.fontFamily,
              fontWeight: 800,
              fontSize: isMobile ? 24 : 32,
              letterSpacing: 1.1,
              mb: 0.5,
            }}
          >
            WHO ARE YOU?
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: isMobile ? 12 : 14,
              color: "#475569",
              lineHeight: 1.35,
            }}
          >
            Select your role to personalize your IAIRE experience and join our
            community of excellence.
          </Typography>
        </Box>

        {/* 3. Role Cards Grid Box */}
        <Box sx={{ width: "100%", flexShrink: 0 }}>
          <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
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
                      p: { xs: 2, md: 2.5 },
                      textAlign: "center",
                      backgroundColor: isSelected ? "#FFFFFF" : "#FFFFFF",
                      backgroundImage: isSelected ? role.bgGradient : "none",
                      borderRadius: "24px",
                      border: "2.5px solid",
                      borderColor: isSelected
                        ? role.accentColor
                        : "rgba(226, 232, 240, 0.9)",
                      boxShadow: isSelected
                        ? `0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 25px ${role.glowColor}`
                        : "0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 4px 6px -2px rgba(15, 23, 42, 0.02)",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: role.accentColor,
                        boxShadow: `0 24px 48px -12px rgba(15, 23, 42, 0.15), 0 0 25px ${role.glowColor}`,
                      },
                    }}
                  >
                    {/* Selected Checkmark Badge */}
                    {isSelected && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          bgcolor: role.accentColor,
                          color: "#FFFFFF",
                          borderRadius: "50%",
                          width: 26,
                          height: 26,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 4px 12px ${role.glowColor}`,
                          zIndex: 3,
                        }}
                      >
                        <Check sx={{ fontSize: 16, fontWeight: 900 }} />
                      </Box>
                    )}

                    {/* 3D Illustration Avatar Frame */}
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 160, sm: 180, md: 190 },
                        position: "relative",
                        borderRadius: "18px",
                        overflow: "hidden",
                        mb: 2,
                        boxShadow: isSelected
                          ? `0 10px 25px ${role.glowColor}`
                          : "0 4px 14px rgba(15, 23, 42, 0.08)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Image
                        src={role.image}
                        alt={role.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    {/* Role Title */}
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontFamily: roboto.style.fontFamily,
                        fontWeight: 700,
                        fontSize: 21,
                        mb: 0.6,
                      }}
                    >
                      {role.title}
                    </Typography>

                    {/* Role Description */}
                    <Typography
                      sx={{
                        fontFamily: montserrat.style.fontFamily,
                        color: "#64748B",
                        fontSize: 13,
                        lineHeight: 1.45,
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
            mt: { xs: 4, md: 2 },
            py: { xs: 2, md: 2 },
          }}
        >
          <BeamButton
            variant="contained"
            onClick={handleClick}
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: selectedRole ? COLORS.PRIMARY_NAVY : "#E2E8F0",
              color: selectedRole ? "#FFFFFF" : "#94A3B8",
              px: { xs: 4, md: 6 },
              py: 1.4,
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "none",
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
              transition: "all 0.3s ease",
              border: selectedRole
                ? `1px solid ${COLORS.BEAM_COLOR}`
                : "1px solid #CBD5E1",
              boxShadow: selectedRole
                ? "0 10px 30px rgba(15, 23, 42, 0.25)"
                : "none",
              zIndex: 2,
              "&:hover": {
                bgcolor: selectedRole ? COLORS.PRIMARY_BLUE : "#CBD5E1",
                transform: selectedRole ? "translateY(-2px)" : "none",
                boxShadow: selectedRole
                  ? "0 15px 35px rgba(59, 130, 246, 0.35)"
                  : "none",
              },
            }}
          >
            {buttonText}
          </BeamButton>

          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 12,
              color: "#94A3B8",
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
