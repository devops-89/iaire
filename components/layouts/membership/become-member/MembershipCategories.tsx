"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter, newBlack_medium } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BeamButton from "@/components/widgets/BeamButton";

const categories = [
  {
    title: "School Member",
    tag: "Institutions",
    desc: "For educational institutions seeking to integrate innovation, research, and entrepreneurship into their learning culture. School membership provides access to implementation frameworks, teacher certification pathways, student programs, Innovation Hub support, and recognition opportunities.",
    cta: "Register Your School",
    link: "/signup/role-selection",
    glowColor: "rgba(248, 93, 0, 0.15)",
  },
  {
    title: "Educator Member",
    tag: "Educators",
    desc: "For teachers and academic professionals who wish to develop their skills as Innovation & Research Mentors. Educator membership supports professional growth, certification access, peer learning, and recognition.",
    cta: "Join as an Educator",
    link: "/signup/role-selection",
    glowColor: "rgba(0, 149, 255, 0.12)",
  },
  {
    title: "Student Member",
    tag: "Students",
    desc: "For learners who want to explore innovation, participate in IAIRE programs, compete in Top Young Innovator, and connect with a global community of young problem-solvers.",
    cta: "Join as a Student",
    link: "/signup/role-selection",
    glowColor: "rgba(124, 92, 196, 0.12)",
  },
  {
    title: "Institutional & Partner Member",
    tag: "Partners",
    desc: "For universities, research organizations, corporations, NGOs, and other bodies that wish to collaborate with IAIRE in advancing innovation education at scale.",
    cta: "Explore Institutional Membership",
    link: "/signup/role-selection",
    glowColor: "rgba(34, 197, 94, 0.1)",
  },
];

const MembershipCategories = () => {
  return (
    <Box
      sx={{
        py: { xs: "80px", sm: "100px", md: "120px" },
        backgroundColor: "#08090D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blurred lights */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "#1B365D",
          filter: "blur(150px)",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "#0095FF",
          filter: "blur(150px)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title Stack */}
        <Stack spacing={2} sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#1B365D",
              textTransform: "uppercase",
            }}
          >
            IAIRE Programs
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: newBlack_medium.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: "32px", sm: "38px", md: "44px" },
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
            }}
          >
            Membership Categories
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: "1.6",
            }}
          >
            Select the category that aligns with your role and start your journey within the IAIRE global innovation ecosystem.
          </Typography>
        </Stack>

        {/* 2x2 Grid Layout */}
        <Grid container spacing={4}>
          {categories.map((category, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx} sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "28px",
                  p: { xs: 4, sm: 5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(248, 93, 0, 0.3)",
                    boxShadow: `0 20px 50px ${category.glowColor}`,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                  },
                }}
              >
                {/* Glow Overlay Effect on Hover */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: category.glowColor,
                    filter: "blur(40px)",
                    transition: "opacity 0.3s ease",
                  }}
                />

                <Stack spacing={3} sx={{ position: "relative", zIndex: 2 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: newBlack_medium.style.fontFamily,
                        fontSize: { xs: "20px", sm: "24px" },
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#1B365D",
                        backgroundColor: "rgba(248, 93, 0, 0.1)",
                        px: 2,
                        py: 0.5,
                        borderRadius: "50px",
                      }}
                    >
                      {category.tag}
                    </Box>
                  </Stack>

                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: "1.7",
                      minHeight: { sm: "80px" },
                    }}
                  >
                    {category.desc}
                  </Typography>
                </Stack>

                <Box sx={{ mt: 4, position: "relative", zIndex: 2 }}>
                  <Link href={category.link} style={{ textDecoration: "none" }}>
                    <BeamButton
                      variant="outlined"
                      endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 16 }} />}
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#FFFFFF",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "50px",
                        px: 3.5,
                        py: 1.2,
                        transition: "all 0.25s ease",
                        "& .arrow-icon": {
                          transition: "transform 0.25s ease",
                        },
                        "&:hover": {
                          borderColor: "#1B365D",
                          backgroundColor: "#1B365D",
                          color: "#FFFFFF",
                          boxShadow: "0 8px 20px rgba(248, 93, 0, 0.25)",
                          "& .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      {category.cta}
                    </BeamButton>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MembershipCategories;
