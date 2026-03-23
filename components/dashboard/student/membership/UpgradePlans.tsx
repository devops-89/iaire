"use client";
import React from "react";
import { Box, Typography, Paper, Grid, Button, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Check } from "@mui/icons-material";

const plans = [
  {
    name: "Basic Scholar",
    price: "Free",
    features: ["Access to basic courses", "Community forum", "Weekly newsletter"],
    recommended: false,
  },
  {
    name: "Premium Scholar",
    price: "$29.99/mo",
    features: ["Access to all courses", "Direct instructor support", "Certificate of completion", "Early access to new content"],
    recommended: true,
  },
  {
    name: "Elite Researcher",
    price: "$99.99/mo",
    features: ["One-on-one mentorship", "Research project support", "Internship opportunities", "Exclusive webinars"],
    recommended: false,
  },
];

const UpgradePlans = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 800,
          textAlign: "center",
          fontFamily: roboto.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
        }}
      >
        Choose the Perfect Plan for Your Goals
      </Typography>
      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "24px",
                border: plan.recommended ? `2px solid ${COLORS.ACCENT_TAN}` : "1px solid #f0f0f0",
                background: COLORS.WHITE,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-10px)" },
              }}
            >
              {plan.recommended && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -15,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: COLORS.ACCENT_TAN,
                    color: COLORS.WHITE,
                    px: 3,
                    py: 0.5,
                    borderRadius: "20px",
                    fontWeight: 700,
                    fontSize: "12px",
                    fontFamily: montserrat.style.fontFamily,
                  }}
                >
                  MOST POPULAR
                </Box>
              )}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  mb: 1,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: roboto.style.fontFamily,
                }}
              >
                {plan.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 800,
                  mb: 4,
                  color: COLORS.ACCENT_TAN,
                  fontFamily: roboto.style.fontFamily,
                }}
              >
                {plan.price}
              </Typography>
              <List sx={{ mb: 4, flexGrow: 1 }}>
                {plan.features.map((feature, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <Check sx={{ color: COLORS.ACCENT_TAN, fontSize: "20px" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "14px",
                            fontWeight: 500,
                            fontFamily: montserrat.style.fontFamily,
                            color: "rgba(0,0,0,0.7)",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant={plan.recommended ? "contained" : "outlined"}
                fullWidth
                sx={{
                  bgcolor: plan.recommended ? COLORS.PRIMARY_NAVY : "transparent",
                  color: plan.recommended ? COLORS.WHITE : COLORS.PRIMARY_NAVY,
                  borderColor: COLORS.PRIMARY_NAVY,
                  borderRadius: "12px",
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 700,
                  fontFamily: montserrat.style.fontFamily,
                  "&:hover": {
                    bgcolor: plan.recommended ? COLORS.NAVY_GRADIENT_END : "rgba(11, 23, 39, 0.05)",
                    borderColor: COLORS.PRIMARY_NAVY,
                  },
                }}
              >
                {plan.recommended ? "Current Plan" : "Choose Plan"}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpgradePlans;
