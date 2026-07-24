import { Box } from "@mui/material";
import BoardHero from "./BoardHero";
import BoardMembersGrid from "./BoardMembersGrid";
import AboutCompetitionSection from "../AboutCompetitionSection";
import AboutPlatformSection from "../AboutPlatformSection";
import AboutResearchSection from "../AboutResearchSection";
import AboutResourcesSection from "../AboutResourcesSection";

const BoardLayout = () => {
  return (
    <Box>
      <BoardHero />
      <BoardMembersGrid />
      <AboutCompetitionSection />
      <AboutPlatformSection />
      <AboutResearchSection />
      <AboutResourcesSection />
    </Box>
  );
};

export default BoardLayout;
