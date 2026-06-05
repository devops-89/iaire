"use client";
import {
  aloeveraDisplay_medium,
  newBlack_light,
  newBlack_medium,
  roboto,
} from "@/utils/fonts";
import {
  TEAM_DETAILS_RESPONSE,
  TEAM_LIST_DATA_PROPS,
  TEAM_LIST_HEADER,
} from "@/utils/type";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TeamListTable = ({
  tableHeader,
  tableData,
}: {
  tableHeader: TEAM_LIST_HEADER[];
  tableData: TEAM_DETAILS_RESPONSE[];
}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedTeam, setSelectedTeam] =
    useState<TEAM_DETAILS_RESPONSE | null>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeam(null);
  };

  const listdata = [
    {
      label: "Manage Team Members",
    },
    // {
    //   label: "View Team Profile",
    //   onclick: () => {
    //     if (selectedTeam?.id) {
    //       router.push(
    //         `/dashboard/institution/team-management/${selectedTeam.id}/view-team`,
    //       );
    //       handleClose();
    //     }
    //   },
    // },
    {
      label: "Manage Assistant Mentor",
    },
    {
      label: "Manage Mentor",
    },
  ];

  const handlePopover = (
    event: MouseEvent<HTMLButtonElement>,
    team: TEAM_DETAILS_RESPONSE,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeam(team);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader.map((val, i) => (
                <TableCell
                  key={i}
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  }}
                >
                  {val.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((val, i) => (
              <TableRow key={i}>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: newBlack_medium.style.fontFamily,
                  }}
                >
                  {val.teamCode}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,
                    fontFamily: newBlack_medium.style.fontFamily,
                  }}
                >
                  <Link
                    href={`/dashboard/institution/team-management/${val.id}/view-team`}
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    <Typography
                      sx={{
                        "&:hover": { color: "#015A50" },
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: newBlack_medium.style.fontFamily,
                        textTransform: "capitalize",
                      }}
                    >
                      {val.title}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: newBlack_medium.style.fontFamily,
                  }}
                >
                  {val.mentor.firstName} {val.mentor.lastName}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: newBlack_medium.style.fontFamily,
                  }}
                >
                  {val.assistantMentor?.firstName || "--"}{" "}
                  {val.assistantMentor?.lastName || "--"}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton onClick={(e) => handlePopover(e, val)}>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          p: 2,
          borderRadius: "10px",
          "& .MuiPopover-paper": {
            backgroundColor: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(10px)",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
            borderRadius: "10px",
          },
          //   color: COLORS.WHITE,
        }}
      >
        <List>
          {listdata.map((val, i) => (
            <ListItemButton key={i}>
              <ListItemText primary={val.label} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default TeamListTable;
