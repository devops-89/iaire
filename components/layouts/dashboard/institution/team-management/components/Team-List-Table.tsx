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
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          p: 2,
          borderRadius: "10px",
        }}
      >
        <List>
          <ListItemButton>
            <ListItemText primary={"Manage Team Memebers"} />
          </ListItemButton>
        </List>
      </Popover>
    </Box>
  );
};

export default TeamListTable;
