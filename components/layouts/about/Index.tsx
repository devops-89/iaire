import AboutHero from "@/components/layouts/about/AboutHero";
import GovernanceSection from "@/components/layouts/about/GovernanceSection";
import LeadershipSection from "@/components/layouts/about/LeadershipSection";
import WhatWeDo from "@/components/layouts/about/WhatWeDo";
import WhoWeAre from "@/components/layouts/about/WhoWeAre";
import InitiativeSection from "@/components/layouts/about/InitiativeSection";
import AboutPrograms from "@/components/layouts/about/AboutPrograms";
import ForSchoolsSection from "@/components/layouts/about/ForSchoolsSection";
import EducatorCertSection from "@/components/layouts/about/EducatorCertSection";
import StudentProgSection from "@/components/layouts/about/StudentProgSection";
import AboutHubsSection from "@/components/layouts/about/AboutHubsSection";
import AboutCompetitionSection from "@/components/layouts/about/AboutCompetitionSection";
import AboutPlatformSection from "@/components/layouts/about/AboutPlatformSection";
import AboutResearchSection from "@/components/layouts/about/AboutResearchSection";
import AboutResourcesSection from "@/components/layouts/about/AboutResourcesSection";
import AboutNewsSection from "@/components/layouts/about/AboutNewsSection";
import AboutContactSection from "@/components/layouts/about/AboutContactSection";
import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const AboutLayout = () => {
  return (
    <Box sx={{ bgcolor: COLORS.WHITE }}>
      <AboutHero />
      <WhoWeAre />
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
