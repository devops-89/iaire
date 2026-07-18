import { Box } from "@mui/material";
import IreJourney from "./IreJourney";
import ProgramsSection from "./ProgramSection";
import EducatorCertification from "./EducatorCertification";
import ResearchMentorCertification from "./ResearchMentorCertification";
import SchoolInnovationHubs from "./SchoolInnovationHubs";
import YoungInnovators from "./YoungInnovators";
import SubFooterCTA from "../home/SubFooterCTA";

const ProgramLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <EducatorCertification />
      <ResearchMentorCertification />
      <SchoolInnovationHubs />
      <YoungInnovators />
      <SubFooterCTA />
      {/* <ProgramsSection /> */}
      {/* <IreJourney /> */}
    </Box>
  );
};

export default ProgramLayout;
