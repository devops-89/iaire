"use client";

import AboutHero from "@/components/layouts/about/AboutHero";
import GovernanceSection from "@/components/layouts/about/GovernanceSection";
import LeadershipSection from "@/components/layouts/about/LeadershipSection";
import MissionVision from "@/components/layouts/about/MissionVision";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const AboutLayout = () => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE }}>
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
