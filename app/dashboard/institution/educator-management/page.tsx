"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import EducatorList from "@/components/layouts/dashboard/institution/educator-management/Educator_list";

const EducatorManagementPage = () => {
  return (
    <InstitutionDashboardLayout>
      <EducatorList />
    </InstitutionDashboardLayout>
  );
};

export default EducatorManagementPage;
