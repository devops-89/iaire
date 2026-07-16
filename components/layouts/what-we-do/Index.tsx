"use client";

import { Box } from "@mui/material";
import WhatWeDoHero from "./WhatWeDoHero";
import StandardsCertification from "./StandardsCertification";
import InnovationResearchEducation from "./InnovationResearchEducation";
import EducatorDevelopment from "./EducatorDevelopment";
import StudentPathways from "./StudentPathways";
import IpResearchSupport from "./IpResearchSupport";
import AwardsFellowships from "./AwardsFellowships";
import EventsMeetings from "./EventsMeetings";

const WhatWeDoLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <WhatWeDoHero />
      <StandardsCertification />
      <InnovationResearchEducation />
      <EducatorDevelopment />
      <StudentPathways />
      <IpResearchSupport />
      <AwardsFellowships />
      <EventsMeetings />
    </Box>
  );
};

export default WhatWeDoLayout;
