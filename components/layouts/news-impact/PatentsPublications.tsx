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
import { SearchOutlined, OpenInNewOutlined, MenuBookOutlined, GavelOutlined } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

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
        <Stack spacing={2.5} sx={{ mb: { xs: 5, md: 7 } }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "inline-flex",
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.15)",
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
                  backgroundColor: "#3B82F6",
                  boxShadow: "0 0 8px #3B82F6",
                }}
              />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "10.5px",
                  fontWeight: 800,
                  color: "#1D4ED8",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                IP Registrations & Publications
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
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

        {/* Filter Controls */}
        <Box
          sx={{
            p: 3,
            borderRadius: "20px",
            backgroundColor: "#F8FAFC",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            mb: 5,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Search Input */}
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
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
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.08)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                }}
              />
            </Grid>

            {/* Category Chips */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                {categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    onClick={() => setActiveCategory(cat)}
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12.5px",
                      fontWeight: 600,
                      backgroundColor: activeCategory === cat ? "#3B82F6" : "#FFFFFF",
                      color: activeCategory === cat ? "#FFFFFF" : "#475569",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      borderRadius: "8px",
                      px: 0.5,
                      "&:hover": {
                        backgroundColor: activeCategory === cat ? "#2563EB" : "#EFF6FF",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>

            {/* Type Filter */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack direction="row" spacing={1} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                {types.map((t) => (
                  <Chip
                    key={t}
                    label={t === "All" ? "All Formats" : t}
                    onClick={() => setActiveType(t)}
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12.5px",
                      fontWeight: 600,
                      backgroundColor: activeType === t ? "#1E293B" : "#FFFFFF",
                      color: activeType === t ? "#FFFFFF" : "#475569",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      borderRadius: "8px",
                      px: 0.5,
                      "&:hover": {
                        backgroundColor: activeType === t ? "#0F172A" : "#F1F5F9",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Results Info */}
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontSize: "13px",
            color: "#64748B",
            fontWeight: 600,
            mb: 3.5,
          }}
        >
          Showing {filteredDocs.length} matching document{filteredDocs.length !== 1 && "s"}
        </Typography>

        {/* Documents Grid */}
        <Grid container spacing={3.5}>
          {filteredDocs.map((doc, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  p: 3.5,
                  height: "100%",
                  borderRadius: "20px",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.01)",
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#3B82F6",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.05)",
                  },
                }}
              >
                <Stack spacing={2.5}>
                  {/* Top Line badge & indicator */}
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "8px",
                        backgroundColor: doc.type === "Patent" ? "rgba(59, 130, 246, 0.08)" : "rgba(16, 185, 129, 0.08)",
                        border: doc.type === "Patent" ? "1px solid rgba(59, 130, 246, 0.15)" : "1px solid rgba(16, 185, 129, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {doc.type === "Patent" ? (
                        <GavelOutlined sx={{ color: "#2563EB", fontSize: "18px" }} />
                      ) : (
                        <MenuBookOutlined sx={{ color: "#059669", fontSize: "18px" }} />
                      )}
                    </Box>
                    <Chip
                      label={doc.type}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: "11px",
                        backgroundColor: doc.type === "Patent" ? "rgba(59, 130, 246, 0.08)" : "rgba(16, 185, 129, 0.08)",
                        color: doc.type === "Patent" ? "#2563EB" : "#059669",
                        borderRadius: "6px",
                      }}
                    />
                    <Chip
                      label={doc.category}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: "11px",
                        backgroundColor: "rgba(100, 116, 139, 0.06)",
                        color: "#475569",
                        borderRadius: "6px",
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#64748B",
                        fontWeight: 600,
                        fontFamily: inter.style.fontFamily,
                      }}
                    >
                      {doc.date}
                    </Typography>
                  </Stack>

                  {/* Title & Metadata */}
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 800,
                        fontSize: "16px",
                        color: "#1E293B",
                        lineHeight: 1.35,
                      }}
                    >
                      {doc.title}
                    </Typography>
                    <Stack spacing={0.25}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12.5px",
                          fontWeight: 700,
                          color: "#334155",
                        }}
                      >
                        By {doc.authors}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "12px",
                          color: "#64748B",
                          fontWeight: 500,
                        }}
                      >
                        {doc.school}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Divider sx={{ opacity: 0.6 }} />

                  {/* Abstract */}
                  <Stack spacing={0.75}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "#64748B",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Abstract:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13.5px",
                        color: "#475569",
                        lineHeight: 1.55,
                      }}
                    >
                      {doc.abstract}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Footer Info & Action */}
                <Box
                  sx={{
                    mt: 3.5,
                    pt: 2.25,
                    borderTop: "1px solid rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      color: "#64748B",
                      fontWeight: 700,
                    }}
                  >
                    REF: {doc.citationOrId}
                  </Typography>

                  <IconButton
                    size="small"
                    href={doc.link}
                    target="_blank"
                    sx={{
                      color: "#3B82F6",
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                      borderRadius: "8px",
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#3B82F6",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <OpenInNewOutlined sx={{ fontSize: "16px" }} />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PatentsPublications;
