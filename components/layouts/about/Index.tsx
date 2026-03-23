"use client";

import { Box } from "@mui/material";
import React from "react";
import AboutHero from "@/components/layouts/about/AboutHero";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import MissionVision from "@/components/layouts/about/MissionVision";
import LeadershipSection from "@/components/layouts/about/LeadershipSection";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import GovernanceSection from "@/components/layouts/about/GovernanceSection";
import Footer from "@/components/widgets/Footer";

const AboutLayout = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <LeadershipSection />
      <WhatWeDo />
      <GovernanceSection />
    </Box>
  );
};

export default AboutLayout;
