import LeadershipCard from "@/components/widgets/Dashboard/LeadershipCard";
import Tierprogress from "@/components/widgets/Dashboard/Tierprogress";
import { useSchoolDashboard } from "@/hooks/school/useSchoolDashboard";
import { useSignup } from "@/store/useSignup";
import { INSTITUTION_MEMBERSHIP_LEVEL } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium, roboto } from "@/utils/fonts";
import StatsBox from "@/components/layouts/dashboard/institution/components/dashboard/StatsBox";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";

const InstitutionDashboards = () => {
  const { dashboardData, loading } = useSchoolDashboard();

  const { institutionData } = useSignup();
  // console.log("institutionData", institutionData);

  return (
    <Stack spacing={4} sx={{ width: "100%", pb: 4 }}>
      <Box>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Typography
            sx={{
              fontSize: 30,
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
            }}
          >
            {institutionData?.school?.name || institutionData?.institutionName}
          </Typography>
          <Chip
            label={(
              institutionData?.school?.membershipTier ||
              institutionData?.membershipTier
            )?.replace(/_/g, " ")}
            sx={{
              background: COLORS.ACCENT_TAN,
              color: COLORS.PRIMARY_BLUE,
              fontSize: 16,
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
            }}
          />
        </Stack>
        <Typography
          sx={{
            fontSize: 15,
            fontFamily: roboto.style.fontFamily,
            fontWeight: 600,
            color: "#2B3447",
          }}
        >
          Membership Id : {institutionData?.userId}
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            fontFamily: roboto.style.fontFamily,
            fontWeight: 600,
          }}
        >
          Member Since :{" "}
          {moment(
            institutionData?.school?.createdAt || institutionData?.createdAt,
          ).format("DD MMM YYYY")}
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Tierprogress
            data={INSTITUTION_MEMBERSHIP_LEVEL}
            membershipTier={
              institutionData?.school?.membershipTier ||
              institutionData?.membershipTier
            }
            tierProgressDetails={institutionData?.tierProgressDetails}
            role={institutionData?.role}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <LeadershipCard />
        </Grid>
      </Grid>
      <StatsBox data={dashboardData?.patent} title="Patents" />
      <StatsBox
        data={dashboardData?.researchSubmission}
        title="Research Publications"
      />
      <StatsBox data={dashboardData?.students} title="Students" />
      <StatsBox data={dashboardData?.educators} title="Educators" />
      <StatsBox data={dashboardData?.startups} title="Startups" />
    </Stack>
  );
};

export default InstitutionDashboards;
