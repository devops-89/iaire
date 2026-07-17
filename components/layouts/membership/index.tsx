import { Box } from "@mui/material";
import MemberHero from "./MemberHero";
import InstitutionalMember from "./InstitutionalMember";
import EducatorMember from "./EducatorMember";
import StudentMember from "./StudentMember";
import CertificationPathways from "./CertificationPathways";

const MemberShipLayout = () => {
  return (
    <Box>
      <MemberHero />
      <InstitutionalMember />
      <EducatorMember />
      <StudentMember />
      <CertificationPathways />
    </Box>
  );
};
export default MemberShipLayout;
