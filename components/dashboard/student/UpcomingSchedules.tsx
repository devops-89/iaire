"use client";
import React from "react";
import { Box, Typography, Paper, Avatar, Stack } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { EventAvailable } from "@mui/icons-material";

const events = [
  {
    title: "AI & Society Guest Lecture",
    time: "Tomorrow, 10:00 AM",
    type: "Live Session",
    attendees: 42,
  },
  {
    title: "Project Milestone Submission",
    time: "Friday, 11:59 PM",
    type: "Deadline",
    attendees: null,
  },
  {
    title: "Ethics in Tech Workshop",
    time: "Next Monday, 2:00 PM",
    type: "Workshop",
    attendees: 15,
  },
];

const UpcomingSchedules = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 700,
          fontFamily: roboto.style.fontFamily,
          color: COLORS.PRIMARY_NAVY,
        }}
      >
        Upcoming Schedules
      </Typography>
      <Stack spacing={2}>
        {events.map((event, index) => (
          <Paper
            elevation={0}
            key={index}
            sx={{
              p: 2,
              borderRadius: "15px",
              border: "1px solid #f0f0f0",
              display: "flex",
              alignItems: "center",
              gap: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fafafa",
                transform: "translateX(5px)",
                borderColor: COLORS.ACCENT_TAN,
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor:
                  event.type === "Deadline" ? "#FFEBEE" : "rgba(209, 160, 84, 0.1)",
                color: event.type === "Deadline" ? "#D32F2F" : COLORS.ACCENT_TAN,
                width: 50,
                height: 50,
                borderRadius: "12px",
              }}
            >
              <EventAvailable />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: COLORS.PRIMARY_NAVY,
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {event.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "rgba(0,0,0,0.5)",
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {event.time} • {event.type}
              </Typography>
            </Box>
            {event.attendees && (
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: COLORS.ACCENT_TAN,
                  backgroundColor: "rgba(209, 160, 84, 0.1)",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "20px",
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                {event.attendees} joined
              </Typography>
            )}
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default UpcomingSchedules;
