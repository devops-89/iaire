"use client";
import React from "react";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const ModulesPage = () => {
  return (
    <SchoolDashboardLayout>
      <ResourceAccess role="Institutional Module" />
    </SchoolDashboardLayout>
  );
};

export default ModulesPage;
