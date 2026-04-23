import WelcomeBanner from "@/components/widgets/Dashboard/WelcomeBanner";
import { Box } from "@mui/material";
import React from "react";
import StatsBox from "./components/dashboard/StatsBox";
import { DASHBOARD_STAT_CARDS, TEACHER_STATS_CARD } from "@/utils/constant";

const InstitutionDashboards = () => {
  return (
    <Box>
      <WelcomeBanner />
      {DASHBOARD_STAT_CARDS.map((val, i) => (
        <StatsBox title={val.title} data={val.data} key={i} />
      ))}
    </Box>
  );
};

export default InstitutionDashboards;
