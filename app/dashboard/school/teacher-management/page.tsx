"use client";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import TeacherList from "@/components/layouts/dashboard/school/teacher-management/Teacher_list";

const TeacherManagementPage = () => {
  return (
    <SchoolDashboardLayout>
      <TeacherList />
    </SchoolDashboardLayout>
  );
};

export default TeacherManagementPage;
