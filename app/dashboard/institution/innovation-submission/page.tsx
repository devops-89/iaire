"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import InnovationList from "@/components/layouts/dashboard/institution/innovation-management/Innovation-List";
import { Box } from "@mui/material";

const InnovationSubmissionPage = () => {
  return (
    <InstitutionDashboardLayout>
      <InnovationList />
    </InstitutionDashboardLayout>
  );
};

export default InnovationSubmissionPage;
