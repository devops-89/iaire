import React from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Gavel, InfoOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { StepItem } from "./ResourceData";

interface Props {
  items: StepItem[];
}

const IpTimeline: React.FC<Props> = ({ items }) => {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="150"
    >
      {/* Left: Overview card */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Card
          elevation={0}
          sx={{
            p: 3.5,
            borderRadius: "24px",
            border: "1px solid rgba(27, 54, 93, 0.08)",
            background:
              "linear-gradient(135deg, rgba(27, 54, 93, 0.01) 0%, rgba(255, 255, 255, 0.95) 100%)",
            boxShadow: "0 15px 35px rgba(27, 54, 93, 0.03)",
            borderLeft: "6px solid #1B365D",
            position: { md: "sticky" },
            top: { md: "120px" },
          }}
        >
          <Stack spacing={3}>
            {/* Panel header */}
            <Stack direction="row" spacing={1.75} alignItems="center">
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  backgroundColor: "rgba(27, 54, 93, 0.06)",
                  color: "#1B365D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Gavel sx={{ fontSize: 19 }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "16.5px",
                  fontWeight: 800,
                  color: "#0B1727",
                }}
              >
                IP Lifecycle Overview
              </Typography>
            </Stack>

            {/* Phase summaries */}
            <Stack spacing={1.5}>
              {items.map((step, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={1.75}
                  alignItems="center"
                  sx={{
                    cursor: "default",
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "translateX(4px)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "8px",
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      color: "#1B365D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 900,
                      fontFamily: inter.style.fontFamily,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Stack spacing={0}>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "12.5px",
                        fontWeight: 700,
                        color: "#0B1727",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "10.5px",
                        color: "#6B7280",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Phase {step.number} · {step.phase}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>

            {/* Disclaimer */}
            <Box
              sx={{
                borderRadius: "12px",
                p: 2,
                backgroundColor: "rgba(27, 54, 93, 0.04)",
                border: "1px solid rgba(27, 54, 93, 0.08)",
              }}
            >
              <Stack spacing={0.75}>
                <Stack direction="row" spacing={0.75} alignItems="center">
                  <InfoOutlined sx={{ color: "#1B365D", fontSize: 16 }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#1B365D",
                      fontSize: "11px",
                    }}
                  >
                    Legal Disclaimer
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "11px",
                    color: "#4B5563",
                    lineHeight: 1.5,
                  }}
                >
                  IAIRE mentors help draft provisional paperwork, but final filings
                  must be authorized by students, parents, and schools.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Card>
      </Grid>

      {/* Right: Detailed timeline */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={0}>
          {items.map((step, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                gap: 2.5,
                position: "relative",
                pb: idx < items.length - 1 ? 4 : 0,
              }}
            >
              {/* Vertical line */}
              {idx < items.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "21px",
                    top: "48px",
                    bottom: 0,
                    width: "2px",
                    background:
                      "linear-gradient(180deg, rgba(27, 54, 93, 0.12), rgba(27, 54, 93, 0.03))",
                  }}
                />
              )}

              {/* Number */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#1B365D",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "15px",
                  fontFamily: inter.style.fontFamily,
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: "0 4px 12px rgba(27, 54, 93, 0.15)",
                }}
              >
                {step.number}
              </Box>

              {/* Content card */}
              <Card
                elevation={0}
                sx={{
                  flex: 1,
                  borderRadius: "18px",
                  border: "1px solid rgba(27, 54, 93, 0.06)",
                  p: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(27, 54, 93, 0.04)",
                    borderColor: "rgba(27, 54, 93, 0.12)",
                  },
                }}
              >
                <Stack spacing={1.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 800,
                      color: "#64748B",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Phase {step.number} · {step.phase}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontWeight: 800,
                      color: "#0B1727",
                      fontSize: "17px",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      color: "#4B5563",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      px: 2,
                      py: 1.25,
                      borderRadius: "10px",
                      backgroundColor: "rgba(27, 54, 93, 0.03)",
                      borderLeft: "3px solid #1B365D",
                    }}
                  >
                    <TipsAndUpdatesOutlined
                      sx={{
                        fontSize: 15,
                        color: "#1B365D",
                        mt: "1px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "11.5px",
                        color: "#1B365D",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.actionTip}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Box>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default IpTimeline;
