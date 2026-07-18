import { Box } from "@mui/material";
import StandardsRubrics from "./StandardsRubrics";
import ResourcesHub from "./ResourcesHub";
import PoliciesEthics from "./PoliciesEthics";

const ResourcesLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <StandardsRubrics />
      <ResourcesHub />
      <PoliciesEthics />
    </Box>
  );
};

export default ResourcesLayout;
