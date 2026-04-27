import Breadcrumb from "@/components/widgets/Breadcrumb";
import { STUDENT_HEADER_DATA, STUDENT_TABLE_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const StudentList = () => {
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
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell>{val.phone}</TableCell>
                    <TableCell>{val.grade}</TableCell>
                    <TableCell>{val.status}</TableCell>
                    <TableCell>{val.membershipId}</TableCell>
                    <TableCell>
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default StudentList;
