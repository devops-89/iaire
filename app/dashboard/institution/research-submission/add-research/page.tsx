"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import AddResearch from "@/components/layouts/dashboard/institution/research-management/Add-Research";

const AddResearchPage = () => {
  return (
    <InstitutionDashboardLayout>
      <AddResearch />
    </InstitutionDashboardLayout>
  );
};

export default AddResearchPage;
