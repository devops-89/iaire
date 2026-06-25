"use client";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import ResearchManagementLayout from "@/components/layouts/dashboard/student/research-management/Research-Management-Layout";
import React from "react";

const ResearchManagement = () => {
  return (
    <StudentDashboardLayout>
      <ResearchManagementLayout />
    </StudentDashboardLayout>
  );
};

export default ResearchManagement;
