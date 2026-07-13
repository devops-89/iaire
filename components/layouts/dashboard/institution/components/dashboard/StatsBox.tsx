import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import StatsCard from "./StatsCard";
import { TEACHER_STATS_CARD } from "@/utils/constant";
import { STATSCARDPROPS } from "@/utils/type";

const StatsBox = ({ title, data = [] }: STATSCARDPROPS) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          borderColor: COLORS.PRIMARY_NAVY,
          borderWidth: "2px",
          width: 80,
          borderRadius: "20px",
        }}
      />
      <Grid container spacing={3}>
        {data?.map((val, i) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={i}>
            <StatsCard title={val.title} count={val.count} icon={val.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsBox;
