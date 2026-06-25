import { COLORS } from "@/utils/enum";
import { montserrat } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import React from "react";

const sectionTitleSx = {
  fontFamily: montserrat.style.fontFamily,
  fontWeight: 700,
  color: COLORS.PRIMARY_NAVY,
};

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const SectionHeader = ({ icon, title }: SectionHeaderProps) => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
    {icon}
    <Typography variant="h6" sx={sectionTitleSx}>
      {title}
    </Typography>
  </Stack>
);

export default SectionHeader;
