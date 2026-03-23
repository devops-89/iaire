import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection";
import FocusAreas from "./FocusAreas";
import CommunitySection from "./CommunitySection";
import ProgramsSection from "./ProgramsSection";
import EventsSection from "./EventsSection";
import NewsSection from "./NewsSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "../../widgets/Footer";

const HomeLayout = () => {
  return (
    <Box>
      <HeroSection />
      <FocusAreas />
      <CommunitySection />
      <ProgramsSection />
      <EventsSection />
      <NewsSection />
      <TestimonialSection />
    </Box>
  );
};

export default HomeLayout;
