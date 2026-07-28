"use client";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";
import { roboto, montserrat } from "@/utils/fonts";
import {
  WorkspacePremium,
  CheckCircle,
  RadioButtonUnchecked,
  EmojiEvents,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";

const TIERS = [
  "Educator Member",
  "Certified Innovation or Research Mentor",
  "Associate Fellow of Innovation or Research Education",
  "Fellow of Innovation or Research Education",
];

function computeTier(
  isMember: boolean,
  numInnovations: number,
  numResearch: number,
) {
  const cert = isMember && numInnovations >= 1;
  const assoc = cert && numInnovations >= 3 && numResearch >= 2;
  const fellow = assoc && numInnovations > 5 && numResearch > 4;

  if (fellow) {
    return {
      activeStep: 3,
      currentTier: TIERS[3],
      nextTier: "Max Tier Achieved",
      progressPercent: 100,
      checklist: [
        { text: "5+ innovation projects", met: true },
        { text: "4+ research publications", met: true },
      ],
    };
  }
  if (assoc) {
    const met1 = numInnovations > 5 ? 1 : 0;
    const met2 = numResearch > 4 ? 1 : 0;
    return {
      activeStep: 2,
      currentTier: TIERS[2],
      nextTier: TIERS[3],
      progressPercent: Math.round(((met1 + met2) / 2) * 100),
      checklist: [
        { text: "More than 5 innovation projects", met: numInnovations > 5 },
        { text: "More than 4 research publications", met: numResearch > 4 },
      ],
    };
  }
  if (cert) {
    const met1 = numInnovations >= 3 ? 1 : 0;
    const met2 = numResearch >= 2 ? 1 : 0;
    return {
      activeStep: 1,
      currentTier: TIERS[1],
      nextTier: TIERS[2],
      progressPercent: Math.round(((met1 + met2) / 2) * 100),
      checklist: [
        { text: "3+ innovation projects", met: numInnovations >= 3 },
        { text: "2+ research publications", met: numResearch >= 2 },
      ],
    };
  }
  const met1 = isMember ? 1 : 0;
  const met2 = numInnovations >= 1 ? 1 : 0;
  return {
    activeStep: 0,
    currentTier: TIERS[0],
    nextTier: TIERS[1],
    progressPercent: Math.round(((met1 + met2) / 2) * 100),
    checklist: [
      { text: "Active IAIRE membership", met: isMember },
      { text: "1+ innovation or research project", met: numInnovations >= 1 },
    ],
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

const EducatorWelcomeBanner = () => {
  const { educatorData } = useSignup();
  const { innovationData, fetchInnovationList } = useGetAllInnovation();
  const { researchData, fetchResearchData } = useGetAllResearch();

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();
  }, []);

  const numInnovations = innovationData?.length ?? 0;
  const numResearch = researchData?.length ?? 0;
  const isMember =
    (educatorData?.payments?.length ?? 0) > 0 &&
    (educatorData?.payments?.some(
      (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
    ) ??
      false);

  const { activeStep, currentTier, nextTier, progressPercent, checklist } =
    computeTier(isMember, numInnovations, numResearch);

  const fullName = educatorData
    ? `${educatorData.firstName} ${educatorData.lastName}`
    : "Educator";
  const initials = educatorData
    ? `${educatorData.firstName?.[0] ?? ""}${educatorData.lastName?.[0] ?? ""}`
    : "E";

  return (
    <Box sx={{ mb: 3 }}>
      {/* ── Top compact banner ─────────────────────────────────────────────── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.PRIMARY_NAVY} 0%, #132B4A 100%)`,
          borderRadius: "20px",
          px: { xs: 2.5, md: 4 },
          py: { xs: 2.5, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 2, sm: 3 },
          boxShadow: "0 8px 24px rgba(11,23,39,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG watermark */}
        <WorkspacePremium
          sx={{
            position: "absolute",
            right: -20,
            bottom: -20,
            fontSize: 160,
            color: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />

        {/* Avatar */}
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: "14px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 800,
              fontSize: 20,
              color: COLORS.WHITE,
              letterSpacing: "-0.5px",
            }}
          >
            {initials}
          </Typography>
        </Box>

        {/* Name + school */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: 18, md: 22 },
              color: COLORS.WHITE,
              letterSpacing: "-0.3px",
              lineHeight: 1.2,
            }}
          >
            {fullName}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            flexWrap="wrap"
            sx={{ mt: 0.5 }}
          >
            {educatorData?.membershipCode && (
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontSize: 12,
                  fontWeight: 600,
                  color: COLORS.ACCENT_TAN || "#D1A054",
                  letterSpacing: "0.5px",
                }}
              >
                #{educatorData.membershipCode}
              </Typography>
            )}
            {educatorData?.school?.name && (
              <>
                <Box
                  sx={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.3)",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 500,
                  }}
                >
                  {educatorData.school.name}
                </Typography>
              </>
            )}
          </Stack>
        </Box>

        {/* Tier badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.12)",
            px: 2,
            py: 0.9,
            borderRadius: "12px",
            flexShrink: 0,
          }}
        >
          <WorkspacePremium
            sx={{ fontSize: 16, color: COLORS.ACCENT_TAN || "#D1A054" }}
          />
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 11,
              fontWeight: 700,
              color: COLORS.WHITE,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              whiteSpace: "nowrap",
            }}
          >
            {currentTier}
          </Typography>
        </Box>
      </Box>

      {/* ── Bottom tier progress row ────────────────────────────────────────── */}
      <Box
        sx={{
          mt: 2,
          borderRadius: "20px",
          border: "1px solid rgba(27,54,93,0.08)",
          bgcolor: "#FFFFFF",
          px: { xs: 2.5, md: 4 },
          py: 2.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 2.5, md: 0 },
        }}
      >
        {/* Tier steps - horizontal pills */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0}
          sx={{ flex: 1, minWidth: 0, overflow: "hidden" }}
        >
          {TIERS.map((tier, i) => {
            const isActive = i === activeStep;
            const isDone = i < activeStep;
            return (
              <React.Fragment key={i}>
                <Stack
                  alignItems="center"
                  spacing={0.5}
                  sx={{ minWidth: 0, flex: 1 }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isActive
                        ? COLORS.PRIMARY_NAVY
                        : isDone
                          ? "#10B981"
                          : "rgba(0,0,0,0.06)",
                      border: `2px solid ${
                        isActive
                          ? COLORS.PRIMARY_NAVY
                          : isDone
                            ? "#10B981"
                            : "rgba(0,0,0,0.1)"
                      }`,
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    {isDone ? (
                      <CheckCircle sx={{ fontSize: 14, color: "#fff" }} />
                    ) : i === TIERS.length - 1 ? (
                      <EmojiEvents
                        sx={{
                          fontSize: 14,
                          color: isActive ? "#fff" : "rgba(0,0,0,0.25)",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: isActive ? "#fff" : "rgba(0,0,0,0.2)",
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive
                        ? COLORS.PRIMARY_NAVY
                        : isDone
                          ? "#10B981"
                          : "rgba(0,0,0,0.35)",
                      textAlign: "center",
                      lineHeight: 1.25,
                      px: 0.5,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {tier}
                  </Typography>
                </Stack>
                {i < TIERS.length - 1 && (
                  <Box
                    sx={{
                      flex: 1,
                      height: 2,
                      bgcolor: i < activeStep ? "#10B981" : "rgba(0,0,0,0.08)",
                      borderRadius: "1px",
                      mb: { xs: 0, sm: "22px" },
                      mx: 0.5,
                      minWidth: 12,
                      transition: "background 0.3s",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Stack>

        {/* Vertical divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 4,
            display: { xs: "none", md: "block" },
            borderColor: "rgba(0,0,0,0.07)",
          }}
        />

        {/* Progress + checklist */}
        <Box sx={{ width: { xs: "100%", md: 260 }, flexShrink: 0 }}>
          {/* Progress bar */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(0,0,0,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {activeStep < TIERS.length - 1
                ? `→ ${nextTier}`
                : "Max tier achieved"}
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: 13,
                fontWeight: 900,
                color: COLORS.PRIMARY_NAVY,
              }}
            >
              {progressPercent}%
            </Typography>
          </Stack>
          <Box
            sx={{
              height: 6,
              bgcolor: "rgba(0,0,0,0.05)",
              borderRadius: "3px",
              overflow: "hidden",
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${progressPercent}%`,
                background: `linear-gradient(90deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.ACCENT_TAN || "#D1A054"} 100%)`,
                borderRadius: "3px",
                transition: "width 0.5s ease-in-out",
              }}
            />
          </Box>

          {/* Compact checklist */}
          {activeStep < TIERS.length - 1 && (
            <Stack spacing={0.75}>
              {checklist.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  alignItems="center"
                  spacing={0.75}
                >
                  {item.met ? (
                    <CheckCircle
                      sx={{ fontSize: 13, color: "#10B981", flexShrink: 0 }}
                    />
                  ) : (
                    <RadioButtonUnchecked
                      sx={{
                        fontSize: 13,
                        color: "rgba(0,0,0,0.2)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontSize: 11,
                      color: item.met
                        ? COLORS.PRIMARY_NAVY
                        : "rgba(0,0,0,0.45)",
                      fontWeight: item.met ? 600 : 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EducatorWelcomeBanner;
