"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import StudentSidebar from "./dashboard/student/components/Sidebar";
import StudentHeader from "./dashboard/student/components/Header";
import SchoolSidebar from "./dashboard/school/components/Sidebar";
import SchoolHeader from "./dashboard/school/components/Header";

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

  const shouldHideMainLayout =
    HIDE_LAYOUT_ROUTES.includes(pathname) || isStudentDashboard || isSchoolDashboard;

  return (
    <>
      {!shouldHideMainLayout && <Navbar />}
      {isStudentDashboard && <StudentSidebar />}
      {isStudentDashboard && <StudentHeader />}
      {isSchoolDashboard && <SchoolSidebar />}
      {isSchoolDashboard && <SchoolHeader />}
      {children}
      {!shouldHideMainLayout && <Footer />}
    </>
  );
}
