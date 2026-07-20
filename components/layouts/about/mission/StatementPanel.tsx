import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface StatementPanelProps {
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

const StatementPanel = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  description,
  buttonText,
  buttonHref,
}: StatementPanelProps) => {
  return (
    <Stack spacing={3} sx={{ animation: "fadeInUp 0.5s ease forwards" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "12px",
            backgroundColor: iconBgColor,
            color: iconColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 900,
            fontSize: "19px",
            color: "#0B1727",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#4B5563",
          fontWeight: 500,
        }}
      >
        {description}
      </Typography>

      <Box sx={{ pt: 1 }}>
        <Link href={buttonHref} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            endIcon={
              <ArrowForwardIcon
                className="arrow-icon"
                sx={{ transition: "transform 0.25s ease" }}
              />
            }
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "none",
              color: "#1B365D",
              borderColor: "#1B365D",
              borderWidth: "1.5px",
              borderRadius: "50px",
              px: 3.5,
              py: 1,
              "&:hover": {
                borderWidth: "1.5px",
                backgroundColor: "rgba(27, 54, 93, 0.04)",
                borderColor: "#122744",
                "& .arrow-icon": { transform: "translateX(4px)" },
              },
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default StatementPanel;
