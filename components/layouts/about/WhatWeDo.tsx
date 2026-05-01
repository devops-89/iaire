"use client";

import { inter } from "@/utils/fonts";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const activities = [
  {
    title: "Nurturing IRE Ecosystem",
    description:
      "Building a thriving community of innovators, researchers, and entrepreneurs.",
    icon: "/images/icon/IREecoIcon.png",
  },
  {
    title: "Enabling Schools",
    description:
      "Partnering with institutions to integrate IRE culture into education.",
    icon: "/images/icon/enSchoolIcon.png",
  },
  {
    title: "Training & Certifying Teachers",
    description:
      "Empowering educators with cutting-edge IRE methodologies.",
    icon: "/images/icon/trainingIcon.png",
  },
  {
    title: "Student Training Programs",
    description:
      "Enabling teachers to train school students in IRE excellence.",
    icon: "/images/icon/studentTrainingIcon.png",
  },
  {
    title: "Research Grants",
    description:
      "Funding groundbreaking research by young minds.",
    icon: "/images/icon/researchGrantIcon.png",
  },
  {
    title: "Patent Grants",
    description:
      "Supporting intellectual property protection for innovations.",
    icon: "/images/icon/patentGrantIcon.png",
  },
  {
    title: "Startup Funding",
    description:
      "Investing in entrepreneurial ventures that create impact.",
    icon: "/images/icon/startupIcon.png",
  },
];

const WhatWeDo = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">

        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            fontWeight: 700,
            textAlign: "center",
            color: "#1A2847",
            mb: {xs:4,md:6},
          }}
        >
          What We Do
        </Typography>

        <Grid container spacing={{xs:7.5,md:8}}>
          {activities.map((item, index) => (
            <Grid key={index} size={{xs:12,sm:6,md:4}}>
              
              <Card
                elevation={0}
                sx={{
                  p: {xs:2.5,md:3},
                  borderRadius: "10px",
                  border: "1px solid #E5E7EB",
                  background: "#fff",
                  width:{xs:"auto",md:"340px"},
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#D4A574",
                    boxShadow: "0 10px 30px rgba(212,165,116,0.35)",
                  },
                }}
              >
                <Stack spacing={2.5}>

                  {/* ICON */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "10px",
                      background: "rgba(212, 165, 116, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  </Box>

                  {/* TITLE */}
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"15px",md:"16px"},
                      fontWeight: 600,
                      color: "#1A2847",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: {xs:"13.5px",md:"14px"},
                      lineHeight: "20px",
                      color: "#6B7280",
                    }}
                  >
                    {item.description}
                  </Typography>

                </Stack>
              </Card>

            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default WhatWeDo;