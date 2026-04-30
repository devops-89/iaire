import { Box } from "@mui/material";
import MemberHero from "./MemberHero";
import MembershipAdvancement from "./MembershipAdvancement";
import MembershipSection from "./MembershipSection";
import VerifyMembership from "./VerifyMembership";
import WhyBecomeMember from "./WhyBecomeMember";

const MemberShipLayout=()=>{
    return(
        <Box>
            <MemberHero/>
            <MembershipSection/>
            <WhyBecomeMember/>
            <MembershipAdvancement/>
            <VerifyMembership/>
        </Box>
    );
};
export default MemberShipLayout;