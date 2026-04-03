"use client";
import SchoolDashboardLayout from "@/components/layouts/dashboard/school/Index";
import AddTeacher from "@/components/layouts/dashboard/school/teacher-management/Add-Teacher";

const AddTeacherPage = () => {
  return (
    <SchoolDashboardLayout>
      <AddTeacher />
    </SchoolDashboardLayout>
  );
};

export default AddTeacherPage;
