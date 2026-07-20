"use client";

import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GavelIcon from "@mui/icons-material/GavelOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBookOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFareOutlined";
import StatsCard from "./components/StatsCard";
import { MetricItem } from "@/utils/type";
import AlumniChip from "./components/Alumni-Chip";

const metrics: MetricItem[] = [
  {
    number: "5,000+",
    label: "Students Certified",
    desc: "Students trained in computational thinking, problem framing, and advanced innovation standards.",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32, color: "#93C5FD" }} />,
  },
  {
    number: "120+",
    label: "Patents Filed",
    desc: "Provisional and utility patent filings submitted by young innovators across global jurisdictions.",
    icon: <GavelIcon sx={{ fontSize: 32, color: "#93C5FD" }} />,
  },
  {
    number: "450+",
    label: "Scientific Papers",
    desc: "Research manuscripts peer-reviewed and published in high-school, regional, and national journals.",
    icon: <MenuBookIcon sx={{ fontSize: 32, color: "#93C5FD" }} />,
  },
  {
    number: "30+",
    label: "Active School Hubs",
    desc: "Institutional innovation laboratories set up in primary and secondary schools worldwide.",
    icon: <CorporateFareIcon sx={{ fontSize: 32, color: "#93C5FD" }} />,
  },
];

const universityPlacements = [
  "Stanford University",
  "Massachusetts Institute of Technology (MIT)",
  "Harvard University",
  "University of Oxford",
  "University of Cambridge",
  "Indian Institute of Technology (IIT)",
  "Indian Institute of Science (IISc)",
  "California Institute of Technology",
];

const Outcomes = () => {
  return (
    <Box
      id="outcomes"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(135deg, #0B1528 0%, #1A2847 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Block */}
        <Stack
          spacing={2.5}
          sx={{
            mb: { xs: 6, md: 9 },
            textAlign: "center",
            alignItems: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Box
            sx={{
              display: "inline-flex",
              backgroundColor: "rgba(147, 197, 253, 0.08)",
              border: "1px solid rgba(147, 197, 253, 0.2)",
              borderRadius: "100px",
              px: 2.25,
              py: 0.75,
              alignItems: "center",
              gap: 1.25,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#93C5FD",
                boxShadow: "0 0 8px #93C5FD",
              }}
            />
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "11px",
                fontWeight: 700,
                color: "#93C5FD",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Outcomes & Performance Indicators
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "30px", sm: "38px", md: "46px" },
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: COLORS.WHITE,
            }}
          >
            Empowering the Next Generation of <br />
            <span
              style={{
                color: "#93C5FD",
                textShadow: "0 0 35px rgba(147, 197, 253, 0.2)",
              }}
            >
              Global Problem Solvers
            </span>
          </Typography>

          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "700px",
            }}
          >
            IAIRE programs run globally to instill real-world credentials, legal
            asset creation, and academic rigour that distinguish student
            candidates in top-tier university placement procedures.
          </Typography>
        </Stack>

        {/* Metrics Grid */}
        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {metrics.map((metric, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <StatsCard
                icon={metric.icon}
                id={idx}
                number={metric.number}
                desc={metric.desc}
                label={metric.label}
              />
            </Grid>
          ))}
        </Grid>

        {/* Placement Section */}
        <Card
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          sx={{
            borderRadius: "24px",
            p: 4.5,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack spacing={3.5} alignItems="center">
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "11px",
                fontWeight: 800,
                color: "#93C5FD",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              IAIRE Alumni Matriculation & Placements Include:
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1.75,
                width: "100%",
              }}
            >
              {universityPlacements.map((univ, idx) => (
                <AlumniChip key={idx} univ={univ} />
              ))}
            </Box>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default Outcomes;
