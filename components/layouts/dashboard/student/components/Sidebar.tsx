"use client";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { STUDENT_SIDEBAR_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const StudentSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { loading, data } = getUserDetails();
  return (
    <Box>
      <Box
        sx={{
          width: 250,
          boxShadow: "0px 0px 2px 2px #d7d7d7",
          position: "fixed",
          height: "100vh",
          backgroundColor: COLORS.PRIMARY_NAVY,
          top: 0,
          left: 0,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 30,
              color: COLORS.ACCENT_TAN,
              textAlign: "center",
              fontFamily: roboto.style.fontFamily,
              pt: 2,
              pb: 2,
            }}
          >
            IAIRE
          </Typography>
        </Box>
        <Divider sx={{ borderColor: COLORS.ACCENT_TAN }} />
        <List>
          {STUDENT_SIDEBAR_DATA.map((val, i) => (
            <ListItemButton
              key={i}
              sx={{
                backgroundColor:
                  pathname === val.url ? COLORS.ACCENT_TAN : "transparent",
                ":hover": {
                  backgroundColor:
                    pathname === val.url ? COLORS.ACCENT_TAN : "transparent",
                },
              }}
              onClick={() => {
                router.push(val.url);
              }}
            >
              <ListItemText
                primary={val.label}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: montserrat.style.fontFamily,
                      color:
                        pathname === val.url
                          ? COLORS.PRIMARY_NAVY
                          : COLORS.WHITE,
                    },
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default StudentSidebar;
