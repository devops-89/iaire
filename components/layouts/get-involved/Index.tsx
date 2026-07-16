"use client";

import { Box } from "@mui/material";
import GetInvolvedHero from "./GetInvolvedHero";
import AboutHubsSection from "@/components/layouts/about/AboutHubsSection";
import AboutContactSection from "@/components/layouts/about/AboutContactSection";

const GetInvolvedLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <GetInvolvedHero />
      <AboutHubsSection />
      <AboutContactSection />
    </Box>
  );
};

export default GetInvolvedLayout;
