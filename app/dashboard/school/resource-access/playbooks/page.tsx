"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const PlaybooksPage = () => {
  return (
    <SchoolDashboardLayout>
      <ResourceAccess role="Institutional Playbook" />
    </SchoolDashboardLayout>
  );
};

export default PlaybooksPage;
