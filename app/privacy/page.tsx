import PrivacyPolicyLayout from "@/components/layouts/legal/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IAIRE",
  description:
    "Learn how IAIRE collects, uses, and protects your personal information. Effective July 27, 2026.",
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyLayout />;
};

export default PrivacyPolicyPage;