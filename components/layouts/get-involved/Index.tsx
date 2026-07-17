"use client";

import { Box } from "@mui/material";
import GetInvolvedHero from "./GetInvolvedHero";
import ForSchools from "./ForSchools";
import ForEducators from "./ForEducators";
import ForStudents from "./ForStudents";
import ForBoardMembers from "./ForBoardMembers";
import ForChapters from "./ForChapters";
import AboutHubsSection from "@/components/layouts/about/AboutHubsSection";
import AboutContactSection from "@/components/layouts/about/AboutContactSection";

const GetInvolvedLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <GetInvolvedHero />
      <ForSchools />
      <ForEducators />
      <ForStudents />
      <ForBoardMembers />
      <ForChapters />
      {/* <AboutHubsSection />
      <AboutContactSection /> */}
    </Box>
  );
};

export default GetInvolvedLayout;
