"use client";

import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS, USER_ROLES } from "@/utils/enum";
import { montserrat, roboto, inter } from "@/utils/fonts";
import {
  Box,
  Card,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Chip,
} from "@mui/material";
import { Close, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { useGetResources } from "@/hooks/common/useResources";
import { useSignup } from "@/store/useSignup";
import { useModal } from "@/store/useModal";
import Plans from "@/components/modals/common/Plans";
import { Atom } from "react-loading-indicators";

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
          <Card
            sx={{
              p: { xs: 4, md: 5 },
              background: `linear-gradient(135deg, #1B365D 0%, #8c3100 100%)`,
              color: "#fff",
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0px 15px 35px rgba(248, 93, 0, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
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
                label="Premium Academic Toolkit"
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
                Institutional Resource Library
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
                Equip your coordinators and educators with official IAIRE
                playbooks, research frameworks, templates, and training modules
                designed to foster institutional innovation.
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
                        color: "#1B365D",
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
    </InstitutionDashboardLayout>
  );
};

export default ResourceAccessLayout;
