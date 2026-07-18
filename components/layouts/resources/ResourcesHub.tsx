"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Card,
  IconButton,
} from "@mui/material";
import {
  Lightbulb,
  Search,
  Gavel,
  School,
  Download,
  ArrowForward,
  ArrowBack,
  AccessTime,
  CheckCircleOutline,
  InfoOutlined,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

interface ResourceTemplate {
  title: string;
  desc: string;
  details: string[];
  type: string;
  tag: string;
  timeToComplete: string;
  fileUrl: string;
}
interface StepItem {
  number: string;
  title: string;
  phase: string;
  description: string;
  actionTip: string;
}
interface CaseStudy {
  title: string;
  student: string;
  school: string;
  sector: string;
  problem: string;
  solution: string;
  impact: string;
  badgeColor: string;
}

const innovationTemplates: ResourceTemplate[] = [
  {
    title: "Student Innovation Disclosure Template",
    desc: "Formally document the genesis of your invention, including problem definition, novelty search findings, and design blueprints.",
    details: [
      "Prerequisite for official IAIRE certification",
      "Features step-by-step drafting prompts",
      "Format: Guided PDF / DOCX",
    ],
    type: "Template",
    tag: "Ideation & Design",
    timeToComplete: "2-3 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Brainstorming & Feasibility Matrix",
    desc: "Evaluate the societal impact, target audience viability, and technical complexity of your product concept.",
    details: [
      "Helps screen and narrow multiple ideas",
      "Quantifies effort vs. market value",
      "Format: Interactive Spreadsheet",
    ],
    type: "Workbook",
    tag: "Validation",
    timeToComplete: "1-2 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Prototype Specification Sheet",
    desc: "Formulate hardware requirements, micro-controller code architectures, electrical diagrams, and assembly safety checks.",
    details: [
      "Ideal for IoT, electrical, and mechanical ideas",
      "Includes general lab safety checks",
      "Format: Structured Document",
    ],
    type: "Technical Spec",
    tag: "Engineering",
    timeToComplete: "3-4 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Student Pitch Deck Checklist",
    desc: "Organize your startup story slide-by-slide, covering the problem, solution, market validation, and implementation timeline.",
    details: [
      "Standardized 10-slide structure",
      "Features presentation best practices",
      "Format: PPTX Template",
    ],
    type: "Presentation",
    tag: "Pitching",
    timeToComplete: "2 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const researchTemplates: ResourceTemplate[] = [
  {
    title: "Prior Art & Novelty Search Log",
    desc: "Systematically track keywords, databases queried (USPTO, Espacenet, Google Scholar), and results to substantiate novelty.",
    details: [
      "Essential foundation for patent applications",
      "Precludes duplicates or plagiarisms",
      "Format: Search Log sheet",
    ],
    type: "Log Sheet",
    tag: "Prior Art",
    timeToComplete: "3-5 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Literature Review Synthesis Matrix",
    desc: "Organize academic citations, methodologies, sample sizes, and major arguments to outline your research paper.",
    details: [
      "Reduces final drafting timeline",
      "Includes standard citation templates",
      "Format: Spreadsheet / Table",
    ],
    type: "Matrix",
    tag: "Synthesis",
    timeToComplete: "4-6 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "Research Methodology Planner",
    desc: "Map your experimental hypothesis, control/dependent variables, participant criteria, and mathematical analytics plans.",
    details: [
      "Aligns with scientific-method guidelines",
      "Prevents confirmation bias in datasets",
      "Format: Formatted Document",
    ],
    type: "Planner",
    tag: "Design",
    timeToComplete: "2-3 hrs",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    title: "IAIRE High-School Journal Format",
    desc: "Pre-formatted publication template including Abstract, Introduction, Methods, Results, Discussion, and Bibliography.",
    details: [
      "Matches academic journal requirements",
      "Pre-configured font styles and margins",
      "Format: MS Word / LaTeX files",
    ],
    type: "Template",
    tag: "Writing",
    timeToComplete: "Ongoing",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const ipSteps: StepItem[] = [
  {
    number: "01",
    phase: "Research",
    title: "Prior Art & Novelty Verification",
    description:
      "Search international patent databases (USPTO, WIPO, Espacenet) and scientific indexes to guarantee that your invention is genuinely original.",
    actionTip:
      "Avoid presenting details publicly before this search — public disclosure can invalidate patent rights.",
  },
  {
    number: "02",
    phase: "Governance",
    title: "Inventorship & Contribution Agreement",
    description:
      "Formulate a clear agreement about who contributed what. Outlining ownership, co-inventor listings, and school-mentor credits guarantees IP harmony.",
    actionTip:
      "Use the 'Co-Inventor Contribution Log' in the member dashboard to record hours and milestones.",
  },
  {
    number: "03",
    phase: "Filing",
    title: "Provisional Patent Application (PPA)",
    description:
      "Submit a provisional patent application to establish a global 'Priority Date'. You get 12 months to finalize prototypes before a full utility patent.",
    actionTip:
      "IAIRE legal fellows review student disclosures and assist in PPA drafting for certified teams.",
  },
  {
    number: "04",
    phase: "Dissemination",
    title: "Peer-Reviewed Publication",
    description:
      "Synthesize your research methodology and experimental validations into an academic paper. Submit to IAIRE symposia or peer-reviewed journals.",
    actionTip:
      "Ensure your manuscript references your PPA filing number if the paper describes patentable materials.",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "EcoFilter: Solar IoT Water Turbidity System",
    student: "Aarav Mehta, Riya Sen & Team",
    school: "Greenwood International School, Bangalore",
    sector: "Environmental / IoT",
    problem:
      "Rural wells lacked cost-effective, real-time water quality tracking.",
    solution:
      "Solar-powered, 3D-printed filtration nozzle with ESP32 sensor streaming real-time turbidity logs and SMS alerts.",
    impact:
      "Deployed in 3 villages; reduced waterborne complaints by 40%. Secured a provisional patent.",
    badgeColor: "#10B981",
  },
  {
    title: "SargassumBio: Biodegradable Food Film",
    student: "Sophia Chen",
    school: "Vanguard Science Academy, California",
    sector: "Materials Science",
    problem:
      "Sargassum seaweed blooms polluting coastlines alongside petrochemical plastic degradation.",
    solution:
      "Alginate extracted from seaweed biomass combined with organic starch plasticizers for home-compostable film.",
    impact:
      "Decomposes within 14 days. Published in J. of Student Research; IAIRE Innovation Gold Medal.",
    badgeColor: "#F59E0B",
  },
  {
    title: "AgriTrack: Hyperlocal Crop-Demand Mapper",
    student: "Kofi Mensah & Jane Appiah",
    school: "Accra Science & Technology Academy, Ghana",
    sector: "Software / Agritech",
    problem:
      "Smallholder farmers lacked visibility into urban wholesale markets.",
    solution:
      "USSD interface and web dashboard mapping live harvest forecasts to school kitchens and bulk buyers.",
    impact:
      "Connects 45 farms; cut spoilage by 28%, margins up 35%. Approved for incubator seed grants.",
    badgeColor: "#3B82F6",
  },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION CONFIGS — each section is a full-viewport display
   ═══════════════════════════════════════════════════════════════ */

const sections = [
  {
    id: "innovation",
    badge: "Innovation Resources",
    title: "Innovation Templates &",
    titleAccent: "Design Frameworks",
    subtitle:
      "Disclosure, feasibility, specification, and pitch templates — everything a student team needs to move from idea to structured innovation documentation.",
    icon: <Lightbulb sx={{ fontSize: 19 }} />,
    items: innovationTemplates,
    type: "templates" as const,
    bgColor: "#FFFFFF",
  },
  {
    id: "research",
    badge: "Research Resources",
    title: "Research Templates &",
    titleAccent: "Academic Toolkits",
    subtitle:
      "Prior-art search logs, literature synthesis matrices, methodology planners, and pre-formatted journal templates — designed to accelerate scholarly output.",
    icon: <Search sx={{ fontSize: 19 }} />,
    items: researchTemplates,
    type: "templates" as const,
    bgColor: "#F8F9FC",
  },
  {
    id: "ip",
    badge: "IP & Publication Pathway",
    title: "From Idea to",
    titleAccent: "Protected Asset",
    subtitle:
      "A step-by-step roadmap covering prior-art research, inventorship agreements, provisional patent filing, and peer-reviewed publication — the full lifecycle.",
    icon: <Gavel sx={{ fontSize: 19 }} />,
    items: ipSteps,
    type: "timeline" as const,
    bgColor: "#FFFFFF",
  },
  {
    id: "cases",
    badge: "Student Success Stories",
    title: "Real Innovation",
    titleAccent: "Case Studies",
    subtitle:
      "See how IAIRE students transformed classroom ideas into patents, publications, and real-world impact — across IoT, materials science, and agritech.",
    icon: <School sx={{ fontSize: 19 }} />,
    items: caseStudies,
    type: "cases" as const,
    bgColor: "#F8F9FC",
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

const ResourcesHub = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (sectionIdx: number, direction: "left" | "right") => {
    const el = scrollRefs.current[sectionIdx];
    if (el) {
      const scrollAmount = 380;
      el.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box id="resources-hub">
      {sections.map((section, sIdx) => (
        <Box
          key={section.id}
          sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: section.bgColor,
            position: "relative",
            overflow: "hidden",
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
                <Box
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
                </Box>
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

            {/* ── Scroll controls for templates & cases ── */}
            {(section.type === "templates" || section.type === "cases") && (
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{ mb: 3 }}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
              >
                <Box sx={{ flexGrow: 1 }} />
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Scroll to explore
                </Typography>
                <IconButton
                  onClick={() => scroll(sIdx, "left")}
                  sx={{
                    width: 36,
                    height: 36,
                    border: "1.5px solid rgba(27, 54, 93, 0.12)",
                    borderRadius: "10px",
                    color: "#1B365D",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      borderColor: "#1B365D",
                    },
                  }}
                >
                  <ArrowBack sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  onClick={() => scroll(sIdx, "right")}
                  sx={{
                    width: 36,
                    height: 36,
                    border: "1.5px solid rgba(27, 54, 93, 0.12)",
                    borderRadius: "10px",
                    color: "#1B365D",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(27, 54, 93, 0.06)",
                      borderColor: "#1B365D",
                    },
                  }}
                >
                  <ArrowForward sx={{ fontSize: 18 }} />
                </IconButton>
              </Stack>
            )}

            {/* ── TEMPLATE CAROUSEL ── */}
            {section.type === "templates" && (
              <Box
                ref={(el: HTMLDivElement | null) => {
                  scrollRefs.current[sIdx] = el;
                }}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
                sx={{
                  display: "flex",
                  gap: 3,
                  overflowX: "auto",
                  pb: 2,
                  scrollSnapType: "x mandatory",
                  "&::-webkit-scrollbar": { height: "6px" },
                  "&::-webkit-scrollbar-track": { background: "transparent" },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(27, 54, 93, 0.12)",
                    borderRadius: "10px",
                    "&:hover": { background: "rgba(27, 54, 93, 0.25)" },
                  },
                }}
              >
                {(section.items as ResourceTemplate[]).map((item, idx) => (
                  <Card
                    key={idx}
                    elevation={0}
                    sx={{
                      minWidth: { xs: "300px", sm: "340px" },
                      maxWidth: "360px",
                      flex: "0 0 auto",
                      scrollSnapAlign: "start",
                      borderRadius: "20px",
                      border: "1px solid rgba(27, 54, 93, 0.06)",
                      background:
                        section.bgColor === "#FFFFFF"
                          ? "linear-gradient(135deg, rgba(248, 249, 252, 0.6) 0%, #FFFFFF 100%)"
                          : "#FFFFFF",
                      boxShadow: "0 8px 24px rgba(27, 54, 93, 0.03)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#1B365D",
                        boxShadow: "0 20px 40px rgba(27, 54, 93, 0.06)",
                      },
                    }}
                  >
                    <Stack spacing={2.5} sx={{ p: 3, flexGrow: 1 }}>
                      {/* Type + time row */}
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          sx={{
                            px: 1.25,
                            py: 0.35,
                            borderRadius: "6px",
                            backgroundColor: "rgba(27, 54, 93, 0.06)",
                            fontFamily: inter.style.fontFamily,
                            fontSize: "10px",
                            fontWeight: 800,
                            color: "#1B365D",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {item.type}
                        </Box>
                        <Box
                          sx={{
                            px: 1.25,
                            py: 0.35,
                            borderRadius: "6px",
                            border: "1px solid rgba(0,0,0,0.06)",
                            fontFamily: inter.style.fontFamily,
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "#64748B",
                          }}
                        >
                          {item.tag}
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <AccessTime sx={{ fontSize: 13, color: "#94A3B8" }} />
                          <Typography
                            sx={{
                              fontSize: "10.5px",
                              color: "#94A3B8",
                              fontWeight: 600,
                              fontFamily: inter.style.fontFamily,
                            }}
                          >
                            {item.timeToComplete}
                          </Typography>
                        </Stack>
                      </Stack>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 800,
                          color: "#0B1727",
                          fontSize: "16px",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13px",
                          color: "#4B5563",
                          lineHeight: 1.55,
                        }}
                      >
                        {item.desc}
                      </Typography>

                      {/* Check items */}
                      <Stack spacing={0.75} sx={{ flexGrow: 1 }}>
                        {item.details.map((d, dIdx) => (
                          <Stack
                            key={dIdx}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <CheckCircleOutline
                              sx={{
                                fontSize: 15,
                                color: "#1B365D",
                                opacity: 0.5,
                              }}
                            />
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "12px",
                                color: "#4B5563",
                                fontWeight: 500,
                              }}
                            >
                              {d}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Download */}
                    <Box sx={{ px: 3, pb: 2.5, mt: "auto" }}>
                      <Link href="/login">
                        <Button
                          variant="contained"
                          fullWidth
                          size="small"
                          startIcon={<Download sx={{ fontSize: 16 }} />}
                          sx={{
                            backgroundColor: "#1B365D",
                            fontFamily: inter.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "none",
                            borderRadius: "10px",
                            boxShadow: "0 4px 12px rgba(27, 54, 93, 0.12)",
                            py: 1,
                            "&:hover": {
                              backgroundColor: "#122744",
                              boxShadow: "0 8px 20px rgba(27, 54, 93, 0.2)",
                            },
                          }}
                        >
                          Download Template
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                ))}
              </Box>
            )}

            {/* ── IP TIMELINE ── */}
            {section.type === "timeline" && (
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
                        {ipSteps.map((step, idx) => (
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
                          <Stack
                            direction="row"
                            spacing={0.75}
                            alignItems="center"
                          >
                            <InfoOutlined
                              sx={{ color: "#1B365D", fontSize: 16 }}
                            />
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
                            IAIRE mentors help draft provisional paperwork, but
                            final filings must be authorized by students,
                            parents, and schools.
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Card>
                </Grid>

                {/* Right: Detailed timeline */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Stack spacing={0}>
                    {ipSteps.map((step, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          gap: 2.5,
                          position: "relative",
                          pb: idx < ipSteps.length - 1 ? 4 : 0,
                        }}
                      >
                        {/* Vertical line */}
                        {idx < ipSteps.length - 1 && (
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
            )}

            {/* ── CASE STUDIES CAROUSEL ── */}
            {section.type === "cases" && (
              <Box
                ref={(el: HTMLDivElement | null) => {
                  scrollRefs.current[sIdx] = el;
                }}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
                sx={{
                  display: "flex",
                  gap: 3,
                  overflowX: "auto",
                  pb: 2,
                  scrollSnapType: "x mandatory",
                  "&::-webkit-scrollbar": { height: "6px" },
                  "&::-webkit-scrollbar-track": { background: "transparent" },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(27, 54, 93, 0.12)",
                    borderRadius: "10px",
                    "&:hover": { background: "rgba(27, 54, 93, 0.25)" },
                  },
                }}
              >
                {caseStudies.map((cs, idx) => (
                  <Card
                    key={idx}
                    elevation={0}
                    sx={{
                      minWidth: { xs: "300px", sm: "340px" },
                      maxWidth: "380px",
                      flex: "0 0 auto",
                      scrollSnapAlign: "start",
                      borderRadius: "20px",
                      border: "1px solid rgba(27, 54, 93, 0.06)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: `${cs.badgeColor}50`,
                        boxShadow: `0 20px 40px ${cs.badgeColor}12`,
                      },
                    }}
                  >
                    {/* Color accent */}
                    <Box
                      sx={{
                        height: "5px",
                        background: `linear-gradient(90deg, ${cs.badgeColor}, ${cs.badgeColor}70)`,
                      }}
                    />

                    <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
                      {/* Sector */}
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignSelf: "flex-start",
                          px: 1.25,
                          py: 0.35,
                          borderRadius: "6px",
                          backgroundColor: `${cs.badgeColor}10`,
                          fontFamily: inter.style.fontFamily,
                          fontSize: "10px",
                          fontWeight: 800,
                          color: cs.badgeColor,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {cs.sector}
                      </Box>

                      {/* Title + author */}
                      <Stack spacing={0.5}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontWeight: 800,
                            color: "#0B1727",
                            fontSize: "16px",
                            lineHeight: 1.3,
                          }}
                        >
                          {cs.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#334155",
                          }}
                        >
                          By {cs.student}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "11px",
                            color: "#94A3B8",
                            fontWeight: 500,
                          }}
                        >
                          {cs.school}
                        </Typography>
                      </Stack>

                      {/* Separator */}
                      <Box
                        sx={{
                          height: "1px",
                          backgroundColor: "rgba(0,0,0,0.04)",
                        }}
                      />

                      {/* Problem / Solution / Impact */}
                      <Stack spacing={1.75} sx={{ flexGrow: 1 }}>
                        {[
                          { label: "Problem", text: cs.problem, lc: "#64748B" },
                          {
                            label: "Solution",
                            text: cs.solution,
                            lc: "#64748B",
                          },
                          {
                            label: "Impact",
                            text: cs.impact,
                            lc: cs.badgeColor,
                          },
                        ].map((b, bIdx) => (
                          <Stack key={bIdx} spacing={0.25}>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "9.5px",
                                fontWeight: 800,
                                color: b.lc,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                              }}
                            >
                              {b.label}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: "12.5px",
                                color: bIdx === 2 ? "#0B1727" : "#4B5563",
                                fontWeight: bIdx === 2 ? 600 : 400,
                                lineHeight: 1.5,
                              }}
                            >
                              {b.text}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Box>
            )}
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default ResourcesHub;
