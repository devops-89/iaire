"use client";

import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { newBlack_medium } from "@/utils/fonts";

import { NavigationItem } from "@/utils/type";

interface NavItemProps {
  val: NavigationItem;
  pathname: string;
}

const NavItem = ({ val, pathname }: NavItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hasSub = val.subModules && val.subModules.length > 0;

  if (hasSub) {
    return (
      <Box>
        <Button
          onClick={handleClick}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                transition: "transform 0.2s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          }
          sx={{
            fontFamily: newBlack_medium.style.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            color: open ? "#1B365D" : "#2C2C30",
            px: 2.5,
            py: 1,
            borderRadius: "50px",
            textTransform: "none",
            transition: "all 0.25s ease",
            backgroundColor: open ? "rgba(248, 93, 0, 0.05)" : "transparent",
            "&:hover": {
              color: "#1B365D",
              backgroundColor: "rgba(248, 93, 0, 0.05)",
            },
          }}
        >
          {val.label}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={0}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              sx: {
                mt: 1.5,
                borderRadius: "16px",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.06)",
                minWidth: 200,
                p: 1,
              },
            },
          }}
        >
          {val.subModules?.map((sub, idx) => (
            <Link
              href={sub.url}
              key={idx}
              style={{ textDecoration: "none" }}
              onClick={handleClose}
              target={sub.target}
            >
              <MenuItem
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: pathname === sub.url ? "#1B365D" : "#2C2C30",
                  py: 1.25,
                  px: 2,
                  borderRadius: "10px",
                  transition: "all 0.25s ease",
                  backgroundColor: pathname === sub.url ? "rgba(248, 93, 0, 0.03)" : "transparent",
                  "&:hover": {
                    color: "#1B365D",
                    backgroundColor: "rgba(248, 93, 0, 0.05)",
                  },
                }}
              >
                {sub.label}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    );
  }

  return (
    <Link
      href={val.url || "#"}
      style={{
        textDecoration: "none",
      }}
    >
      <Typography
        sx={{
          fontFamily: newBlack_medium.style.fontFamily,
          fontSize: 14,
          fontWeight: 600,
          color: pathname === val.url ? COLORS.WHITE : "#2C2C30",
          backgroundColor: pathname === val.url ? "#1B365D" : "transparent",
          px: 2.5,
          py: 1,
          borderRadius: "50px",
          textAlign: "center",
          transition: "all 0.25s ease",
          "&:hover": {
            color: pathname === val.url ? COLORS.WHITE : "#1B365D",
            backgroundColor:
              pathname === val.url
                ? "#122744"
                : "rgba(248, 93, 0, 0.05)",
          },
        }}
      >
        {val.label}
      </Typography>
    </Link>
  );
};

export default NavItem;
