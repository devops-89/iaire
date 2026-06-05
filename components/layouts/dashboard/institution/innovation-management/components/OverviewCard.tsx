import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { INNOVATION_RESPONSE_DATA_PROPS } from "@/utils/type";

interface OverviewCardProps {
  innovationDetails: INNOVATION_RESPONSE_DATA_PROPS;
}

const OverviewCard = ({ innovationDetails }: OverviewCardProps) => {
  return (
    <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          className={montserrat.className}
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            mb: 2,
          }}
        >
          Innovation Overview
        </Typography>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: COLORS.PRIMARY_BLUE,
              mb: 1,
            }}
          >
            Problem Statement
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            {innovationDetails.problemDescription || "-"}
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: COLORS.PRIMARY_BLUE,
              mb: 1,
            }}
          >
            Proposed Solution
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            {innovationDetails.solution || "-"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
