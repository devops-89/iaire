"use client";

import React from "react";
import { Box } from "@mui/material";
import IndiaChapterHero from "./IndiaChapterHero";
import WhyIndiaNeedsInnovation from "./WhyIndiaNeedsInnovation";
import WhatIndiaChapterDoes from "./WhatIndiaChapterDoes";
import TopYoungInnovators from "./TopYoungInnovators";
import JoinIndiaMovement from "./JoinIndiaMovement";

const IndiaChapterLayout = () => {
  return (
    <Box>
      <IndiaChapterHero />
      <WhyIndiaNeedsInnovation />
      <WhatIndiaChapterDoes />
      <TopYoungInnovators />
      <JoinIndiaMovement />
    </Box>
  );
};

export default IndiaChapterLayout;
