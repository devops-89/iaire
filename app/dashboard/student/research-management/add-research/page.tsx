"use client";
import StudentDashboardLayout from "@/components/layouts/dashboard/student/Index";
import AddResearch from "@/components/layouts/dashboard/student/research-management/Add-Research";
import React from "react";

const AddResearchPage = () => {
  return (
    <StudentDashboardLayout>
      <AddResearch />
    </StudentDashboardLayout>
  );
};

export default AddResearchPage;
