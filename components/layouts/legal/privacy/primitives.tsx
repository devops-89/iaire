import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";

export const Body = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontFamily: inter.style.fontFamily,
      fontSize: "15px",
      lineHeight: 1.85,
      color: "#4B5563",
    }}
  >
    {children}
  </Typography>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <Stack component="ul" spacing={0.75} sx={{ pl: 2.5, m: 0, mt: 1.5 }}>
    {items.map((item, i) => (
      <Typography
        key={i}
        component="li"
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "14.5px",
          lineHeight: 1.8,
          color: "#4B5563",
          listStyle: "disc",
        }}
      >
        {item}
      </Typography>
    ))}
  </Stack>
);

export const SubSection = ({ title, items }: { title: string; items: string[] }) => (
  <Box sx={{ mt: 2 }}>
    <Typography
      sx={{
        fontFamily: inter.style.fontFamily,
        fontSize: "14px",
        fontWeight: 700,
        color: "#1E3A5F",
        mb: 0.5,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {title}
    </Typography>
    <BulletList items={items} />
  </Box>
);
