import { inter } from "@/utils/fonts";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

interface STATSCARDPROPS {
  number: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  id: number;
}

const StatsCard = ({ number, label, desc, icon, id }: STATSCARDPROPS) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={(id * 100).toString()}
      sx={{
        p: 3.5,
        height: "100%",
        borderRadius: "20px",
        border: "1px solid rgba(147, 197, 253, 0.15)",
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          transform: "translateY(-5px)",
          borderColor: "#93C5FD",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
          boxShadow: "0 20px 40px rgba(147, 197, 253, 0.15)",
        },
      }}
    >
      <Stack spacing={2.5}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "14px",
            backgroundColor: "rgba(147, 197, 253, 0.1)",
            border: "1px solid rgba(147, 197, 253, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>

        <Stack spacing={1}>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "36px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            {number}
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14px",
              fontWeight: 700,
              color: "#93C5FD",
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.5,
            }}
          >
            {desc}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default StatsCard;
