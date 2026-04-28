"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import AddStartup from "@/components/layouts/dashboard/institution/startup-management/Add-Startup";

const AddStartupPage = () => {
  return (
    <InstitutionDashboardLayout>
      <AddStartup />
    </InstitutionDashboardLayout>
  );
};

export default AddStartupPage;
