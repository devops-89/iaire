"use client";

import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { COLORS } from "@/utils/enum";
import {
  Box,
  Card,
  Grid,
  Stack,
  Tab,
  Tabs
} from "@mui/material";
import { useState } from "react";
import ResourceCard, { ResourceCardProps, ResourceType } from "./ResourceCard";

const RESOURCE_TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Playbooks",
    value: "playbook",
  },
  {
    label: "Modules",
    value: "module",
  },
  {
    label: "Templates",
    value: "template",
  },
];

const RESOURCE_DATA: ResourceCardProps[] = [
  {
    title: "Institution IRE Program Playbook",
    description:
      "Step-by-step operating guide for running innovation, research, and entrepreneurship activities across student teams.",
    type: "playbook",
    category: "IRE Program",
    level: "Institution",
    duration: "8 weeks",
  },
  {
    title: "Teacher Training Coordination Playbook",
    description:
      "Planning checklist for assigning educators, tracking batches, and preparing training nominations before batch start dates.",
    type: "playbook",
    category: "Training",
    level: "Admin",
    duration: "7 days",
  },
  {
    title: "Innovation Submission Module",
    description:
      "Learning module covering problem validation, novelty checks, documentation flow, and submission readiness.",
    type: "module",
    category: "Innovation",
    level: "Beginner",
    duration: "3 lessons",
  },
  {
    title: "Research Proposal Module",
    description:
      "Structured module for guiding students through objectives, methodology, ethics, and research outcome planning.",
    type: "module",
    category: "Research",
    level: "Intermediate",
    duration: "4 lessons",
  },
  {
    title: "Team Formation Template",
    description:
      "Reusable template for institution teams, member roles, mentor assignment, and project category alignment.",
    type: "template",
    category: "Team",
    level: "Institution",
    duration: "DOCX",
  },
  {
    title: "Innovation Disclosure Template",
    description:
      "Submission-ready structure for idea summary, prior art notes, inventor details, and supporting documents.",
    type: "template",
    category: "Innovation",
    level: "Student",
    duration: "PDF",
  },
];

const ResourceAccessLayout = () => {
  const [tab, setTab] = useState("all");

  const filteredResources =
    tab === "all"
      ? RESOURCE_DATA
      : RESOURCE_DATA.filter((resource) => resource.type === tab);

  return (
    <InstitutionDashboardLayout>
      <Box>
        <Card
          sx={{
            p: { xs: 2, md: 3 },
            boxShadow: "0px 0px 4px 4px #00000008",
            borderRadius: "8px",
          }}
        >
          <Stack spacing={3}>
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

            <Tabs
              value={tab}
              onChange={(event, value) => setTab(value)}
              sx={{
                borderBottom: "1px solid #E0E0E0",
                "& .MuiTabs-indicator": {
                  backgroundColor: COLORS.PRIMARY_NAVY,
                },
                "& .Mui-selected": {
                  color: COLORS.PRIMARY_NAVY,
                },
              }}
            >
              {RESOURCE_TABS.map((resourceTab) => (
                <Tab
                  key={resourceTab.value}
                  label={resourceTab.label}
                  value={resourceTab.value}
                />
              ))}
            </Tabs>

            <Grid container spacing={3} sx={{ pt: 1 }}>
              {filteredResources.map((resource) => (
                <Grid size={{ xs: 12, md: 6, xl: 4 }} sx={{mb:4}} key={resource.title}>
                  <ResourceCard
                    {...resource}
                    type={resource.type as ResourceType}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Card>
      </Box>
    </InstitutionDashboardLayout>
  );
};

export default ResourceAccessLayout;
