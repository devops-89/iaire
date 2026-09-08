import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Stack,
  Chip,
  CircularProgress,
} from "@mui/material";
import {
  CheckCircle,
  MilitaryTech,
  School,
  AutoStories,
  Lightbulb,
} from "@mui/icons-material";
import { roboto, montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { glassCardStyle, goldGradient, glassBorder } from "./styles";

interface UpgradeMembershipProps {
  currentTier: string;
  nextTier: string;
  nextTierProgress: number;
  numInnovations: number;
  numResearch: number;
  reqScholarMet: boolean;
  reqFellowMentor: boolean;
}

const UpgradeMembership: React.FC<UpgradeMembershipProps> = ({
  currentTier,
  nextTier,
  nextTierProgress,
  numInnovations,
  numResearch,
  reqScholarMet,
  reqFellowMentor,
}) => {
  return (
    <Box sx={{ mt: 3 }}>
      {/* Dynamic Eligibility Dashboard Gauge */}
      <Card
        sx={{
          ...glassCardStyle,
          p: 5,
          background: "linear-gradient(135deg, #fff 0%, #F9F7F5 100%)",
        }}
      >
        <Grid container spacing={5} alignItems="center">
          {/* Left Gauge */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRight: { md: `1.5px solid rgba(0,0,0,0.06)` },
            }}
          >
            <Box sx={{ position: "relative", display: "inline-flex", mb: 3 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={146}
                thickness={6}
                sx={{ color: "rgba(0,0,0,0.04)", position: "absolute" }}
              />
              <CircularProgress
                variant="determinate"
                value={nextTierProgress}
                size={146}
                thickness={6}
                sx={{
                  color: "#C5A059",
                  "& .MuiCircularProgress-circle": {
                    strokeLinecap: "round",
                  },
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontFamily: roboto.style.fontFamily,
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  {nextTierProgress}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  ELIGIBLE
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                fontFamily: roboto.style.fontFamily,
                textAlign: "center",
                color: COLORS.PRIMARY_NAVY,
              }}
            >
              {currentTier}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#C5A059",
                fontWeight: 700,
                mt: 0.5,
                letterSpacing: "0.5px",
              }}
            >
              Next Rank: {nextTier}
            </Typography>
          </Grid>

          {/* Right Criteria Details */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ pl: { md: 5 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontFamily: roboto.style.fontFamily,
                mb: 1,
                color: COLORS.PRIMARY_NAVY,
              }}
            >
              Advancement Tracker
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontFamily: montserrat.style.fontFamily,
              }}
            >
              Your academic advancement is evaluated dynamically based on
              standard criteria including training completion, submissions,
              and research mentorship.
            </Typography>

            <Stack spacing={3}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Innovation Records ({numInnovations} / 1 Submitted)
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 800,
                      color: numInnovations >= 1 ? "#10B981" : "#6B7280",
                    }}
                  >
                    {numInnovations >= 1 ? "Requirement Met" : "1 Required"}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    width: "100%",
                    height: 6,
                    borderRadius: 3,
                    bgcolor: "#E5E7EB",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${Math.min(numInnovations * 100, 100)}%`,
                      height: "100%",
                      background:
                        numInnovations >= 1 ? goldGradient : "#E5E7EB",
                      borderRadius: 3,
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      fontFamily: montserrat.style.fontFamily,
                    }}
                  >
                    Research Records ({numResearch} / 1 Submitted)
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 800,
                      color: numResearch >= 1 ? "#10B981" : "#6B7280",
                    }}
                  >
                    {numResearch >= 1 ? "Requirement Met" : "1 Required"}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    width: "100%",
                    height: 6,
                    borderRadius: 3,
                    bgcolor: "#E5E7EB",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${Math.min(numResearch * 100, 100)}%`,
                      height: "100%",
                      background: numResearch >= 1 ? goldGradient : "#E5E7EB",
                      borderRadius: 3,
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* Custom Timeline Layout */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          fontFamily: roboto.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
          mb: 4,
          mt: 5,
          textAlign: "center",
        }}
      >
        IAIRE Advancement Roadmap
      </Typography>

      <Stack spacing={4} sx={{ position: "relative", px: { xs: 1, md: 3 } }}>
        {[
          {
            tier: "Tier 1: Student Member",
            desc: "Entry-level designation conferred upon students admitted to the Academy; eligible to participate in Academy-approved programs, competitions, mentorship initiatives, training modules, and research or innovation activities.",
            criteria: [
              "Admitted to the Academy",
              "Access to Academy basic resources",
            ],
            met: true,
            icon: <School />,
          },
          {
            tier: "Tier 2 & 3: Student Scholar / Associate",
            desc: "Demonstrate competencies prescribed under the published Standards of the Academy through training completion and patent-pending innovations or journal research papers.",
            criteria: [
              "Successfully complete Academy-approved training pathway",
              "At least one (1) patent-pending innovation OR one (1) accepted research paper",
            ],
            met: reqScholarMet,
            icon: <AutoStories />,
          },
          {
            tier: "Tier 4: Fellow of Innovation or Research",
            desc: "Sustained achievement, leadership, and mentorship capability. Guide student teams in developing inventions and papers.",
            criteria: [
              "Serve as Assistant Mentor, peer mentor, or student leader",
              "Mentor at least one (1) student team in developing patent-pending innovation or peer-reviewed research paper",
            ],
            met: reqFellowMentor,
            icon: <Lightbulb />,
          },
          {
            tier: "Tier 5: Fellow Student of Innovation or Research",
            desc: "The highest student distinction. Requires Associate Fellow status, personal patents/publications, and mentorship of multiple student teams.",
            criteria: [
              "Personal achievement of at least one (1) granted patent and/or peer-reviewed publication",
              "Successful mentorship of at least two (2) student teams",
              "Development of innovation recognized of outstanding significance by IAIRE",
            ],
            met: false,
            icon: <MilitaryTech />,
          },
        ].map((step, idx) => (
          <Card
            key={idx}
            sx={{
              ...glassCardStyle,
              p: 3.5,
              border: step.met
                ? "1px solid rgba(16, 185, 129, 0.2)"
                : glassBorder,
              position: "relative",
            }}
          >
            <Grid container spacing={3} alignItems="flex-start">
              <Grid
                size={{ xs: 12, sm: 1 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "18px",
                    background: step.met
                      ? goldGradient
                      : "rgba(0, 0, 0, 0.05)",
                    color: step.met ? "#fff" : "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: step.met
                      ? "0 8px 20px rgba(223, 186, 115, 0.3)"
                      : "none",
                  }}
                >
                  {step.icon}
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 11 }}>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        color: COLORS.PRIMARY_NAVY,
                      }}
                    >
                      {step.tier}
                    </Typography>
                    <Chip
                      label={step.met ? "COMPLETED" : "LOCKED"}
                      size="small"
                      color={step.met ? "success" : "default"}
                      sx={{ fontWeight: 800, fontSize: "10px" }}
                    />
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: montserrat.style.fontFamily,
                      mb: 1,
                    }}
                  >
                    {step.desc}
                  </Typography>

                  <Box
                    sx={{ pt: 1, borderTop: "1px dashed rgba(0,0,0,0.06)" }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: "text.secondary",
                        mb: 1,
                        display: "block",
                      }}
                    >
                      CRITERIA CHECKLIST:
                    </Typography>
                    <Stack spacing={1}>
                      {step.criteria.map((crit, cIdx) => (
                        <Stack
                          key={cIdx}
                          direction="row"
                          spacing={1.5}
                          alignItems="center"
                        >
                          {step.met ? (
                            <CheckCircle
                              sx={{ color: "#10B981", fontSize: 16 }}
                            />
                          ) : (
                            <Box
                              sx={{
                                width: 14,
                                height: 14,
                                borderRadius: "50%",
                                border: "2px solid rgba(0,0,0,0.2)",
                              }}
                            />
                          )}
                          <Typography
                            variant="caption"
                            sx={{
                              color: step.met
                                ? "text.primary"
                                : "text.secondary",
                              fontWeight: 500,
                            }}
                          >
                            {crit}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default UpgradeMembership;
