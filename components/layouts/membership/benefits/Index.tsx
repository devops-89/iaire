"use client";

import React from "react";
import { Box } from "@mui/material";
import BenefitsHero from "./BenefitsHero";
import BenefitsForSchools from "./BenefitsForSchools";
import BenefitsForEducators from "./BenefitsForEducators";
import BenefitsForStudents from "./BenefitsForStudents";
import BenefitsForPartners from "./BenefitsForPartners";
import MemberAdvantage from "./MemberAdvantage";

const BenefitsLayout = () => {
  return (
    <Box>
      <BenefitsHero />
      <BenefitsForSchools />
      <BenefitsForEducators />
      <BenefitsForStudents />
      <BenefitsForPartners />
      <MemberAdvantage />
    </Box>
  );
};

export default BenefitsLayout;
