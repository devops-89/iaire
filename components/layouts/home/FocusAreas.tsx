"use client";

import { COLORS } from "@/utils/enum";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";

const focusAreas = [
  {
    title: "Innovation",
    description:
      "Foster growth through novel ideas and transformative solutions that shape the future.",
    icon: "/images/icon/bulbIcon.png",
    bgColor: "rgba(234, 179, 8, 0.1)",
  },
  {
    title: "Research",
    description:
      "Conduct rigorous scientific investigation and discovery that advances knowledge.",
    icon: "/images/icon/researchIcon.png",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    title: "Entrepreneurship",
    description:
      "Turn concepts into ventures that create impact and solve problems globally.",
    icon: "/images/icon/rocketIcon.png",
    bgColor: "rgba(168, 85, 247, 0.1)",
  },
];

const FocusAreas = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9F7F5" }}>
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ mb: { xs: 4, md: 8 }, px: { xs: 1 } }}
        >
          <Typography
            variant="h2"
            sx={{
              color: COLORS.PRIMARY_NAVY,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
              fontWeight: 700,
            }}
          >
            Key Focus Areas
          </Typography>
          <Typography
            sx={{
              color: "rgba(11, 23, 39, 0.7)",
              fontSize: { xs: "0.9rem", md: "1.05rem" },
              maxWidth: "600px",
            }}
          >
            Empowering the next generation through three interconnected pillars
            of excellence.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 8, md: 4 }}>
          {focusAreas.map((area, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  bgcolor: COLORS.WHITE,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Stack spacing={3}>
                  <Box
                  sx=
                  {{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: area.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    }} >
                    <Image src={area.icon} alt={area.title} width={32} height={32} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: COLORS.PRIMARY_NAVY,
                        mb: 2,
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                    >
                      {area.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(11, 23, 39, 0.7)",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {area.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FocusAreas;
