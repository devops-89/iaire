"use client";
import React from "react";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const InstitutionResourceAccess = () => {
  return (
    <InstitutionDashboardLayout>
      <ResourceAccess role="Institutional" />
    </InstitutionDashboardLayout>
  );
};

export default InstitutionResourceAccess;
