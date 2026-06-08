"use client";
import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import InstitutionDashboardLayout from "../Index";
import { useBatches } from "@/hooks/mentor/getBatches";
import { CATEGORY } from "@/utils/enum";
import { CATEGORY_TYPES } from "@/utils/constant";

const AssignTeachersLayout = () => {
  const [type, setType] = useState(CATEGORY.INNOVATION);
  const { batchData } = useBatches(type);
  console.log("first", batchData);
  return (
    <InstitutionDashboardLayout>
      {/* <Tabs >
        {CATEGORY_TYPES.map((val, i) => (
          <Tab label={val} />
        ))}
      </Tabs> */}

      <Card sx={{ p: 2, boxShadow: "0px 0px 2px 2px #f3f3f3" }}>
        <Typography>As</Typography>
      </Card>
    </InstitutionDashboardLayout>
  );
};

export default AssignTeachersLayout;
