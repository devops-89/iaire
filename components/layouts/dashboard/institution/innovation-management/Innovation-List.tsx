import Breadcrumb from "@/components/widgets/Breadcrumb";
import { INNOVATION_DATA, INNOVATION_HEADER } from "@/utils/constant";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_medium, newBlack_semiBold, roboto } from "@/utils/fonts";
import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
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

const InnovationList = () => {

  return (
    <Box>
      <Box>
        {/* <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Breadcrumb
            title="Innovation Submissions"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard/school",
              },
              {
                title: "Innovation Submissions",
                href: "/dashboard/school/innovation-submission",
              },
            ]}
          />
          <Link
            href="/dashboard/school/innovation-submission/add-innovation"
            style={{ textDecoration: "none" }}
          >
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
              Add Innovation
            </Button>
          </Link>
        </Stack>


        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                {INNOVATION_HEADER.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: 16,
                    }}
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {INNOVATION_DATA.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        fontWeight: 800,
                        fontFamily: roboto.style.fontFamily,
                        borderRadius: "8px",
                        fontSize: "13px",
                        padding: "4px 8px",
                        ...(item.status === USER_STATUS.ACTIVE && {
                          bgcolor: "#ECFDF5",
                          color: "#10B981",
                        }),
                        ...(item.status === USER_STATUS.PENDING && {
                          bgcolor: "#FFFBEB",
                          color: "#F59E0B",
                        }),
                        ...(item.status === USER_STATUS.INACTIVE && {
                          bgcolor: "#FEF2F2",
                          color: "#EF4444",
                        }),
                        ...(item.status === USER_STATUS.BANNED && {
                          bgcolor: "#F9FAFB",
                          color: "#6B7280",
                        }),
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <Edit fontSize="small" sx={{ color: COLORS.BLACK }} />
                    </IconButton>
                    <IconButton>
                      <Delete fontSize="small" sx={{ color: COLORS.BLACK }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}


        <Box>
          <Card sx={{ p: 2 }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <Typography variant="h6" sx={{ fontFamily: newBlack_semiBold.style.fontFamily, fontWeight: 500, fontSize: 25, color: COLORS.BLACK }}>
                Innovation Management
              </Typography>
              <Link href="/dashboard/institution/innovation-submission/add-innovation">
                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY_NAVY,
                    color: COLORS.WHITE,
                    fontFamily: aloeveraDisplay_medium.style.fontFamily,
                    fontWeight: 400,
                    fontSize: 14,
                    borderRadius: "10px",
                    padding: "8px 24px",
                    textTransform: "none"
                  }}
                  endIcon={<Add />}
                >
                  Add Team
                </Button>
              </Link>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default InnovationList;
