"use client";
import React from "react";
import InstitutionDashboardLayout from "@/components/layouts/dashboard/institution/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const PlaybooksPage = () => {
  return (
    <InstitutionDashboardLayout>
      <ResourceAccess role="Institutional Playbook" />
    </InstitutionDashboardLayout>
  );
};

export default PlaybooksPage;
