import Breadcrumb from "@/components/widgets/Breadcrumb";
import { TEACHER_DATA, TEACHER_HEADER } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Card,
  Grid,
  Autocomplete,
  TextField,
  Typography,
  Popover,
  List,
  ListItemButton,
} from "@mui/material";
import { USER_STATUS } from "@/utils/enum";
import Link from "next/link";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { School } from "@mui/icons-material";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import TeacherHeader from "../../teacher/components/Header";
import { useModal } from "@/store/useModal";
import EducatorNomination from "@/components/modals/TeacherNomination";

const statusOptions = ["Member", "Not a Member"];

const EducatorList = () => {
  const { showModal } = useModal();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(
    null,
  );
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacherId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeacherId(null);
  };

  const handleShowTeacherNominationModal = (id: string | null) => {
    handleClose();
    showModal(<EducatorNomination educatorId={id} />);
  };

  const listItems = [
    {
      label: "Issue NOC",
    },
    {
      label: "Nominate For Training",
      onclick: () => handleShowTeacherNominationModal(selectedTeacherId),
    },
    {
      label: "View Profile",
    },
    {
      label: "Report",
    },
  ];

  return (
    <Box>
      <Card sx={{ p: 2, boxShadow: "0px 0px 4px 4px #000000040" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Educator Management"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Educator Management",
                href: "/dashboard/institution/educator-management",
              },
            ]}
          />
          <Link href="/dashboard/institution/educator-management/add-educator">
            <Button
              sx={{
                backgroundColor: COLORS.ACCENT_TAN,
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
              }}
              endIcon={<Add />}
            >
              Add Educator
            </Button>
          </Link>
        </Stack>

        <Grid container spacing={3} mt={2}>
          <Grid size={3}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Status"
                  sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
                />
              )}
              options={statusOptions}
              renderOption={(props, option) => (
                <Box component={"li"} {...props}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 500,
                    }}
                  >
                    {option}
                  </Typography>
                </Box>
              )}
            />
          </Grid>
          <Grid size={9}>
            <TextField
              label="Search"
              fullWidth
              sx={{ ...TEXTFIELD_STYLE_VALIDATION }}
            />
          </Grid>
        </Grid>

        <TableContainer sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                {TEACHER_HEADER.map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {TEACHER_DATA.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>{teacher.id}</TableCell>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.status}</TableCell>
                  <TableCell>{teacher.membershipId}</TableCell>

                  <TableCell>
                    <IconButton onClick={(e) => handleClick(e, teacher.id)}>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Popover
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          sx={{
            "& .MuiPopover-paper": {
              width: 210,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(14px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              mt: 1,
              overflow: "hidden",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List>
            {listItems.map((val, i) => (
              <ListItemButton key={i} onClick={val.onclick}>
                <ListItemText primary={val.label} />
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Card>
    </Box>
  );
};

export default EducatorList;
