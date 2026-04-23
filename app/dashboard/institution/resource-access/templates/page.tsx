"use client";
import React from "react";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const TemplatesPage = () => {
  return (
    <InstitutionDashboardLayout>
      <ResourceAccess role="Institutional Template" />
    </InstitutionDashboardLayout>
  );
};

export default TemplatesPage;
