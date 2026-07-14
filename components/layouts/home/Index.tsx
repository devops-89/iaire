import { Box } from "@mui/material";
import CommunitySection from "./CommunitySection";
import EventsSection from "./EventsSection";
import FocusAreas from "./FocusAreas";
import HeroSection2 from "./HeroSection2";
import NewsSection from "./NewsSection";
import ProgramsSection from "./ProgramsSection";
import TestimonialSection from "./TestimonialSection";
import VisionSection from "./VisionSection";
import EcosystemSection from "./EcosystemSection";
import EducatorSection from "./EducatorSection";
import StudentSection from "./StudentSection";
import HubSection from "./HubSection";
import CompetitionSection from "./CompetitionSection";
import PlatformSection from "./PlatformSection";
import ResearchSection from "./ResearchSection";
import IndiaSection from "./IndiaSection";
import SubFooterCTA from "./SubFooterCTA";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection2 />
      <VisionSection />
      <EcosystemSection />
      <EducatorSection />
      <StudentSection />
      <HubSection />
      <CompetitionSection />
      <PlatformSection />
      <ResearchSection />
      <IndiaSection />
      {/* <FocusAreas />
      <CommunitySection />
      <ProgramsSection />
      <EventsSection />
      <NewsSection />
      <TestimonialSection /> */}
      <SubFooterCTA />
    </Box>
  );
};

export default HomeLayout;
