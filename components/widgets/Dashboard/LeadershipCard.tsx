"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Grid,
  Tooltip,
  Grow,
} from "@mui/material";
import {
  Search,
  EmojiEvents,
  Lightbulb,
  Science,
  People,
  WorkspacePremium,
  TrendingUp,
} from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";

interface SchoolRank {
  rank: number;
  name: string;
  score: number;
  innovations: number;
  research: number;
  mentors: number;
  country: string;
  countryCode: string;
  tier: string;
}

const GLOBAL_SCHOOLS: SchoolRank[] = [
  {
    rank: 1,
    name: "Harvard Science Academy",
    score: 980,
    innovations: 45,
    research: 52,
    mentors: 24,
    country: "United States",
    countryCode: "US",
    tier: "Fellow Institution",
  },
  {
    rank: 2,
    name: "Cambridge International",
    score: 945,
    innovations: 41,
    research: 48,
    mentors: 20,
    country: "United Kingdom",
    countryCode: "GB",
    tier: "Fellow Institution",
  },
  {
    rank: 3,
    name: "Stanford Innovation High",
    score: 910,
    innovations: 38,
    research: 42,
    mentors: 18,
    country: "United States",
    countryCode: "US",
    tier: "Fellow Institution",
  },
  {
    rank: 4,
    name: "Delhi Public School",
    score: 875,
    innovations: 35,
    research: 39,
    mentors: 16,
    country: "India",
    countryCode: "IN",
    tier: "Associate Fellow Institution",
  },
  {
    rank: 5,
    name: "Singapore National Academy",
    score: 840,
    innovations: 32,
    research: 36,
    mentors: 15,
    country: "Singapore",
    countryCode: "SG",
    tier: "Associate Fellow Institution",
  },
  {
    rank: 6,
    name: "Melbourne Grammar School",
    score: 815,
    innovations: 30,
    research: 34,
    mentors: 14,
    country: "Australia",
    countryCode: "AU",
    tier: "Certified Member",
  },
  {
    rank: 7,
    name: "Dubai British School",
    score: 790,
    innovations: 28,
    research: 31,
    mentors: 12,
    country: "United Arab Emirates",
    countryCode: "AE",
    tier: "Certified Member",
  },
  {
    rank: 8,
    name: "Oakridge International",
    score: 765,
    innovations: 26,
    research: 29,
    mentors: 11,
    country: "India",
    countryCode: "IN",
    tier: "Certified Member",
  },
  {
    rank: 9,
    name: "Toronto Prep School",
    score: 740,
    innovations: 24,
    research: 27,
    mentors: 10,
    country: "Canada",
    countryCode: "CA",
    tier: "Institutional Member",
  },
  {
    rank: 10,
    name: "Tokyo Innovation Academy",
    score: 715,
    innovations: 22,
    research: 25,
    mentors: 9,
    country: "Japan",
    countryCode: "JP",
    tier: "Institutional Member",
  },
];

const LeadershipCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchools = GLOBAL_SCHOOLS.filter((school) =>
    school.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "#FFD700"; // Gold
      case 2:
        return "#C0C0C0"; // Silver
      case 3:
        return "#CD7F32"; // Bronze
      default:
        return "rgba(0, 0, 0, 0.4)";
    }
  };

  const getRankBackground = (rank: number) => {
    switch (rank) {
      case 1:
        return "rgba(255, 215, 0, 0.12)";
      case 2:
        return "rgba(192, 192, 192, 0.15)";
      case 3:
        return "rgba(205, 127, 50, 0.12)";
      default:
        return "rgba(0, 0, 0, 0.03)";
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "28px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.05)",
        overflow: "hidden",
        background: COLORS.WHITE,
      }}
    >
      {/* Premium Gradient Header */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.PRIMARY_BLUE} 100%)`,
          p: 4,
          color: COLORS.WHITE,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ zIndex: 2, position: "relative" }}>
          <Avatar
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.15)",
              color: COLORS.WHITE,
              width: 54,
              height: 54,
            }}
          >
            <EmojiEvents sx={{ fontSize: 30, color: "#FFD700" }} />
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 800,
                fontSize: "1.4rem",
                letterSpacing: "-0.5px",
              }}
            >
              School Leadership Rankings
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontWeight: 400,
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.7)",
                mt: 0.5,
              }}
            >
              Top performing schools based on innovations, research, and mentors.
            </Typography>
          </Box>
        </Stack>

        {/* Decorative elements */}
        <TrendingUp
          sx={{
            position: "absolute",
            right: -20,
            bottom: -20,
            fontSize: 160,
            color: "rgba(255,255,255,0.04)",
            transform: "rotate(-10deg)",
          }}
        />
      </Box>

      <CardContent sx={{ p: 0 }}>
        {/* Search Controls Bar */}
        <Box sx={{ borderBottom: 1, borderColor: "rgba(0, 0, 0, 0.08)", px: 3, py: 2 }}>
          <TextField
            placeholder="Search school name..."
            size="small"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "rgba(0,0,0,0.3)", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
                backgroundColor: "rgba(0,0,0,0.02)",
                fontSize: "0.85rem",
                fontFamily: roboto.style.fontFamily,
                "& fieldset": {
                  borderColor: "rgba(0,0,0,0.06)",
                },
                "&:hover fieldset": {
                  borderColor: COLORS.PRIMARY_NAVY,
                },
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.PRIMARY_NAVY,
                },
              },
            }}
          />
        </Box>

        {/* Leaders List Container */}
        <Box sx={{ maxHeight: "550px", overflowY: "auto", py: 1 }}>
          {filteredSchools.length === 0 ? (
            <Box sx={{ py: 8, px: 3, textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  color: "rgba(0,0,0,0.4)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                No institutions match your search query.
              </Typography>
            </Box>
          ) : (
            filteredSchools.map((school, index) => (
              <Grow in={true} timeout={(index + 1) * 150} key={school.name}>
                <Box
                  sx={{
                    px: 3,
                    py: 2,
                    borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(1, 90, 80, 0.03)",
                      transform: "scale(1.008)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                    },
                  }}
                >
                  <Grid container alignItems="center" spacing={2}>
                    {/* Rank Badge & School Identity */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {/* Rank Badge */}
                        <Avatar
                          sx={{
                            bgcolor: getRankBackground(school.rank),
                            color: getRankColor(school.rank),
                            fontWeight: 800,
                            fontSize: school.rank <= 3 ? "1.05rem" : "0.9rem",
                            width: 38,
                            height: 38,
                            border: school.rank <= 3 ? `1.5px solid ${getRankColor(school.rank)}` : "none",
                            fontFamily: montserrat.style.fontFamily,
                          }}
                        >
                          {school.rank}
                        </Avatar>

                        {/* Logo & School Name */}
                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: 0 }}>
                          <Avatar
                            src={`https://flagcdn.com/w40/${school.countryCode.toLowerCase()}.png`}
                            alt={school.country}
                            variant="rounded"
                            sx={{
                              width: 26,
                              height: 18,
                              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                              borderRadius: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <Box sx={{ minWidth: 0 }}>
                            <Typography
                              noWrap
                              sx={{
                                fontFamily: montserrat.style.fontFamily,
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                color: COLORS.PRIMARY_BLUE,
                              }}
                            >
                              {school.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontWeight: 500,
                                fontSize: "0.75rem",
                                color: "rgba(0,0,0,0.4)",
                              }}
                            >
                              {school.tier}
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </Grid>

                    {/* Metrics Row */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ xs: "flex-start", sm: "space-around" }}
                        spacing={{ xs: 2.5, sm: 0 }}
                      >
                        <Tooltip title="Innovations / Projects" arrow>
                          <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Lightbulb sx={{ fontSize: 16, color: "#E8B838" }} />
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                fontFamily: roboto.style.fontFamily,
                                color: "rgba(0,0,0,0.7)",
                              }}
                            >
                              {school.innovations}
                            </Typography>
                          </Stack>
                        </Tooltip>

                        <Tooltip title="Research Publications" arrow>
                          <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Science sx={{ fontSize: 16, color: COLORS.PRIMARY_NAVY }} />
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                fontFamily: roboto.style.fontFamily,
                                color: "rgba(0,0,0,0.7)",
                              }}
                            >
                              {school.research}
                            </Typography>
                          </Stack>
                        </Tooltip>

                        <Tooltip title="Certified Mentors" arrow>
                          <Stack direction="row" alignItems="center" spacing={0.5}>
                            <People sx={{ fontSize: 16, color: "#3B82F6" }} />
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                fontFamily: roboto.style.fontFamily,
                                color: "rgba(0,0,0,0.7)",
                              }}
                            >
                              {school.mentors}
                            </Typography>
                          </Stack>
                        </Tooltip>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Grow>
            ))
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default LeadershipCard;
