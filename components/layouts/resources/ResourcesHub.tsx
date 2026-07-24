"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

import {
  sections,
  ResourceTemplate,
  StepItem,
  CaseStudy,
} from "./components/ResourceData";
import TemplateCarousel from "./components/TemplateCarousel";
import IpTimeline from "./components/IpTimeline";
import CaseStudiesCarousel from "./components/CaseStudiesCarousel";
import SectionBadge from "@/components/widgets/SectionBadge";

const ResourcesHub = () => {
  return (
    <Box id="resources-hub">
      {sections.map((section, sIdx) => (
        <Box
          key={section.id}
          sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: section.bgColor,
            position: "relative",
            overflow: "clip",
            borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Background glows */}
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              [sIdx % 2 === 0 ? "left" : "right"]: "-8%",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            {/* ── Section Header ── */}
            <Stack
              spacing={2.5}
              sx={{ mb: { xs: 4, md: 5 }, maxWidth: "680px" }}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              {/* Monospace badge */}
              <Box sx={{ display: "flex" }}>
                {/* <Box
                  sx={{
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    color: "#1B365D",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {section.badge}
                </Box> */}
                <SectionBadge
                  label={section.badge}
                  align={{ xs: "flex-start", md: "flex-start" }}
                />
              </Box>

              {/* Title */}
              <Typography
                component="h2"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: { xs: "28px", sm: "34px", md: "38px" },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0B1727",
                }}
              >
                {section.title}{" "}
                <span style={{ color: "#1B365D" }}>{section.titleAccent}</span>
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  color: "#4B5563",
                }}
              >
                {section.subtitle}
              </Typography>
            </Stack>

            {/* ── TEMPLATE CAROUSEL ── */}
            {section.type === "templates" && (
              <TemplateCarousel
                items={section.items as ResourceTemplate[]}
                bgColor={section.bgColor}
              />
            )}

            {/* ── IP TIMELINE ── */}
            {section.type === "timeline" && (
              <IpTimeline items={section.items as StepItem[]} />
            )}

            {/* ── CASE STUDIES CAROUSEL ── */}
            {section.type === "cases" && (
              <CaseStudiesCarousel items={section.items as CaseStudy[]} />
            )}
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesHub;
