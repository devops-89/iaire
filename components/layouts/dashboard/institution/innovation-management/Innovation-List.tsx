import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { INNOVATION_HEADER } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_semiBold } from "@/utils/fonts";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

const InnovationList = () => {
  const { loading, fetchInnovationList, innovationData } =
    useGetAllInnovation();

  useEffect(() => {
    fetchInnovationList();
  }, []);
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
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default InnovationList;
