import AboutCompetitionSection from "@/components/layouts/about/AboutCompetitionSection";
import AboutContactSection from "@/components/layouts/about/AboutContactSection";
import AboutHero from "@/components/layouts/about/AboutHero";
import AboutHubsSection from "@/components/layouts/about/AboutHubsSection";
import AboutNewsSection from "@/components/layouts/about/AboutNewsSection";
import AboutPlatformSection from "@/components/layouts/about/AboutPlatformSection";
import AboutPrograms from "@/components/layouts/about/AboutPrograms";
import AboutResearchSection from "@/components/layouts/about/AboutResearchSection";
import AboutResourcesSection from "@/components/layouts/about/AboutResourcesSection";
import EducatorCertSection from "@/components/layouts/about/EducatorCertSection";
import ForSchoolsSection from "@/components/layouts/about/ForSchoolsSection";
import InitiativeSection from "@/components/layouts/about/InitiativeSection";
import StudentProgSection from "@/components/layouts/about/StudentProgSection";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";
import LegalStanding from "./LegalStanding";
import MissionVision from "./MissionVision";

const AboutLayout = () => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE }}>
      <AboutHero />
      <MissionVision />
      <WhoWeAre />
      <LegalStanding />
      <WhatWeDo />
      <InitiativeSection />
      <AboutPrograms />
      <ForSchoolsSection />
      <EducatorCertSection />
      <StudentProgSection />
      <AboutHubsSection />
      <AboutCompetitionSection />
      <AboutPlatformSection />
      <AboutResearchSection />
      <AboutResourcesSection />
      <AboutNewsSection />
      <AboutContactSection />
    </Box>
  );
};

export default AboutLayout;
