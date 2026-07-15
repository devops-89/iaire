"use client";

import React from "react";
import { Box } from "@mui/material";
import BecomeMemberHero from "./BecomeMemberHero";
import WhoCanBecomeMember from "./WhoCanBecomeMember";
import MembershipCategories from "./MembershipCategories";
import EcosystemSection from "../../home/EcosystemSection";
import EducatorSection from "../../home/EducatorSection";
import StudentSection from "../../home/StudentSection";

const BecomeMemberLayout = () => {
  return (
    <Box>
      <BecomeMemberHero />
      <WhoCanBecomeMember />
      <EcosystemSection />
      <EducatorSection />
      <StudentSection />
      <MembershipCategories />
    </Box>
  );
};

export default BecomeMemberLayout;
