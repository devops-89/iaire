import { Box } from "@mui/material";
import IreJourney from "./IreJourney";
import ProgramHero from "./ProgramHero";
import ProgramsSection from "./ProgramSection";

const ProgramLayout = () => {
    return (
    <Box sx={{ overflowX: "hidden" }}>
        <ProgramHero/>
        <ProgramsSection/>
        <IreJourney/>
    </Box>
    );
};

export default ProgramLayout;
