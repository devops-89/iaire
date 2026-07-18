import { Box } from "@mui/material";
import BoardHero from "./BoardHero";
import BoardMembersGrid from "./BoardMembersGrid";

const BoardLayout = () => {
  return (
    <Box>
      <BoardHero />
      <BoardMembersGrid />
    </Box>
  );
};

export default BoardLayout;
