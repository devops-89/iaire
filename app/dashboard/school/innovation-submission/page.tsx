"use client";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import InnovationList from "@/components/layouts/dashboard/school/innovation-management/Innovation-List";
import { Box } from "@mui/material";

const InnovationSubmissionPage = () => {
  return (
    <SchoolDashboardLayout>
      <InnovationList />
    </SchoolDashboardLayout>
  );
};

export default InnovationSubmissionPage;
