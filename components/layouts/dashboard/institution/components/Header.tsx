"use client";
import { COLORS } from "@/utils/enum";
import { Person, Logout, Settings, PersonOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Popover,
  Typography,
  Divider,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { montserrat, roboto } from "@/utils/fonts";
import { useSignup } from "@/store/useSignup";

const InstitutionHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  const open = Boolean(anchorEl);

  const { institutionData } = useSignup();
  // const isMember =
  //   institutionData?.payments?.some(
  //     (val: any) => val.membership?.status === "ACTIVE",
  //   ) || false;

  // console.log("institutionData", institutionData);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "fixed",
        top: 0,
        right: 0,
        left: "250px", // Align with sidebar width
        height: "80px",
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
        // py:
      }}
    >
      <Avatar
        onClick={handleOpen}
        sx={{
          bgcolor: COLORS.ACCENT_TAN,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Person />
      </Avatar>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              width: 240,
              borderRadius: "16px",
              boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
              overflow: "hidden",
            },
          },
        }}
        sx={{ zIndex: 999999 }}
      >
        <Box sx={{ p: 2.5, bgcolor: "rgba(249, 250, 251, 0.5)" }}>
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: 16,
              color: COLORS.PRIMARY_NAVY,
              textTransform: "capitalize",
            }}
          >
            {institutionData?.school?.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: 14,
              color: COLORS.PRIMARY_NAVY,
            }}
          >
            {institutionData?.email}
          </Typography>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontSize: 13,
              color: "rgba(0, 0, 0, 0.5)",
              mt: 0.5,
            }}
          >
            Manage your portal
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 1 }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              borderRadius: "8px",
              py: 1.5,
              mb: 0.5,
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.03)" },
            }}
          >
            <ListItemIcon>
              <PersonOutline fontSize="small" sx={{ color: COLORS.BLACK }} />
            </ListItemIcon>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.BLACK,
              }}
            >
              Profile
            </Typography>
          </MenuItem>

          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: "8px",
              py: 1.5,
              color: "#d32f2f",
              "&:hover": { bgcolor: "rgba(211, 47, 47, 0.08)" },
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" sx={{ color: "#d32f2f" }} />
            </ListItemIcon>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Log out
            </Typography>
          </MenuItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default InstitutionHeader;
