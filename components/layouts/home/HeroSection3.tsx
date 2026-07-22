"use client";

import BlurText from "@/components/widgets/animation/BlurText";
import BeamButton from "@/components/widgets/BeamButton";
import { inter } from "@/utils/fonts";
import CardMembershipIcon from "@mui/icons-material/CardMembershipOutlined";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThreeEarth from "./ThreeGlobe";

const HeroSection3 = () => {
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
        height: { xs: "auto", md: "auto" },
        minHeight: { xs: "auto", md: "auto" },
        maxHeight: { xs: "auto", md: "auto" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        zIndex: 1,
        pt: { xs: "100px", md: 20 },
        pb: { xs: "40px", md: 10 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.1) 0%, rgba(248, 93, 0, 0.02) 50%, rgba(255, 255, 255, 0) 80%)",
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
            "radial-gradient(circle, rgba(248, 93, 0, 0.06) 0%, rgba(248, 93, 0, 0.01) 60%, rgba(255, 255, 255, 0) 80%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(15px)",
          transition:
            "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} sx={{ pr: { md: 2 }, order: { xs: 2, md: 1 } }}>
            <Box
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                backgroundColor: "rgba(248, 93, 0, 0.05)",
                border: "1px solid rgba(248, 93, 0, 0.12)",
                borderRadius: "50px",
                px: 1.75,
                py: 0.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#1B365D",
                  boxShadow: "0 0 8px #1B365D",
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
                  color: "#1B365D",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                IAIRE ACADEMIC & PROFESSIONAL SOCIETY
              </Typography>
            </Box>

            <BlurText
              variant="h1"
              text="Advancing Innovation, Research & Entrepreneurship for the Next Generation"
              delay={50}
              animateBy="words"
              direction="bottom"
              sx={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontFamily: inter.style.fontFamily,
                fontWeight: 850,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#111827",
                marginBottom: "20px",
              }}
            />

            <Typography
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              sx={{
                fontSize: { xs: "13.5px", md: "14.5px" },
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                color: "#374151",
                lineHeight: 1.6,
                mb: 1.75,
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

            {/* Paragraph 2 */}
            <Typography
              sx={{
                fontSize: { xs: "13.5px", md: "14px" },
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                color: "#4B5563",
                lineHeight: 1.6,
                mb: 3.5,
              }}
            >
              We bring together schools, educators, students, scientists,
              researchers, inventors, entrepreneurs, and institutions to build a
              future where young learners do not merely consume knowledge they
              create knowledge, protect ideas, conduct research, develop
              innovations, and solve meaningful real-world problems.
            </Typography>

            <Stack
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="450"
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <Link href="/login" style={{ textDecoration: "none" }}>
                <BeamButton
                  variant="contained"
                  sx={{ width: "100%", whiteSpace: "nowrap" }}
                >
                  Become a Member
                </BeamButton>
              </Link>

              <Link href="/programs" style={{ textDecoration: "none" }}>
                <BeamButton
                  variant="outlined"
                  sx={{ width: "100%", whiteSpace: "nowrap" }}
                >
                  Explore What We Do
                </BeamButton>
              </Link>

              {/* <Link
                href="/about"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                <BeamButton
                  variant="text"
                  endIcon={
                    <ArrowForwardIcon
                      className="arrow-icon"
                      sx={{ transition: "transform 0.25s ease" }}
                    />
                  }
                  sx={{
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    textTransform: "none",
                    fontWeight: 700,
                    color: "#1B365D",
                    py: 1,
                    px: 1.75,
                    borderRadius: "100px",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(248, 93, 0, 0.04)",
                      "& .arrow-icon": {
                        transform: "translateX(4px)",
                      },
                    },
                  }}
                >
                  Learn About IAIRE
                </BeamButton>
              </Link> */}
            </Stack>
          </Grid>

          {/* Right Column: Globe & Visual accents */}
          <Grid
            size={{ xs: 12, md: 5 }}
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              order: { xs: 1, md: 2 },
            }}
          >
            {/* Glassmorphic Glow Container behind Globe */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "260px", md: "350px" },
                height: { xs: "260px", md: "350px" },
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(248, 93, 0, 0) 70%)",
                zIndex: 0,
              }}
            />

            {/* Rotating 3D Globe */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "280px", sm: "360px", md: "440px", lg: "480px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <ThreeEarth height="100%" cameraZ={5.2} />
            </Box>

            {/* Floating Glassmorphism Accents */}
            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: { xs: "4%", md: "-2%" },
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                borderRadius: "16px",
                p: 1.75,
                display: "flex",
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
                  backgroundColor: "rgba(248, 93, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1B365D",
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
                    color: "#1D1D1F",
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
                bottom: "12%",
                left: { xs: "2%", md: "-4%" },
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                borderRadius: "16px",
                p: 1.75,
                display: "flex",
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
                  backgroundColor: "rgba(0, 108, 71, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#006C47",
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
                    color: "#1D1D1F",
                    fontFamily: inter.style.fontFamily,
                  }}
                >
                  Standards & Quality Assurance
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection3;
