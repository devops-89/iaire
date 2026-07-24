"use client";

import React from "react";
import { Box } from "@mui/material";
import { inter } from "@/utils/fonts";

interface FaqCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FaqCategoryFilter: React.FC<FaqCategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 1.25,
        width: "100%",
        maxWidth: "1000px",
      }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      {categories.map((cat, idx) => {
        const isActive = activeCategory === cat;
        return (
          <Box
            key={idx}
            onClick={() => onCategoryChange(cat)}
            sx={{
              cursor: "pointer",
              px: 2.5,
              py: 1,
              borderRadius: "30px",
              fontFamily: inter.style.fontFamily,
              fontSize: "13px",
              fontWeight: 600,
              border: "1px solid",
              borderColor: isActive ? "#1B365D" : "#E5E5E9",
              backgroundColor: isActive ? "#1B365D" : "#FFFFFF",
              color: isActive ? "#FFFFFF" : "#4B5563",
              boxShadow: isActive
                ? "0 4px 14px rgba(27, 54, 93, 0.2)"
                : "0 2px 6px rgba(0, 0, 0, 0.02)",
              transition: "all 0.25s ease",
              userSelect: "none",
              "&:hover": {
                borderColor: "#1B365D",
                color: isActive ? "#FFFFFF" : "#1B365D",
                backgroundColor: isActive
                  ? "#1B365D"
                  : "rgba(27, 54, 93, 0.04)",
              },
            }}
          >
            {cat}
          </Box>
        );
      })}
    </Box>
  );
};

export default FaqCategoryFilter;
