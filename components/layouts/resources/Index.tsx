import { Box } from "@mui/material";
import StandardsRubrics from "./StandardsRubrics";
import PoliciesEthics from "./PoliciesEthics";

const ResourcesLayout = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <StandardsRubrics />
      <PoliciesEthics />
    </Box>
  );
};

export default ResourcesLayout;
