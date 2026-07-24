"use client";

import BlurText from "@/components/widgets/animation/BlurText";
import BeamButton from "@/components/widgets/BeamButton";
import { inter } from "@/utils/fonts";
import CardMembershipIcon from "@mui/icons-material/CardMembershipOutlined";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThreeEarth from "./ThreeGlobe";
import { COLORS } from "@/utils/enum";

const HeroSection4 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B0F19",
        overflow: "hidden",
        zIndex: 1,
        pt: { xs: "120px", md: 16 },
        pb: { xs: "60px", md: 12 },
        boxSizing: "border-box",
      }}
    >
      {/* Moving Stars Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px),
            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 3px),
            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 4px),
            radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 3px)
          `,
          backgroundSize: "550px 550px, 350px 350px, 250px 250px, 150px 150px",
          backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
          maskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          zIndex: 0,
          pointerEvents: "none",
          animation: "moveStars 150s linear infinite",
          "@keyframes moveStars": {
            "0%": {
              backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
            },
            "100%": {
              backgroundPosition:
                "550px 550px, 390px 410px, 380px 520px, 220px 250px",
            },
          },
        }}
      />

      {/* Ambient Glow Accents */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.12) 0%, rgba(248, 93, 0, 0.02) 50%, rgba(255, 255, 255, 0) 80%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.08) 0%, rgba(248, 93, 0, 0.01) 60%, rgba(255, 255, 255, 0) 80%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* 3D Earth Globe - Full Section Background Layer (No Edge Cuts) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.85,
        }}
      >
        <ThreeEarth height="100%" cameraZ={4.0} />
      </Box>

      {/* Subtle Central Contrast Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.75) 60%, rgba(11, 15, 25, 0.95) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Floating Glassmorphism Cards */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "12%", md: "20%" },
          right: { xs: "4%", md: "5%" },
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          borderRadius: "16px",
          p: 1.75,
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 1.25,
          zIndex: 3,
          animation: "floatUp 6s ease-in-out infinite",
          "@keyframes floatUp": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-8px)" },
          },
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            backgroundColor: "rgba(248, 93, 0, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
          }}
        >
          <CardMembershipIcon sx={{ fontSize: 18 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#8E8E93",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Membership
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: inter.style.fontFamily,
            }}
          >
            Global Academic Society
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "15%" },
          left: { xs: "4%", md: "5%" },
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          borderRadius: "16px",
          p: 1.75,
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 1.25,
          zIndex: 3,
          animation: "floatDown 6s ease-in-out infinite",
          animationDelay: "3s",
          "@keyframes floatDown": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(8px)" },
          },
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            backgroundColor: "rgba(74, 222, 128, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4ADE80",
          }}
        >
          <PublicIcon sx={{ fontSize: 18 }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#8E8E93",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Accreditation
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: inter.style.fontFamily,
            }}
          >
            Standards & Quality Assurance
          </Typography>
        </Box>
      </Box>

      {/* Main Content Overlay */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(15px)",
          transition:
            "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Category Pill */}
        <Box
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.25,
            backgroundColor: "rgba(248, 93, 0, 0.1)",
            border: "1px solid rgba(248, 93, 0, 0.25)",
            backdropFilter: "blur(8px)",
            borderRadius: "50px",
            px: 2,
            py: 0.65,
            mb: 2.5,
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 8px #FFFFFF",
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(0.9)", opacity: 0.6 },
                "50%": { transform: "scale(1.2)", opacity: 1 },
                "100%": { transform: "scale(0.9)", opacity: 0.6 },
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: inter.style.fontFamily,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            IAIRE ACADEMIC & PROFESSIONAL SOCIETY
          </Typography>
        </Box>

        {/* Main Heading */}
        <BlurText
          variant="h1"
          text="Advancing Innovation, Research & Entrepreneurship for the Next Generation"
          delay={50}
          animateBy="words"
          direction="bottom"
          sx={{
            fontSize: "clamp(30px, 4.5vw, 48px)",
            fontFamily: inter.style.fontFamily,
            fontWeight: 850,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#F9FAFB",
            marginBottom: "24px",
            maxWidth: "850px",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        />

        {/* Description Paragraph 1 */}
        <Typography
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            color: "#E5E7EB",
            lineHeight: 1.65,
            mb: 2,
            maxWidth: "780px",
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          }}
        >
          <strong>IAIRE</strong> the International Academy of Innovation,
          Research and Entrepreneurship is an independent U.S. based
          nonprofit academic and professional society dedicated to advancing
          innovation, research, and entrepreneurship education through
          standards development, certification frameworks, fellowship
          recognition, mentorship, professional development, and
          quality-assurance mechanisms.
        </Typography>

        {/* Description Paragraph 2 */}
        <Typography
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="380"
          sx={{
            fontSize: { xs: "13.5px", md: "15px" },
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            color: "#D1D5DB",
            lineHeight: 1.65,
            mb: 4,
            maxWidth: "760px",
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          }}
        >
          We bring together schools, educators, students, scientists,
          researchers, inventors, entrepreneurs, and institutions to build a
          future where young learners do not merely consume knowledge they
          create knowledge, protect ideas, conduct research, develop
          innovations, and solve meaningful real-world problems.
        </Typography>

        {/* Call to Actions */}
        <Stack
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="450"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <Link href="/login" style={{ textDecoration: "none", width: "100%" }}>
            <BeamButton
              variant="contained"
              sx={{ width: { xs: "100%", sm: "auto" }, px: 3, whiteSpace: "nowrap" }}
            >
              Become a Member
            </BeamButton>
          </Link>

          <Link href="/programs" style={{ textDecoration: "none", width: "100%" }}>
            <BeamButton
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 3,
                whiteSpace: "nowrap",
                color: COLORS.WHITE,
              }}
            >
              Explore What We Do
            </BeamButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection4;

