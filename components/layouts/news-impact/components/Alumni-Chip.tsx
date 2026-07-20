import { inter } from "@/utils/fonts";
import { Box, Chip } from "@mui/material";
import React from "react";

interface AlumniChipProps {
  univ: string;
}

const AlumniChip = ({ univ }: AlumniChipProps) => {
  return (
    <Box>
      <Box
        sx={{
          px: 3,
          py: 1.25,
          borderRadius: "100px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "13px",
          fontWeight: 600,
          fontFamily: inter.style.fontFamily,
          transition: "all 0.25s ease",
          cursor: "default",
          "&:hover": {
            borderColor: "#93C5FD",
            backgroundColor: "rgba(147, 197, 253, 0.15)",
            color: "#FFFFFF",
            transform: "scale(1.03)",
            boxShadow: "0 8px 20px rgba(147, 197, 253, 0.15)",
          },
        }}
      >
        {univ}
      </Box>
    </Box>
  );
};

export default AlumniChip;
