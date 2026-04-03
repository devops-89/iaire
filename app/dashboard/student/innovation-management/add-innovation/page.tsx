"use client";
import StudentDashboardLayout from '@/components/layouts/dashboard/student/Index';
import AddInnovation from '@/components/layouts/dashboard/student/innovation-management/Add-Innovation';
import React from 'react'

const AddInnovationPage = () => {
  return (
    <StudentDashboardLayout>
      <AddInnovation />
    </StudentDashboardLayout>
  )
}

export default AddInnovationPage
