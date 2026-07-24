import FaqLayout from "@/components/layouts/faqs/FaqLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions - IAIRE",
  description:
    "Find answers to frequently asked questions about IAIRE institutional membership, educator certifications, student pathways, school innovation hubs, and research support.",
};

const FaqPage = () => {
  return <FaqLayout />;
};

export default FaqPage;
