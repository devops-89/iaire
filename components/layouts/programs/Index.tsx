import { Box } from "@mui/material";
import IreJourney from "./IreJourney";
import ProgramHero from "./ProgramHero";
import ProgramsSection from "./ProgramSection";
import EducatorCertification from "./EducatorCertification";

const ProgramLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <ProgramHero />
      <EducatorCertification />
      <ProgramsSection />
      <IreJourney />
    </Box>
  );
};

export default ProgramLayout;
