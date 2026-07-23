"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { SearchOutlined, OpenInNewOutlined, MenuBookOutlined, GavelOutlined, CheckCircleOutline, ChevronRight } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import SectionBadge from "@/components/widgets/SectionBadge";
import BeamButton from "@/components/widgets/BeamButton";
import ContentCard from "./components/ContentCard";

interface DocumentItem {
  title: string;
  authors: string;
  school: string;
  type: "Patent" | "Journal Paper";
  category: "IoT" | "Biotech" | "Software" | "Materials" | "Energy";
  date: string;
  citationOrId: string;
  abstract: string;
  link: string;
}

const documents: DocumentItem[] = [
  {
    title: "Provisional Patent: Real-Time IoT Soil Nitrite & pH Detector",
    authors: "Rohan K. Sharma, Ananya Sen",
    school: "DPS R.K. Puram, New Delhi",
    type: "Patent",
    category: "IoT",
    date: "June 2026",
    citationOrId: "US PPA 63/981,402",
    abstract: "A cost-effective, IoT-enabled optical spectrophotometric sensor array designed to fit directly onto existing irrigation nozzles for hyper-local soil chemistry analysis.",
    link: "https://patents.google.com/",
  },
  {
    title: "Journal: Synthesis of Biodegradable Films from Seaweed Alginates",
    authors: "Sophia Chen, Marcus Vance",
    school: "Vanguard Academy, Los Angeles",
    type: "Journal Paper",
    category: "Materials",
    date: "April 2026",
    citationOrId: "J. Stud. Res. 2026.14.2",
    abstract: "This study explores formulation variables for transforming harvested brown seaweed alginate into high-tensile food wrapper alternatives that compost completely in soil within 14 days.",
    link: "https://www.google.com/scholar",
  },
  {
    title: "Provisional Patent: Decentralized Solar Microgrid Sharing Controller",
    authors: "Kofi Mensah",
    school: "Accra Tech Academy, Ghana",
    type: "Patent",
    category: "Energy",
    date: "February 2026",
    citationOrId: "US PPA 63/875,119",
    abstract: "A peer-to-peer hardware routing system enabling localized energy distribution and automated LED token exchanges between neighbor solar batteries.",
    link: "https://patents.google.com/",
  },
  {
    title: "Journal: USSD Agritech Demand Mapping in Developing Supply Chains",
    authors: "Jane Appiah, Kofi Mensah",
    school: "Accra Tech Academy, Ghana",
    type: "Journal Paper",
    category: "Software",
    date: "January 2026",
    citationOrId: "Int. J. Agri. Sys. 10.11",
    abstract: "An analytical study on harvest wastage reductions in Sub-Saharan hyper-local supply chains using GSM USSD reporting systems instead of cellular smartphone apps.",
    link: "https://www.google.com/scholar",
  },
  {
    title: "Provisional Patent: Automated Greywater Micro-Filter for Urban Restrooms",
    authors: "Vikram Nair, Priyesh Patel",
    school: "Sardar Patel Vidyalaya, Mumbai",
    type: "Patent",
    category: "Materials",
    date: "November 2025",
    citationOrId: "IN Patent App 2025/11092",
    abstract: "A gravity-fed greywater filtration unit using carbonized agricultural biomass to filter soap residue from sink drains for secondary flushing use.",
    link: "https://patents.google.com/",
  },
  {
    title: "Journal: Optimization of Turbidity-Tracking Photodiodes in Local Water Wells",
    authors: "Aarav Mehta, Riya Sen",
    school: "Greenwood International, Bangalore",
    type: "Journal Paper",
    category: "IoT",
    date: "September 2025",
    citationOrId: "IEEE Student Papers 14.1",
    abstract: "Calibration data analysis of photodiode turbidity measurements in water supplies, proving accuracy comparable to commercial lab systems under 50 NTU.",
    link: "https://www.google.com/scholar",
  },
];

const categoryColors: Record<string, string> = {
  IoT: "#3B82F6",
  Biotech: "#10B981",
  Software: "#8B5CF6",
  Materials: "#F59E0B",
  Energy: "#EF4444",
};

const PatentsPublications = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeType, setActiveType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "IoT", "Biotech", "Software", "Materials", "Energy"];
  const types = ["All", "Patent", "Journal Paper"];

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = activeCategory === "All" || doc.category === activeCategory;
    const matchesType = activeType === "All" || doc.type === activeType;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <Box
      id="patents"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }} data-aos="fade-up" data-aos-duration="700">
          <Box sx={{ display: "flex" }}>
            <SectionBadge label="IP Registrations & Publications" align="left" />
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "34px", md: "42px" },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F172A",
                }}
              >
                Student Patent Filings & <br />
                <span style={{ color: "#3B82F6" }}>Academic Publications</span>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14.5px",
                  lineHeight: 1.6,
                  color: "#475569",
                }}
              >
                Explore verified intellectual property registrations and peer-reviewed research papers pioneered by high school student teams during IAIRE innovation programs.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        {/* Filter Controls - Redesigned to be sleeker */}
        <Stack spacing={3} sx={{ mb: 6 }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "center" }}
            sx={{
              p: 2.5,
              borderRadius: "20px",
              backgroundColor: "#F8FAFC",
              border: "1px solid rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Search Input */}
            <TextField
              variant="outlined"
              placeholder="Search titles, authors, schools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined sx={{ color: "#94A3B8" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                flexGrow: 1,
                maxWidth: { md: "400px" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  fontFamily: inter.style.fontFamily,
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.06)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.12)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3B82F6",
                    borderWidth: "1px",
                    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  },
                },
              }}
            />

            {/* Document Types */}
            <Stack direction="row" spacing={1} sx={{ overflowX: "auto", pb: { xs: 1, md: 0 } }}>
              {types.map((t) => (
                <Chip
                  key={t}
                  label={t === "All" ? "All Formats" : t}
                  onClick={() => setActiveType(t)}
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 600,
                    backgroundColor: activeType === t ? "#0F172A" : "#FFFFFF",
                    color: activeType === t ? "#FFFFFF" : "#475569",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    borderRadius: "10px",
                    px: 1,
                    py: 2,
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      backgroundColor: activeType === t ? "#1E293B" : "#F1F5F9",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* Categories */}
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ gap: 1.5, px: 1 }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13px",
                  fontWeight: 600,
                  backgroundColor: activeCategory === cat ? `${categoryColors[cat] || "#3B82F6"}15` : "#FFFFFF",
                  color: activeCategory === cat ? (categoryColors[cat] || "#2563EB") : "#64748B",
                  border: `1px solid ${activeCategory === cat ? categoryColors[cat] || "#3B82F6" : "rgba(0,0,0,0.06)"}`,
                  borderRadius: "100px",
                  px: 1,
                  py: 2,
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: `${categoryColors[cat] || "#3B82F6"}10`,
                    color: categoryColors[cat] || "#2563EB",
                    borderColor: categoryColors[cat] || "#3B82F6",
                    transform: "translateY(-1px)",
                    boxShadow: `0 4px 12px ${categoryColors[cat] || "#3B82F6"}15`,
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>

        {/* Results Info */}
        <Typography
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "13px",
            color: "#64748B",
            fontWeight: 600,
            mb: 3,
            px: 1,
          }}
        >
          Showing {filteredDocs.length} matching document{filteredDocs.length !== 1 && "s"}
        </Typography>

        {/* Documents Grid */}
        <Grid container spacing={3.5}>
          {filteredDocs.map((doc, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <ContentCard variant="document" {...doc} idx={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PatentsPublications;
