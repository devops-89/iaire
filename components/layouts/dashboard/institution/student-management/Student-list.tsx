"use client";
import Recommend from "@/components/modals/student/Recommend";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useModal } from "@/store/useModal";
import { STUDENT_HEADER_DATA, STUDENT_TABLE_DATA } from "@/utils/constant";
import { COLORS, GENDER_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const StudentList = () => {
  const { showModal } = useModal();
  const [selectedStudent, setSelecetedStudent] = useState("");
  const handleRecommendation = () => {
    console.log("id", selectedStudent);
    showModal(<Recommend studentData={selectedStudent} />);
    setAnchorEl(null);
  };

  const listData = [
    {
      label: "Recommend for Head Girl/Boy",
      onclick: handleRecommendation,
    },
    {
      label: "View Profile",
    },
  ];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handlePopover = (
    e: React.MouseEvent<HTMLButtonElement>,
    studentData: any,
  ) => {
    setAnchorEl(e.currentTarget);
    setSelecetedStudent(studentData);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelecetedStudent("");
  };

  return (
    <Box>
      <Card sx={{ p: 2, boxShadow: "0px 0px 4px 4px #000000040" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Student Management"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/institution",
              },
              {
                title: "Student Management",
                href: "/dashboard/institution/student-management",
              },
            ]}
          />
          <Link href="/dashboard/institution/student-management/add-student">
            <Button
              sx={{
                backgroundColor: COLORS.RED,
                color: COLORS.WHITE,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: "10px",
                padding: "10px 20px",
              }}
              endIcon={<Add />}
            >
              Add Student
            </Button>
          </Link>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {STUDENT_HEADER_DATA.map((val, i) => (
                    <TableCell key={i} sx={{ fontWeight: 600 }}>
                      {val}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {STUDENT_TABLE_DATA.map((val, i) => (
                  <TableRow key={i}>
                    <TableCell>{val.id}</TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          color: COLORS.BLACK,
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                      >
                        {val.name}
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>{val.email}</Typography>
                    </TableCell>
                    <TableCell>{val.phone}</TableCell>
                    <TableCell>{val.grade}</TableCell>
                    <TableCell>{val.gender}</TableCell>
                    <TableCell>{val.status}</TableCell>
                    <TableCell>{val.membershipId}</TableCell>
                    <TableCell>
                      <IconButton onClick={(e) => handlePopover(e, val)}>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Popover
          sx={{
            "& .MuiPopover-paper": {
              // width: 210,
              backgroundColor: "#ffffff30",
              backdropFilter: "blur(14px)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              mt: 1,
              overflow: "hidden",
            },
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
        >
          <List>
            {listData.map((val, i) => (
              <ListItemButton onClick={val.onclick}>
                <ListItemText
                  primary={val.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Card>
    </Box>
  );
};

export default StudentList;
