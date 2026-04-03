"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import StudentSidebar from "./dashboard/student/components/Sidebar";
import StudentHeader from "./dashboard/student/components/Header";
import SchoolSidebar from "./dashboard/school/components/Sidebar";
import SchoolHeader from "./dashboard/school/components/Header";
import TeacherSidebar from "./dashboard/teacher/components/Sidebar";
import TeacherHeader from "./dashboard/teacher/components/Header";

const HIDE_LAYOUT_ROUTES = [
  "/login",
  "/signup",
  "/signup/role-selection",
  "/signup/payment",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStudentDashboard = pathname.startsWith("/dashboard/student");
  const isSchoolDashboard = pathname.startsWith("/dashboard/school");
  const isTeacherDashboard = pathname.startsWith("/dashboard/teacher");

  const shouldHideMainLayout =
    HIDE_LAYOUT_ROUTES.includes(pathname) ||
    isStudentDashboard ||
    isSchoolDashboard ||
    isTeacherDashboard;

  return (
    <>
      {!shouldHideMainLayout && <Navbar />}
      {isStudentDashboard && <StudentSidebar />}
      {isStudentDashboard && <StudentHeader />}
      {isSchoolDashboard && <SchoolSidebar />}
      {isSchoolDashboard && <SchoolHeader />}
      {isTeacherDashboard && <TeacherSidebar />}
      {isTeacherDashboard && <TeacherHeader />}
      {children}
      {!shouldHideMainLayout && <Footer />}
    </>
  );
}

