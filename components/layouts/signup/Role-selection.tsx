"use client";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, montserrat, roboto } from "@/utils/fonts";
import {
  School,
  SupervisorAccount,
  EmojiPeople,
  ArrowForward,
  Close,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BeamButton from "@/components/widgets/BeamButton";
import useSnackbar from "@/store/useSnackbar";

const ROLES = [
  {
    id: USER_ROLES.INSTITUTION,
    title: "Institution",
    description:
      "Manage your institution, staff, and researcher educators seamlessly.",
    icon: <School sx={{ fontSize: 40 }} />,
  },
  {
    id: USER_ROLES.EDUCATOR,
    title: "Mentors",
    description: "Create classes, track progress, and inspire your students.",
    icon: <SupervisorAccount sx={{ fontSize: 40 }} />,
  },
  {
    id: USER_ROLES.STUDENT,
    title: "Students",
    description: "Learn, grow, and connect with your learning community.",
    icon: <EmojiPeople sx={{ fontSize: 40 }} />,
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
      setSnackbar("Please select a role", "error");
      return;
    }
    router.push(`/signup?role=${selectedRole}`);
    localStorage.setItem("role", JSON.stringify(selectedRole));
  };
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.NAVY_GRADIENT_START} 0%, ${COLORS.NAVY_GRADIENT_END} 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 6,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(209, 160, 84, 0.05) 0%, rgba(209, 160, 84, 0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "right" }}>
          <IconButton
            onClick={() => router.back()}
            sx={{ border: "1px solid " + COLORS.BEAM_COLOR }}
          >
            <Close sx={{ color: COLORS.WHITE }} />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              bgcolor: COLORS.ACCENT_TAN,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111827",
              fontWeight: 800,
              fontSize: 24,
              mx: "auto",
              mb: 2,
            }}
          >
            I
          </Box>
          <Typography
            sx={{
              color: COLORS.WHITE,
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: isMobile ? 32 : 42,
              letterSpacing: 1,
              mb: 1,
            }}
          >
            WHO ARE YOU?
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Select your role to personalize your IAIRE experience and join our
            community of excellence.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {ROLES.map((role) => (
            <Grid size={{ lg: 4, xs: 12 }} key={role.id}>
              <Card
                onClick={() => {
                  setSelectedRole(role.id);
                }}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  p: 4,
                  textAlign: "center",
                  backgroundColor:
                    selectedRole === role.id
                      ? "rgba(209, 160, 84, 0.1)"
                      : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: `2px solid ${
                    selectedRole === role.id ? COLORS.ACCENT_TAN : "transparent"
                  }`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: `2px solid ${
                      selectedRole === role.id
                        ? COLORS.ACCENT_TAN
                        : "rgba(209, 160, 84, 0.3)"
                    }`,
                    boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor:
                      selectedRole === role.id
                        ? COLORS.ACCENT_TAN
                        : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color:
                      selectedRole === role.id ? COLORS.BLACK : COLORS.WHITE,
                    mx: "auto",
                    mb: 4,
                    transition: "all 0.3s ease",
                  }}
                >
                  {role.icon}
                </Box>
                <Typography
                  sx={{
                    color: COLORS.WHITE,
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 24,
                    mb: 2,
                  }}
                >
                  {role.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {role.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, textAlign: "center" }}>
          <BeamButton
            variant="contained"
            // disabled={!selectedRole}
            onClick={handleClick}
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
              px: 6,
              py: 2,
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: 800,
              textTransform: "none",
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: COLORS.PRIMARY_BLUE,
              },
              // "&"

              mt: 2,
            }}
          >
            Continue as {selectedRole ? selectedRole : "Selection"}
          </BeamButton>

          <Typography
            sx={{
              mt: 3,
              fontFamily: montserrat.style.fontFamily,
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.4)",
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
