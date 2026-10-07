"use client";
import Plans from "@/components/modals/common/Plans";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useGetResources } from "@/hooks/common/useResources";
import { useModal } from "@/store/useModal";
import { useSignup } from "@/store/useSignup";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { montserrat, roboto, inter } from "@/utils/fonts";
import {
  ArticleOutlined,
  AutoAwesomeOutlined,
  Close,
  Lock,
  MenuBookOutlined,
  OpenInNewOutlined,
  SearchOutlined,
  VerifiedUserOutlined,
  ViewModuleOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography} from "@mui/material";
import React, { useState } from "react";
import { Atom } from "react-loading-indicators";
import BeamButton from "@/components/widgets/BeamButton";

const RESOURCE_TABS = [
  { label: "All Resources", value: "all" },
  { label: "Playbooks", value: "playbook" },
  { label: "Modules", value: "module" },
  { label: "Templates", value: "template" },
];

const FALLBACK_RESOURCES = [
  {
    id: 1,
    title: "IRE Program Educator Playbook",
    description:
      "A complete guide for educators to run innovation, research, and entrepreneurship modules in school teams.",
    type: "playbook",
    category: "IRE Program",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 2,
    title: "Novelty & Prior Art Research Module",
    description:
      "Learning resource detailing novelty search techniques, patent search databases, and validation checkers.",
    type: "module",
    category: "Research",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: 3,
    title: "Student Innovation Disclosure Template",
    description:
      "Printable template for describing problem statements, novelty check notes, and draft plans for students.",
    type: "template",
    category: "Innovation",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const ResourceAccess = ({
  role = USER_ROLES.TEACHER,
}: {
  role?: USER_ROLES.TEACHER | USER_ROLES.STUDENT;
}) => {
  const { showModal } = useModal();
  const { educatorData, data: studentData } = useSignup();
  const { resources, loading } = useGetResources();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const userData = role === USER_ROLES.STUDENT ? studentData : educatorData;

  const isMember =
    (userData?.payments?.length ?? 0) > 0 &&
    userData?.payments?.some(
      (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
    );

  const isPaymentPending = userData?.payments?.some(
    (p: any) => p.status === "PENDING" || p.membership?.status === "PAYMENT_PENDING"
  );

  const displayResources =
    resources.length > 0 ? resources : FALLBACK_RESOURCES;

  const filteredResources = displayResources.filter((res) => {
    const matchesTab =
      activeTab === "all" || res.type?.toLowerCase().includes(activeTab);
    const matchesSearch =
      !searchQuery ||
      res.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleAccess = (url?: string) => {
    if (!isMember) {
      showModal(<Plans role={role} />);
      return;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };

  const getIcon = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("playbook"))
      return <MenuBookOutlined sx={{ fontSize: 24 }} />;
    if (t.includes("module"))
      return <ViewModuleOutlined sx={{ fontSize: 24 }} />;
    if (t.includes("template"))
      return <ArticleOutlined sx={{ fontSize: 24 }} />;
    return <MenuBookOutlined sx={{ fontSize: 24 }} />;
  };

  const getThemeColor = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("playbook")) return "#1B365D";
    if (t.includes("module")) return "#EA580C";
    if (t.includes("template")) return "#4F46E5";
    return "#0D9488";
  };

  const getThemeBg = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("playbook"))
      return "linear-gradient(135deg, rgba(27, 54, 93, 0.1) 0%, rgba(27, 54, 93, 0.03) 100%)";
    if (t.includes("module"))
      return "linear-gradient(135deg, rgba(234, 88, 12, 0.12) 0%, rgba(234, 88, 12, 0.03) 100%)";
    if (t.includes("template"))
      return "linear-gradient(135deg, rgba(79, 70, 229, 0.12) 0%, rgba(79, 70, 229, 0.03) 100%)";
    return "linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(13, 148, 136, 0.03) 100%)";
  };

  const getThemeBorder = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("playbook")) return "rgba(27, 54, 93, 0.18)";
    if (t.includes("module")) return "rgba(234, 88, 12, 0.22)";
    if (t.includes("template")) return "rgba(79, 70, 229, 0.22)";
    return "rgba(13, 148, 136, 0.22)";
  };

  const tabCounts = {
    all: displayResources.length,
    playbook: displayResources.filter((res) =>
      res.type?.toLowerCase().includes("playbook")
    ).length,
    module: displayResources.filter((res) =>
      res.type?.toLowerCase().includes("module")
    ).length,
    template: displayResources.filter((res) =>
      res.type?.toLowerCase().includes("template")
    ).length,
  };

  return (
    <Box sx={{ py: 1 }}>
      {/* Breadcrumb section */}
      <Stack sx={{ mb: 3 }}>
        <Breadcrumb
          title="Resource Access"
          data={[
            {
              title: "Dashboard",
              href: "/dashboard",
            },
            {
              title: "Resource Access",
              href: "/dashboard/educator/resource-access",
            },
          ]}
        />
      </Stack>

      <Stack spacing={4}>
        {/* Welcome Card Banner */}
        <Card
          sx={{
            p: { xs: 3.5, md: 5 },
            background:
              "linear-gradient(135deg, #0A192F 0%, #122B52 50%, #1B365D 100%)",
            color: "#fff",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0px 16px 40px -10px rgba(11, 23, 47, 0.35)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Ambient ambient glow accents */}
          <Box
            sx={{
              width: 450,
              height: 450,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(238, 142, 38, 0.18) 0%, transparent 70%)",
              position: "absolute",
              top: -120,
              right: -80,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
              position: "absolute",
              bottom: -100,
              left: "20%",
              pointerEvents: "none",
            }}
          />

          <Stack
            spacing={2.5}
            sx={{ position: "relative", zIndex: 2, maxWidth: 760 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.6,
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                alignSelf: "flex-start",
              }}
            >
              <AutoAwesomeOutlined sx={{ fontSize: 14, color: "#FDBA74" }} />
              <Typography
                sx={{
                  fontFamily: inter.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "#FED7AA",
                }}
              >
                Curated IRE Knowledge Repository
              </Typography>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
                letterSpacing: "-0.8px",
                fontSize: { xs: "28px", sm: "34px", md: "40px" },
                lineHeight: 1.2,
              }}
            >
              IRE Resource Library
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: inter.style.fontFamily,
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.65,
                fontSize: { xs: "14px", md: "15px" },
                maxWidth: 680,
              }}
            >
              Unlock exclusive classroom playbooks, teacher guides, student
              modules, templates, and regulatory reference documents designed
              to drive innovation and research excellence in your school.
            </Typography>

            {/* Quick Feature Badges */}
            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              sx={{ pt: 0.5 }}
            >
              {[
                { label: "Verified Curricula", icon: "📚" },
                { label: "Patent & Research Frameworks", icon: "💡" },
                { label: "Ready-to-Use Templates", icon: "📄" },
                { label: "Instant Digital Access", icon: "⚡" },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.5,
                    py: 0.6,
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "12px",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Card>

        {/* Search and Filters Section */}
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            sx={{
              mb: 4,
              pb: 2,
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            {/* Segmented Pill Tabs with Count Badges */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                p: 0.75,
                bgcolor: "#F8FAFC",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                overflowX: "auto",
                maxWidth: "100%",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {RESOURCE_TABS.map((tab) => {
                const isSelected = activeTab === tab.value;
                const count =
                  tabCounts[tab.value as keyof typeof tabCounts] ?? 0;
                return (
                  <Box
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    sx={{
                      cursor: "pointer",
                      py: 1,
                      px: 2,
                      borderRadius: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      fontWeight: isSelected ? 700 : 500,
                      color: isSelected ? "#0F172A" : "#64748B",
                      bgcolor: isSelected ? "#FFFFFF" : "transparent",
                      boxShadow: isSelected
                        ? "0 2px 8px rgba(15, 23, 42, 0.08)"
                        : "none",
                      border: isSelected
                        ? "1px solid #E2E8F0"
                        : "1px solid transparent",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#0F172A",
                        bgcolor: isSelected
                          ? "#FFFFFF"
                          : "rgba(255, 255, 255, 0.6)",
                      },
                    }}
                  >
                    <span>{tab.label}</span>
                    <Box
                      sx={{
                        fontSize: "11px",
                        fontWeight: 700,
                        px: 0.8,
                        py: 0.2,
                        borderRadius: "6px",
                        bgcolor: isSelected
                          ? "rgba(27, 54, 93, 0.08)"
                          : "rgba(100, 116, 139, 0.1)",
                        color: isSelected ? "#1B365D" : "#64748B",
                      }}
                    >
                      {count}
                    </Box>
                  </Box>
                );
              })}
            </Stack>

            {/* Advanced Search Input */}
            <TextField
              placeholder="Search resources..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined sx={{ color: "#94a3b8", fontSize: 20 }} />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchQuery("")}
                      edge="end"
                      sx={{ p: 0.5 }}
                    >
                      <Close sx={{ fontSize: 16 }} />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "14px",
                  bgcolor: "#fff",
                  fontSize: "14px",
                  fontFamily: inter.style.fontFamily,
                  width: { xs: "100%", md: 300 },
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  "& fieldset": {
                    borderColor: "#e2e8f0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#cbd5e1 !important",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1B365D !important",
                    borderWidth: "1.5px",
                  },
                },
              }}
            />
          </Stack>

          {/* Resources List Grid */}
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
              <Atom color="#1B365D" size="medium" />
            </Box>
          ) : (
            <Grid container spacing={3.5}>
              {filteredResources.map((item) => {
                const themeColor = getThemeColor(item.type);
                const themeBg = getThemeBg(item.type);
                const themeBorder = getThemeBorder(item.type);

                return (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 20px -2px rgba(15, 23, 42, 0.05)",
                        border: "1px solid #E2E8F0",
                        background: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow:
                            "0px 20px 35px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(27, 54, 93, 0.1)",
                          borderColor: "rgba(27, 54, 93, 0.2)",
                        },
                      }}
                    >
                      {/* Top Icon and Status Badge Row */}
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ p: 3, pb: 2 }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            background: themeBg,
                            display: "grid",
                            placeItems: "center",
                            color: themeColor,
                            border: `1px solid ${themeBorder}`,
                          }}
                        >
                          {getIcon(item.type)}
                        </Box>

                        {/* Resource Status Badge */}
                        {!isMember ? (
                          <Chip
                            icon={
                              <Lock
                                sx={{
                                  fontSize: "13px !important",
                                  color: "#D97706 !important",
                                }}
                              />
                            }
                            label="Premium"
                            size="small"
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 700,
                              fontSize: 11,
                              bgcolor: "#FFFBEB",
                              color: "#D97706",
                              border: "1px solid #FDE68A",
                              borderRadius: "8px",
                              pl: 0.5,
                            }}
                          />
                        ) : (
                          <Chip
                            icon={
                              <VerifiedUserOutlined
                                sx={{
                                  fontSize: "13px !important",
                                  color: "#10B981 !important",
                                }}
                              />
                            }
                            label="Unlocked"
                            size="small"
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 700,
                              fontSize: 11,
                              bgcolor: "#ECFDF5",
                              color: "#059669",
                              border: "1px solid #A7F3D0",
                              borderRadius: "8px",
                              pl: 0.5,
                            }}
                          />
                        )}
                      </Stack>

                      {/* Card Content */}
                      <Box
                        sx={{
                          px: 3,
                          pb: 2.5,
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Type Label */}
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "11px",
                            fontWeight: 700,
                            color: themeColor,
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            mb: 0.75,
                          }}
                        >
                          {item.type || "Resource"}
                        </Typography>

                        {/* Title */}
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#0F172A",
                            lineHeight: 1.4,
                            mb: 1.25,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "48px",
                          }}
                        >
                          {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13.5px",
                            color: "#64748B",
                            lineHeight: 1.6,
                            mb: 2.5,
                            flexGrow: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "64px",
                          }}
                        >
                          {item.description ||
                            "Access custom materials, toolkits, and curated playbooks designed to structure your classroom workflow."}
                        </Typography>

                        {/* Tags / Meta Chips */}
                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          useFlexGap
                          sx={{ mt: "auto" }}
                        >
                          {item.category && (
                            <Chip
                              label={item.category}
                              size="small"
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontWeight: 600,
                                fontSize: 11,
                                bgcolor: "#F1F5F9",
                                color: "#475569",
                                borderRadius: "8px",
                                height: "26px",
                              }}
                            />
                          )}
                          <Chip
                            icon={
                              <ArticleOutlined
                                sx={{
                                  fontSize: "14px !important",
                                  color: "#64748B !important",
                                }}
                              />
                            }
                            label="Resource File"
                            size="small"
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 600,
                              fontSize: 11,
                              bgcolor: "rgba(15, 23, 42, 0.04)",
                              color: "#64748B",
                              borderRadius: "8px",
                              height: "26px",
                              pl: 0.5,
                            }}
                          />
                        </Stack>
                      </Box>

                      {/* Card Footer Button Container */}
                      <Box sx={{ p: 3, pt: 2, borderTop: "1px solid #F1F5F9" }}>
                        {isPaymentPending ? (
                          <BeamButton
                            variant="contained"
                            fullWidth
                            endIcon={<Lock />}
                            disabled
                            sx={{
                              background: "#94A3B8",
                              color: COLORS.WHITE,
                              textTransform: "none",
                              borderRadius: "12px",
                              padding: "10px 0",
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 700,
                              fontSize: 14,
                              "&.Mui-disabled": {
                                background: "#94A3B8",
                                color: "rgba(255, 255, 255, 0.8)",
                              },
                            }}
                          >
                            Payment Pending
                          </BeamButton>
                        ) : (
                          <BeamButton
                            variant="contained"
                            fullWidth
                            endIcon={
                              <OpenInNewOutlined sx={{ fontSize: 18 }} />
                            }
                            onClick={() => handleAccess(item.fileUrl)}
                            sx={{
                              background:
                                "linear-gradient(135deg, #1B365D 0%, #254F85 100%)",
                              color: COLORS.WHITE,
                              textTransform: "none",
                              borderRadius: "12px",
                              padding: "11px 0",
                              fontFamily: inter.style.fontFamily,
                              fontWeight: 700,
                              fontSize: 14,
                              boxShadow: "0 4px 12px rgba(27, 54, 93, 0.2)",
                              transition:
                                "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #0F2038 0%, #1B365D 100%)",
                                boxShadow: "0 8px 20px rgba(27, 54, 93, 0.35)",
                                transform: "translateY(-1px)",
                              },
                            }}
                          >
                            Access Resource
                          </BeamButton>
                        )}
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              {filteredResources.length === 0 && (
                <Grid size={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 10,
                      px: 3,
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      border: "1px dashed #cbd5e1",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "#F8FAFC",
                        display: "grid",
                        placeItems: "center",
                        mx: "auto",
                        mb: 2,
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      <SearchOutlined sx={{ fontSize: 32, color: "#94a3b8" }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        color: "#1E293B",
                        mb: 1,
                      }}
                    >
                      No resources found
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        color: "#64748b",
                        maxWidth: 420,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      We couldn't find any resources matching your search or
                      filter. Try resetting the search or exploring other tabs.
                    </Typography>
                    {(searchQuery || activeTab !== "all") && (
                      <BeamButton
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setSearchQuery("");
                          setActiveTab("all");
                        }}
                        sx={{
                          textTransform: "none",
                          borderRadius: "10px",
                          fontFamily: inter.style.fontFamily,
                          fontWeight: 600,
                          borderColor: "#CBD5E1",
                          color: "#1B365D",
                        }}
                      >
                        Reset Filters
                      </BeamButton>
                    )}
                  </Box>
                </Grid>
              )}
            </Grid>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default ResourceAccess;
