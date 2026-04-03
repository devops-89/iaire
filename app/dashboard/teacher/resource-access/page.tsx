"use client";
import React from "react";
import TeacherDashboardLayout from "@/components/layouts/dashboard/teacher/Index";
import ResourceAccess from "@/components/dashboard/shared/ResourceAccess";

const TeacherResourceAccess = () => {
  return (
    <TeacherDashboardLayout>
      <ResourceAccess role="Educator" />
    </TeacherDashboardLayout>
  );
};

export default TeacherResourceAccess;
