"use client";
import { COLORS } from "@/utils/enum";
import { Person, PersonOutline, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EducatorHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    localStorage.clear();
    router.push("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "fixed",
        top: 0,
        right: 0,
        left: "250px",
        height: "70px",
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.72)"
          : COLORS.WHITE,
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: "1px solid",
        borderColor: isScrolled ? "rgba(255, 255, 255, 0.3)" : "#eeeeee",
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.05)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 1100,
        px: 4,
      }}
    >
      <Avatar
        onClick={handleClick}
        sx={{
          bgcolor: COLORS.PRIMARY_NAVY,
          cursor: "pointer",
          transition: "transform 0.2s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <Person />
      </Avatar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
            mt: 1.5,
            borderRadius: "12px",
            minWidth: "180px",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/dashboard/educator/profile");
          }}
          sx={{ py: 1.5, px: 2 }}
        >
          <ListItemIcon>
            <PersonOutline fontSize="small" sx={{ color: COLORS.PRIMARY_NAVY }} />
          </ListItemIcon>
          <ListItemText
            primary="My Profile"
            primaryTypographyProps={{
              sx: { fontSize: "14px", fontWeight: 600, color: COLORS.PRIMARY_NAVY },
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleLogout} sx={{ py: 1.5, px: 2, color: COLORS.RED }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: COLORS.RED }} />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              sx: { fontSize: "14px", fontWeight: 600 },
            }}
          />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default EducatorHeader;
