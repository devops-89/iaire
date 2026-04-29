"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import StudentSidebar from "./dashboard/student/components/Sidebar";
import StudentHeader from "./dashboard/student/components/Header";
import InstitutionSidebar from "./dashboard/institution/components/Sidebar";
import InstitutionHeader from "./dashboard/institution/components/Header";
import EducatorSidebar from "./dashboard/educator/components/Sidebar";
import EducatorHeader from "./dashboard/educator/components/Header";

const HIDE_LAYOUT_ROUTES = [
  "/login",
  "/signup",
  "/signup/role-selection",
  "/signup/payment",
  "/dashboard/school",
  "/signup/review",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isStudentDashboard = pathname.startsWith("/dashboard/student");
  const isInstitutionDashboard = pathname.startsWith("/dashboard/institution");
  const isEducatorDashboard = pathname.startsWith("/dashboard/educator");

  const shouldHideMainLayout =
    HIDE_LAYOUT_ROUTES.includes(pathname) ||
    isStudentDashboard ||
    isInstitutionDashboard ||
    isEducatorDashboard;

  return (
    <>
      {!shouldHideMainLayout && <Navbar />}
      {isStudentDashboard && <StudentSidebar />}
      {isStudentDashboard && <StudentHeader />}
      {isInstitutionDashboard && <InstitutionSidebar />}
      {isInstitutionDashboard && <InstitutionHeader />}
      {isEducatorDashboard && <EducatorSidebar />}
      {isEducatorDashboard && <EducatorHeader />}
      {children}
      {!shouldHideMainLayout && <Footer />}
    </>
  );
}
