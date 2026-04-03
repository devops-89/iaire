"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const TemplatesPage = () => {
  return (
    <SchoolDashboardLayout>
      <ResourceAccess role="Institutional Template" />
    </SchoolDashboardLayout>
  );
};

export default TemplatesPage;
