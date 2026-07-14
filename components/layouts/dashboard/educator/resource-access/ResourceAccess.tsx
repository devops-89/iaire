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
  Button,
  Card,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Atom } from "react-loading-indicators";

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
    if (t.includes("playbook")) return COLORS.PRIMARY_NAVY || "#F85D00";
    if (t.includes("module")) return "#EE8E26";
    if (t.includes("template")) return "#3F51B5";
    return "#78909C";
  };

  const getGradientHeader = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("playbook"))
      return `linear-gradient(90deg, #F85D00 0%, #ff7b2b 100%)`;
    if (t.includes("module"))
      return `linear-gradient(90deg, #EE8E26 0%, #ffb74d 100%)`;
    if (t.includes("template"))
      return `linear-gradient(90deg, #3F51B5 0%, #7986cb 100%)`;
    return `linear-gradient(90deg, #78909C 0%, #b0bec5 100%)`;
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
          {/* Welcome Card banner */}
          <Card
            sx={{
              p: { xs: 4, md: 5 },
              background: `linear-gradient(135deg, #F85D00 0%, #8c3100 100%)`,
              color: "#fff",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0px 15px 35px rgba(248, 93, 0, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Background design accents */}
            <Box
              sx={{
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.02)",
                position: "absolute",
                top: -100,
                right: -100,
                filter: "blur(40px)",
              }}
            />
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(238, 142, 38, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                position: "absolute",
                bottom: -80,
                left: "15%",
                filter: "blur(30px)",
              }}
            />

            <Stack
              spacing={2}
              sx={{ position: "relative", zIndex: 2, maxWidth: 700 }}
            >
              <Chip
                label="Premium Learning Library"
                size="small"
                sx={{
                  alignSelf: "flex-start",
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  bgcolor: "rgba(238, 142, 38, 0.15)",
                  color: "#EE8E26",
                  border: "1px solid rgba(238, 142, 38, 0.3)",
                  px: 1,
                  py: 1.5,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  fontSize: { xs: "28px", md: "36px" },
                }}
              >
                IRE Resource Library
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: inter.style.fontFamily,
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  fontSize: { xs: "14px", md: "15px" },
                }}
              >
                Unlock exclusive classroom playbooks, teacher guides, student
                modules, templates, and regulatory reference documents designed
                to drive innovation and research excellence in your school.
              </Typography>
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
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              {/* Segmented Pill Tabs */}
              <Tabs
                value={activeTab}
                onChange={(e, val) => setActiveTab(val)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  minHeight: "auto",
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                  "& .MuiTabs-flexContainer": {
                    gap: "8px",
                  },
                }}
              >
                {RESOURCE_TABS.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                    sx={{
                      borderRadius: "10px",
                      textTransform: "none",
                      minHeight: "auto",
                      py: 1.2,
                      px: 2.5,
                      fontSize: "14px",
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 600,
                      color: "#64748b",
                      bgcolor: "rgba(15, 23, 42, 0.03)",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid transparent",
                      "&.Mui-selected": {
                        bgcolor: "#fff",
                        color: "#F85D00",
                        borderColor: "#e2e8f0",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
                        fontWeight: 700,
                      },
                      "&:hover:not(.Mui-selected)": {
                        bgcolor: "rgba(15, 23, 42, 0.06)",
                        color: "#334155",
                      },
                    }}
                  />
                ))}
              </Tabs>

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
                    borderRadius: "12px",
                    bgcolor: "#fff",
                    fontSize: "14px",
                    fontFamily: inter.style.fontFamily,
                    width: { xs: "100%", md: 280 },
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    "& fieldset": {
                      borderColor: "#e2e8f0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#cbd5e1 !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#F85D00 !important",
                      borderWidth: "1.5px",
                    },
                  },
                }}
              />
            </Stack>

            {/* Resources List Grid */}
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
                <Atom color="#F85D00" size="medium" />
              </Box>
            ) : (
              <Grid container spacing={3.5}>
                {filteredResources.map((item) => {
                  const themeColor = getThemeColor(item.type);
                  const gradientHeader = getGradientHeader(item.type);

                  return (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: "20px",
                          boxShadow: "0px 8px 24px rgba(11, 23, 39, 0.02)",
                          border: "1px solid #f1f5f9",
                          background: "#ffffff",
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          overflow: "hidden",
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "5px",
                            background: gradientHeader,
                          },
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 20px 35px rgba(248, 93, 0, 0.08)",
                            borderColor: "rgba(248, 93, 0, 0.15)",
                          },
                        }}
                      >
                        <Stack
                          spacing={2}
                          sx={{ p: 3.5, pb: 2.5, flexGrow: 1 }}
                        >
                          {/* Top Icon and Label section */}
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={1.5}
                          >
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "12px",
                                background: `linear-gradient(135deg, ${themeColor}12 0%, ${themeColor}05 100%)`,
                                display: "grid",
                                placeItems: "center",
                                color: themeColor,
                                border: `1px solid ${themeColor}20`,
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
                                      fontSize: "12px !important",
                                      color: "#D97706 !important",
                                    }}
                                  />
                                }
                                label="Premium"
                                size="small"
                                sx={{
                                  fontFamily: montserrat.style.fontFamily,
                                  fontWeight: 700,
                                  fontSize: 10,
                                  bgcolor: "#FFFBEB",
                                  color: "#D97706",
                                  border: "1px solid #FDE68A",
                                  borderRadius: "6px",
                                  pl: 0.5,
                                }}
                              />
                            ) : (
                              <Chip
                                icon={
                                  <VerifiedUserOutlined
                                    sx={{
                                      fontSize: "12px !important",
                                      color: "#10B981 !important",
                                    }}
                                  />
                                }
                                label="Unlocked"
                                size="small"
                                sx={{
                                  fontFamily: montserrat.style.fontFamily,
                                  fontWeight: 700,
                                  fontSize: 10,
                                  bgcolor: "#ECFDF5",
                                  color: "#10B981",
                                  border: "1px solid #A7F3D0",
                                  borderRadius: "6px",
                                  pl: 0.5,
                                }}
                              />
                            )}
                          </Stack>

                          {/* Title & Type */}
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: montserrat.style.fontFamily,
                                fontSize: 16,
                                fontWeight: 750,
                                color: "#0f172a",
                                lineHeight: 1.4,
                                mb: 0.5,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontSize: 11,
                                fontWeight: 700,
                                color: themeColor,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                              }}
                            >
                              {item.type || "Resource"}
                            </Typography>
                          </Box>

                          {/* Description */}
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: 14,
                              color: "#64748b",
                              lineHeight: 1.6,
                              flexGrow: 1,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {item.description ||
                              "Access custom materials, toolkits, and curated playbooks designed to structure your classroom workflow."}
                          </Typography>

                          {/* Category Tags */}
                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            useFlexGap
                            sx={{ mt: 1 }}
                          >
                            {item.category && (
                              <Chip
                                label={item.category}
                                size="small"
                                sx={{
                                  fontFamily: inter.style.fontFamily,
                                  fontWeight: 600,
                                  fontSize: 11,
                                  bgcolor: "#f1f5f9",
                                  color: "#475569",
                                  borderRadius: "8px",
                                }}
                              />
                            )}
                            <Chip
                              label="Resource File"
                              size="small"
                              sx={{
                                fontFamily: inter.style.fontFamily,
                                fontWeight: 600,
                                fontSize: 11,
                                bgcolor: "rgba(15, 23, 42, 0.04)",
                                color: "#64748b",
                                borderRadius: "8px",
                              }}
                            />
                          </Stack>
                        </Stack>

                        {/* Card Footer Button Container */}
                        <Box sx={{ p: 3, pt: 0 }}>
                          {isMember ? (
                            <Button
                              variant="contained"
                              fullWidth
                              endIcon={<OpenInNewOutlined />}
                              onClick={() => handleAccess(item.fileUrl)}
                              sx={{
                                background:
                                  "linear-gradient(135deg, #F85D00 0%, #8C3100 100%)",
                                color: COLORS.WHITE,
                                textTransform: "none",
                                borderRadius: "12px",
                                padding: "11px 0",
                                fontFamily: montserrat.style.fontFamily,
                                fontWeight: 700,
                                fontSize: 14,
                                transition: "all 0.25s",
                                "&:hover": {
                                  background:
                                    "linear-gradient(135deg, #8C3100 0%, #4f1b00 100%)",
                                  boxShadow:
                                    "0px 8px 20px rgba(248, 93, 0, 0.25)",
                                  transform: "scale(1.02)",
                                },
                              }}
                            >
                              Access Resource
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              fullWidth
                              startIcon={<Lock />}
                              onClick={() => handleAccess()}
                              sx={{
                                background:
                                  "linear-gradient(135deg, #EE8E26 0%, #D97706 100%)",
                                color: COLORS.WHITE,
                                textTransform: "none",
                                borderRadius: "12px",
                                padding: "11px 0",
                                fontFamily: montserrat.style.fontFamily,
                                fontWeight: 700,
                                fontSize: 14,
                                transition: "all 0.25s",
                                "&:hover": {
                                  background:
                                    "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                                  boxShadow:
                                    "0px 8px 20px rgba(217, 119, 6, 0.3)",
                                  transform: "scale(1.02)",
                                },
                              }}
                            >
                              Unlock to Access
                            </Button>
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
                        py: 12,
                        bgcolor: "#fff",
                        borderRadius: "20px",
                        border: "1px dashed #cbd5e1",
                      }}
                    >
                      <SearchOutlined
                        sx={{ fontSize: 48, color: "#94a3b8", mb: 2 }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          color: "#334155",
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
                          maxWidth: 380,
                          mx: "auto",
                        }}
                      >
                        We couldn't find any resources matching your search or
                        filters. Try adjusting your search query.
                      </Typography>
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
