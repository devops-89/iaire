import { Box } from "@mui/material";
import IreJourney from "./IreJourney";
import ProgramsSection from "./ProgramSection";
import EducatorCertification from "./EducatorCertification";
import ResearchMentorCertification from "./ResearchMentorCertification";
import SchoolInnovationHubs from "./SchoolInnovationHubs";
import YoungInnovators from "./YoungInnovators";

const ProgramLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <EducatorCertification />
      <ResearchMentorCertification />
      <SchoolInnovationHubs />
      <YoungInnovators />
      <ProgramsSection />
      <IreJourney />
    </Box>
  );
};

export default ProgramLayout;
