import { Box } from "@mui/material";
import HeroSection3 from "./HeroSection3";
import ProfessionalSocietySection from "./ProfessionalSocietySection";
import RecognitionSection from "./RecognitionSection";
import SchoolEcosystemSection from "./SchoolEcosystemSection";
import StandardsImpactSection from "./StandardsImpactSection";
import StorySection from "./StorySection";
import SubFooterCTA from "./SubFooterCTA";
import WhatWeDoSection from "./WhatWeDoSection";
import HeroSection4 from "./HeroSection4";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection3 />
      <ProfessionalSocietySection />
      <StorySection />
      <WhatWeDoSection />
      <StandardsImpactSection />
      <SchoolEcosystemSection />
      <RecognitionSection />
      <SubFooterCTA />
    </Box>
  );
};

export default HomeLayout;
