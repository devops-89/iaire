import AboutHero from "@/components/layouts/about/AboutHero";
import GovernanceSection from "@/components/layouts/about/GovernanceSection";
import LeadershipSection from "@/components/layouts/about/LeadershipSection";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import InitiativeSection from "@/components/layouts/about/InitiativeSection";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const AboutLayout = () => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE }}>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <InitiativeSection />
      <LeadershipSection />
      <GovernanceSection />
    </Box>
  );
};

export default AboutLayout;
