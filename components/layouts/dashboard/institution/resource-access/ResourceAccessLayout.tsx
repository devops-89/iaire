"use client";

import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { USER_ROLES } from "@/utils/enum";
import { inter } from "@/utils/fonts";
import {
  Box,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AutoAwesomeOutlined, Close, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { useGetResources } from "@/hooks/common/useResources";
import { useSignup } from "@/store/useSignup";
import { useModal } from "@/store/useModal";
import Plans from "@/components/modals/common/Plans";
import { Atom } from "react-loading-indicators";
import BeamButton from "@/components/widgets/BeamButton";

const RESOURCE_TABS = [
  { label: "All Resources", value: "all" },
  { label: "Playbooks", value: "playbook" },
  { label: "Modules", value: "module" },
  { label: "Templates", value: "template" },
];

const ResourceAccessLayout = () => {
  const { resources, loading } = useGetResources();
  const { institutionData } = useSignup();
  const { showModal } = useModal();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const isMember =
    ((institutionData?.payments?.length ?? 0) > 0 &&
      institutionData?.payments?.some(
        (v: any) => v.membership?.status?.toUpperCase() === "ACTIVE",
      )) ??
    false;

  const displayResources = resources;

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

  const filteredResources = displayResources.filter((res) => {
    const matchesTab =
      activeTab === "all" || res.type?.toLowerCase().includes(activeTab);
    const matchesSearch =
      !searchQuery ||
      res.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.category &&
        res.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleAccess = (url?: string) => {
    if (!isMember) {
      showModal(<Plans role={USER_ROLES.SCHOOL} />);
      return;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <InstitutionDashboardLayout>
      <Box sx={{ py: 1 }}>
        {/* Breadcrumb section */}
        <Stack sx={{ mb: 3 }}>
          <Breadcrumb
            title="Resource Access"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Resource Access",
                href: "/dashboard/institution/resource-access",
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
            {/* Ambient glow accents */}
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
                  Premium Institutional Toolkit
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
                Institutional Resource Library
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
                Equip your coordinators and educators with official IAIRE
                playbooks, research frameworks, templates, and training modules
                designed to foster institutional innovation.
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
                  { label: "Institutional Frameworks", icon: "🏛️" },
                  { label: "School Playbooks", icon: "📄" },
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
                {filteredResources.map((item, idx) => (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.id || idx}>
                    <ResourceCard
                      {...item}
                      isMember={isMember}
                      handleAccess={handleAccess}
                    />
                  </Grid>
                ))}
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
                        <SearchOutlined
                          sx={{ fontSize: 32, color: "#94a3b8" }}
                        />
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
                        filters. Try resetting the search or exploring other tabs.
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
    </InstitutionDashboardLayout>
  );
};

export default ResourceAccessLayout;
