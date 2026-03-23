import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const DashboardLayoutProvider = ({ children }: { children: ReactNode }) => {
  return <Box sx={{ ml: "250px", mt: "70px", p: 2 }}>{children}</Box>;
};

export default DashboardLayoutProvider;
