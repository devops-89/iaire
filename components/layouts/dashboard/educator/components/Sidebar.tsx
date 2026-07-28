"use client";
import { EDUCATOR_SIDEBAR_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { getUserDetails } from "@/hooks/common/getUserDetails";
import logo from "@/images/logo/iaire_logo.png";
import Image from "next/image";
const EducatorSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggle = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const { loading, data } = getUserDetails();

  return (
    <Box>
      <Box
        sx={{
          width: 250,
          boxShadow: "0px 0px 2px 2px #d7d7d7",
          position: "fixed",
          height: "100vh",
          backgroundColor: COLORS.WHITE,
          top: 0,
          left: 0,
          zIndex: 1200,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image
            src={logo}
            alt="logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Divider sx={{ borderColor: COLORS.ACCENT_TAN }} />
        <List sx={{ px: 1 }}>
          {EDUCATOR_SIDEBAR_DATA.map((val: any, i) => {
            const hasSubItems = val.subItems && val.subItems.length > 0;
            const isOpen = openItems[val.label] || false;
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
                      pathname === val.url
                        ? COLORS.PRIMARY_NAVY
                        : "transparent",
                    ":hover": {
                      backgroundColor:
                        pathname === val.url
                          ? COLORS.PRIMARY_NAVY
                          : "rgba(209, 160, 84, 0.1)",
                    },
                    color: pathname === val.url ? COLORS.WHITE : COLORS.BLACK,
                  }}
                  onClick={() => {
                    if (hasSubItems) {
                      handleToggle(val.label);
                    } else {
                      router.push(val.url);
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
                          fontFamily: montserrat.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: isActive ? 600 : 400,
                        },
                      },
                    }}
                  />
                  {hasSubItems &&
                    (isOpen ? (
                      <ExpandLess sx={{ fontSize: 18 }} />
                    ) : (
                      <ExpandMore sx={{ fontSize: 18 }} />
                    ))}
                </ListItemButton>

                {hasSubItems && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
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
                                ? "rgba(209, 160, 84, 0.2)"
                                : "transparent",
                            ":hover": {
                              backgroundColor: "rgba(209, 160, 84, 0.1)",
                            },
                          }}
                          onClick={() => router.push(sub.url)}
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
                                      ? COLORS.ACCENT_TAN
                                      : "rgba(255, 255, 255, 0.7)",
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
    </Box>
  );
};

export default EducatorSidebar;
