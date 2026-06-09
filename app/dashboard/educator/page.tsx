"use client";
import EducatorDashboardLayout from "@/components/layouts/dashboard/educator/Index";
import EducatorWelcomeBanner from "@/components/widgets/Dashboard/EducatorWelcomeBanner";
import { Backdrop, Box, Typography } from "@mui/material";
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
  GroupAdd,
  VerifiedUser,
  PendingActions,
} from "@mui/icons-material";
import { useSignup } from "@/store/useSignup";
import { COLORS } from "@/utils/enum";

const EducatorDashboard = () => {
  const EDUCATOR_STAT_SECTIONS = [
    {
      title: "Students & Mentorship",
      data: [
        {
          title: "Trained on Innovation & Research",
          count: "150",
          icon: Lightbulb,
        },
        {
          title: "Students who Launched Startups",
          count: "25",
          icon: RocketLaunch,
        },
        {
          title: "Working as Assistant Mentors",
          count: "50",
          icon: Hail,
        },
      ],
    },
    {
      title: "Membership Status (Students)",
      data: [
        {
          title: "Total Members",
          count: "150",
          icon: People,
        },
        {
          title: "Active Members",
          count: "120",
          icon: VerifiedUser,
        },
        {
          title: "Pending Members",
          count: "20",
          icon: PendingActions,
        },
      ],
    },
    {
      title: "Patents",
      data: [
        {
          title: "Patents Pending",
          count: "20",
          icon: Lightbulb,
        },
        {
          title: "Patents Granted",
          count: "40",
          icon: WorkspacePremium,
        },
      ],
    },
    {
      title: "Research Papers",
      data: [
        {
          title: "Research Submitted",
          count: "20",
          icon: FileCopyOutlined,
        },
        {
          title: "Research Published",
          count: "15",
          icon: MenuBook,
        },
      ],
    },
    {
      title: "Startups",
      data: [
        {
          title: "Startups Launched",
          count: "10",
          icon: BusinessCenter,
        },
        {
          title: "Startups Funded",
          count: "5",
          icon: MonetizationOn,
        },
      ],
    },
  ];

  const { educatorData } = useSignup();

  return (
    <EducatorDashboardLayout>
      <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: "1600px", mx: "auto" }}>
        <EducatorWelcomeBanner />

        <Box sx={{ mt: 6 }}>
          {EDUCATOR_STAT_SECTIONS.map((section, i) => (
            <StatsBox title={section.title} data={section.data} key={i} />
          ))}
        </Box>
      </Box>
    </EducatorDashboardLayout>
  );
};

export default EducatorDashboard;
