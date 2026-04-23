"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import ResearchManagement from "@/components/layouts/dashboard/institution/research-management/Research-Management";

const ResearchSubmissionPage = () => {
  return (
    <InstitutionDashboardLayout>
      <ResearchManagement />
    </InstitutionDashboardLayout>
  );
};

export default ResearchSubmissionPage;
