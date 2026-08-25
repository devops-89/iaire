"use client";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import { STUDENT_SIDEBAR_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import useSidebar from "@/store/useSidebar";
import Image from "next/image";
import logo from "@/images/logo/iaire_logo.png";

const StudentSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { loading, data } = getUserDetails();
  const { isOpen, setIsOpen } = useSidebar();

  const handleNavigation = (url: string) => {
    router.push(url);
    setIsOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: COLORS.WHITE,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image src={logo} alt="" width={200} height={70} />
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
            onClick={() => handleNavigation(val.url)}
          >
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: {
                  sx: {
                    fontFamily: montserrat.style.fontFamily,
                    color:
                      pathname === val.url ? COLORS.PRIMARY_NAVY : COLORS.BLACK,
                  },
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { md: 250 }, flexShrink: { md: 0 } }}>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
          zIndex: 1200,
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            boxShadow: "0px 0px 2px 2px #d7d7d7",
            borderRight: "none",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default StudentSidebar;
