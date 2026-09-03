"use client";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import TrainingDetails from "@/components/layouts/dashboard/institution/training-management/TrainingDetails";

const TrainingDetailsPage = () => {
  return (
    <InstitutionDashboardLayout>
      <TrainingDetails />
    </InstitutionDashboardLayout>
  );
};

export default TrainingDetailsPage;
