"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { boardMembers } from "@/utils/boardMembers";
import BoardMemberCard from "../BoardMemberCard";

const BoardMembersGrid = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#F8F9FC",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Stack spacing={1.5} sx={{ maxWidth: "680px" }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: COLORS.PRIMARY_NAVY,
                textTransform: "uppercase",
              }}
            >
              Board Members
            </Typography>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: 800,
                color: "#0B1727",
                letterSpacing: "-0.02em",
              }}
            >
              Global Experts in Science, Innovation & Leadership
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {boardMembers.map((member, idx) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={member.slug}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={idx * 50}
              >
                <BoardMemberCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default BoardMembersGrid;
