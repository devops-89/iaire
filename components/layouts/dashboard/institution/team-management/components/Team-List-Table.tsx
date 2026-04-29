"use client";
import { roboto } from "@/utils/fonts";
import { TEAM_LIST_DATA_PROPS, TEAM_LIST_HEADER } from "@/utils/type";
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
} from "@mui/material";
import React, { MouseEvent, useState } from "react";

const TeamListTable = ({
  tableHeader,
  tableData,
}: {
  tableHeader: TEAM_LIST_HEADER[];
  tableData: TEAM_LIST_DATA_PROPS[];
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const listdata = [
    {
      label: "Manage Team Members",
    },
    {
      label: "View Team Profile",
    },
    {
      label: "Manage Assistant Mentor",
    },
    {
      label: "Manage Mentor",
    },
  ];

  const handlePopover = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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
                    fontFamily: roboto.style.fontFamily,
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

                    fontFamily: roboto.style.fontFamily,
                  }}
                >
                  {val.id}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: roboto.style.fontFamily,
                  }}
                >
                  {val.teamName}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: roboto.style.fontFamily,
                  }}
                >
                  {val.mentorName}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 14,

                    fontFamily: roboto.style.fontFamily,
                  }}
                >
                  {val.assistantMentorName}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton onClick={handlePopover}>
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
        onClose={() => setAnchorEl(null)}
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
