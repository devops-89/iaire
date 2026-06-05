import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { INNOVATION_HEADER } from "@/utils/constant";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_semiBold } from "@/utils/fonts";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
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
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const InnovationList = () => {
  const { loading, fetchInnovationList, innovationData } =
    useGetAllInnovation();

  useEffect(() => {
    fetchInnovationList();
  }, []);

  const router = useRouter();

  return (
    <Box>
      <Box>
        <Box>
          <Card sx={{ p: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: newBlack_semiBold.style.fontFamily,
                  fontWeight: 500,
                  fontSize: 25,
                  color: COLORS.BLACK,
                }}
              >
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
                    textTransform: "none",
                  }}
                  endIcon={<Add />}
                >
                  Add Innovation
                </Button>
              </Link>
            </Stack>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {INNOVATION_HEADER.map((val, i) => (
                      <TableCell key={i}>{val}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {innovationData?.map((val, i) => (
                    <TableRow key={i}>
                      <TableCell>{val.id}</TableCell>
                      <TableCell>
                        <Link
                          href={`/dashboard/institution/innovation-submission/innovation-details/${val.id}`}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              color: COLORS.PRIMARY_NAVY,
                              fontWeight: 500,
                              fontSize: 15,
                              textDecoration: "underline",
                            }}
                          >
                            {val.title}
                          </Typography>
                        </Link>
                      </TableCell>
                      <TableCell>
                        {val.team.title} <br />({val.team.teamCode})
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={val.status}
                          sx={{
                            backgroundColor:
                              val.status === USER_STATUS.PENDING.toUpperCase()
                                ? COLORS.ACCENT_TAN
                                : "red",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default InnovationList;
