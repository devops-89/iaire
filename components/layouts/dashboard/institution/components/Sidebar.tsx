"use client";
import { INSTITUTION_SIDEBAR_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { getUserDetails } from "@/hooks/common/getUserDetails";

const InstitutionSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggle = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const { data, loading } = getUserDetails();

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
        <Box>
          <Typography
            sx={{
              fontSize: 30,
              color: COLORS.RED,
              textAlign: "center",
              fontFamily: roboto.style.fontFamily,
              pt: 2,
              pb: 2,
              fontWeight: 600,
            }}
          >
            IAIRE
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "rgba(0, 0, 0, 0.08)" }} />
        <List sx={{ px: 1 }}>
          {INSTITUTION_SIDEBAR_DATA.map((val: any, i) => {
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
                      pathname === val.url ? COLORS.RED : "transparent",
                    ":hover": {
                      backgroundColor:
                        pathname === val.url
                          ? COLORS.RED
                          : "rgba(198, 21, 48, 0.1)",
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
                                ? "rgba(198, 21, 48, 0.15)"
                                : "transparent",
                            ":hover": {
                              backgroundColor: "rgba(198, 21, 48, 0.08)",
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
    </Box>
  );
};

export default InstitutionSidebar;
