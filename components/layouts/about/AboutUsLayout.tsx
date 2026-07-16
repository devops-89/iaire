"use client";

import { Box } from "@mui/material";
import React from "react";
import AboutHero from "@/components/layouts/about/AboutHero";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import MissionVision from "@/components/layouts/about/MissionVision";
import LeadershipSection from "@/components/layouts/about/LeadershipSection";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import GovernanceSection from "@/components/layouts/about/GovernanceSection";

const AboutUsLayout = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      <WhoWeAre />
      <MissionVision />
      <AboutHero />
      <LeadershipSection />
      <WhatWeDo />
      <GovernanceSection />
    </Box>
  );
};

export default AboutUsLayout;
