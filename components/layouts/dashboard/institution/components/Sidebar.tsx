"use client";
import { INSTITUTION_SIDEBAR_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import logo from "@/images/logo/iaire_logo.png";
import Image from "next/image";
import { useSignup } from "@/store/useSignup";
import useSidebar from "@/store/useSidebar";
const InstitutionSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const { isOpen, setIsOpen } = useSidebar();

  const handleToggle = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const { setInstitutionData } = useSignup();
  const { data, loading } = getUserDetails();

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
      <Box sx={{ width: 150, p: 1, margin: "auto" }}>
        <Image src={logo} alt="" style={{ width: "100%", height: "auto" }} />
      </Box>
      <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.08)" }} />
      <List sx={{ px: 1 }}>
        {INSTITUTION_SIDEBAR_DATA.map((val: any, i) => {
          const hasSubItems = val.subItems && val.subItems.length > 0;
          const isItemOpen = openItems[val.label] || false;
          const isActive =
            pathname === val.url ||
            (hasSubItems &&
              val.subItems.some((sub: any) => pathname === sub.url));

          return (
            <React.Fragment key={i}>
              <ListItemButton
                sx={{
                  borderRadius: "8px",
                  mb: 0.5,
                  backgroundColor:
                    pathname === val.url ? COLORS.PRIMARY_NAVY : "transparent",
                  ":hover": {
                    backgroundColor:
                      pathname === val.url
                        ? COLORS.PRIMARY_NAVY
                        : "rgba(12, 10, 10, 0.1)",
                  },
                  color: pathname === val.url ? COLORS.WHITE : COLORS.BLACK,
                }}
                onClick={() => {
                  if (hasSubItems) {
                    handleToggle(val.label);
                  } else {
                    handleNavigation(val.url);
                  }
                }}
              >
                <ListItemAvatar sx={{ minWidth: 30 }}>
                  <val.icon size={20} />
                </ListItemAvatar>
                <ListItemText
                  primary={val.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: roboto.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: isActive ? 600 : 400,
                      },
                    },
                  }}
                />
                {hasSubItems &&
                  (isItemOpen ? (
                    <ExpandLess sx={{ fontSize: 18 }} />
                  ) : (
                    <ExpandMore sx={{ fontSize: 18 }} />
                  ))}
              </ListItemButton>

              {hasSubItems && (
                <Collapse in={isItemOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {val.subItems.map((sub: any, subIndex: number) => (
                      <ListItemButton
                        key={subIndex}
                        sx={{
                          pl: 4,
                          borderRadius: "8px",
                          mb: 0.5,
                          backgroundColor:
                            pathname === sub.url
                              ? "rgba(198, 21, 48, 0.15)"
                              : "transparent",
                          ":hover": {
                            backgroundColor: "rgba(198, 21, 48, 0.08)",
                          },
                        }}
                        onClick={() => handleNavigation(sub.url)}
                      >
                        <ListItemText
                          primary={sub.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontFamily: montserrat.style.fontFamily,
                                fontSize: "13px",
                                color:
                                  pathname === sub.url
                                    ? COLORS.RED
                                    : "rgba(0, 0, 0, 0.6)",
                                fontWeight: pathname === sub.url ? 600 : 400,
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: 250 }, flexShrink: { md: 0 } }}
    >
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

export default InstitutionSidebar;
