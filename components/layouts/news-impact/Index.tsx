"use client";

import React from "react";
import { Box } from "@mui/material";
import NewsImpactHero from "./NewsImpactHero";
import Outcomes from "./Outcomes";
import PatentsPublications from "./PatentsPublications";
import AwardsRecognition from "./AwardsRecognition";
import MemberNews from "./MemberNews";

const NewsImpactLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <NewsImpactHero />
      <Outcomes />
      <PatentsPublications />
      <AwardsRecognition />
      <MemberNews />
    </Box>
  );
};
export default NewsImpactLayout;
