"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/widgets/Navbar";
import Footer from "@/components/widgets/Footer";
import StudentSidebar from "./dashboard/student/components/Sidebar";
import StudentHeader from "./dashboard/student/components/Header";
import InstitutionSidebar from "./dashboard/institution/components/Sidebar";
import InstitutionHeader from "./dashboard/institution/components/Header";
import EducatorSidebar from "./dashboard/educator/components/Sidebar";
import EducatorHeader from "./dashboard/educator/components/Header";
import Header from "../widgets/Header";
import Header2 from "../widgets/Header2";
import AOS from "aos";
import "aos/dist/aos.css";

const HIDE_LAYOUT_ROUTES = [
  "/login",
  "/signup",
  "/signup/role-selection",
  "/signup/payment",
  "/dashboard/school",
  "/signup/review",
  "/payment-success",
  "/signup/update-profile",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });

    const handleScrollToHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash;
        // Decode in case of special characters
        const decodedHash = decodeURIComponent(hash);
        const targetElement = document.querySelector(decodedHash);
        if (targetElement) {
          // Brief timeout to let page render and layout settle
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 200);
        }
      }
    };

    // Run on initial page load / route change
    handleScrollToHash();
    // Refresh AOS on route change so new page elements are picked up
    AOS.refresh();

    // Listen for hash changes
    window.addEventListener("hashchange", handleScrollToHash);
    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, [pathname]);

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
      {!shouldHideMainLayout && <Header2 />}
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
