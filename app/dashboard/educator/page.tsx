"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import EducatorWelcomeBanner from "@/components/widgets/Dashboard/EducatorWelcomeBanner";
import ApprovalPendingBanner from "@/components/widgets/Dashboard/ApprovalPendingBanner";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import StatsBox from "@/components/layouts/dashboard/institution/components/dashboard/StatsBox";
import {
  Lightbulb,
  RocketLaunch,
  Hail,
  WorkspacePremium,
  FileCopyOutlined,
  MenuBook,
  People,
  BusinessCenter,
  MonetizationOn,
  VerifiedUser,
  PendingActions,
} from "@mui/icons-material";
import { useSignup } from "@/store/useSignup";
import { useEducatorDashboardStats } from "@/hooks/mentor/useEducatorDashboardStats";

const ICON_MAP: Record<string, any> = {
  "Trained on Innovation": Lightbulb,
  "Students who Launched Startups": RocketLaunch,
  "Working as Assistant Mentors": Hail,
  "Trained on Research": Lightbulb,
  "Total Members": People,
  "Active Members": VerifiedUser,
  "Not a Member": PendingActions,
  "Patents Pending": Lightbulb,
  "Patents Granted": WorkspacePremium,
  "Research Submitted": FileCopyOutlined,
  "Research Published": MenuBook,
  "Startups Launched": BusinessCenter,
  "Startups Funded": MonetizationOn,
};

const SECTIONS_CONFIG = [
  { key: "studentsAndMentorship", title: "Students & Mentorship" },
  // { key: "membershipStatus", title: "Membership Status (Students)" },
  { key: "patents", title: "Patents" },
  { key: "researchPapers", title: "Research Papers" },
  // { key: "startups", title: "Startups" },
];

const EducatorDashboard = () => {
  const { educatorData } = useSignup();
  const { statsData, loading } = useEducatorDashboardStats();

  const EDUCATOR_STAT_SECTIONS = SECTIONS_CONFIG.map((sec) => {
    const items = statsData?.[sec.key] || [];
    return {
      title: sec.title,
      data: items.map((item: { title: string; count: number | string }) => ({
        title: item.title,
        count:
          item.count !== undefined && item.count !== null
            ? String(item.count)
            : "0",
        icon: ICON_MAP[item.title] || Lightbulb,
      })),
    };
  });

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: "1600px", mx: "auto" }}>
        <ApprovalPendingBanner />
        <EducatorWelcomeBanner />

        <Box sx={{ mt: 6 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            EDUCATOR_STAT_SECTIONS.map((section, i) => (
              <StatsBox title={section.title} data={section.data} key={i} />
            ))
          )}
        </Box>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default EducatorDashboard;
