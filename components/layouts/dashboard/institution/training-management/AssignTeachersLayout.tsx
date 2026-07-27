"use client";

import moment from "moment";
import { useState } from "react";
import InstitutionDashboardLayout from "../Index";

import AssignTeacher from "@/components/modals/school/AssignTeacher";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import { useBatches } from "@/hooks/mentor/getBatches";
import { useModal } from "@/store/useModal";

import { CATEGORY, COLORS, USER_ROLES } from "@/utils/enum";
import { aloeveraDisplay_medium, newBlack_medium } from "@/utils/fonts";
import { BATCH_DETAILS_PROPS } from "@/utils/type";

import {
  Box,
  Card,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { Atom } from "react-loading-indicators";

const ASSIGN_TEACHER_TABLE_HEADER = [
  "Batch ID",
  "Batch Name",
  "Category",
  "Mode",
  "Start Date",
  "End Date",
  "Action",
];

const ASSIGN_TEACHER_CATEGORY_TABS = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Innovation",
    value: CATEGORY.INNOVATION,
  },
  {
    label: "Research",
    value: CATEGORY.RESEARCH,
  },
  {
    label: "Entrepreneurship",
    value: CATEGORY.ENTREPRENEURSHIP,
  },
];

const AssignTeachersLayout = () => {
  const [category, setCategory] = useState("ALL");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedBatch, setSelectedBatch] =
    useState<BATCH_DETAILS_PROPS | null>(null);
  const { showModal } = useModal();

  const apiCategory = category === "ALL" ? "" : category;
  const { batchData, batchLoading } = useBatches(apiCategory);
  const open = Boolean(anchorEl);

  const visibleBatchData = batchData?.filter((batch: any) => {
    const lastVisibleDate = moment(batch.startDate).subtract(7, "days");
    return moment().isSameOrBefore(lastVisibleDate, "day");
  });

  const tableCellSx = {
    fontSize: 13,
    fontFamily: newBlack_medium.style.fontFamily,
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    batch: BATCH_DETAILS_PROPS,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedBatch(batch);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAssignTeacher = () => {
    if (selectedBatch) {
      showModal(<AssignTeacher batch={selectedBatch} />);
    }
    handleMenuClose();
  };

  return (
    <InstitutionDashboardLayout>
      <Box>
        <Card sx={{ p: 2 }}>
          <Breadcrumb
            title="Assign Teachers"
            data={[
              {
                title: "Dashboard",
                href: "/dashboard",
              },
              {
                title: "Training Management",
                href: "/dashboard/institution/training-management",
              },
              {
                title: "Assign Teachers",
                href: "/dashboard/institution/training-management/assign-teachers",
              },
            ]}
          />

          <Tabs
            sx={{ mt: 2 }}
            value={category}
            onChange={(_e, value) => setCategory(value)}
          >
            {ASSIGN_TEACHER_CATEGORY_TABS.map((tab) => (
              <Tab label={tab.label} value={tab.value} key={tab.value} />
            ))}
          </Tabs>

          <Box sx={{ mt: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {ASSIGN_TEACHER_TABLE_HEADER.map((item, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          fontFamily: aloeveraDisplay_medium.style.fontFamily,
                          fontSize: 14,
                        }}
                      >
                        {item}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {batchLoading ? (
                    <TableRow>
                      <TableCell
                        colSpan={ASSIGN_TEACHER_TABLE_HEADER.length}
                        align="center"
                      >
                        <Atom color={COLORS.PRIMARY_NAVY} size={"small"} />
                      </TableCell>
                    </TableRow>
                  ) : visibleBatchData?.length > 0 ? (
                    visibleBatchData.map((batch: any) => (
                      <TableRow key={batch.id}>
                        <TableCell sx={tableCellSx}>{batch.id}</TableCell>

                        <TableCell sx={tableCellSx}>
                          {batch.name || "N/A"}
                        </TableCell>

                        <TableCell sx={tableCellSx}>
                          {batch.category || "N/A"}
                        </TableCell>

                        <TableCell sx={tableCellSx}>
                          {batch.mode || "N/A"}
                        </TableCell>

                        <TableCell sx={tableCellSx}>
                          {batch.startDate
                            ? moment(batch.startDate).format("YYYY,MMM DD")
                            : "--"}
                        </TableCell>

                        <TableCell sx={tableCellSx}>
                          {batch.endDate
                            ? moment(batch.endDate).format("YYYY,MMM DD")
                            : "--"}
                        </TableCell>

                        <TableCell>
                          <IconButton
                            onClick={(event) => handleMenuOpen(event, batch)}
                          >
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={ASSIGN_TEACHER_TABLE_HEADER.length}
                        align="center"
                      >
                        No batches found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem
              onClick={handleAssignTeacher}
              sx={{
                fontFamily: newBlack_medium.style.fontFamily,
                fontSize: "13px",
              }}
            >
              Assign Teacher
            </MenuItem>
          </Menu>
        </Card>
      </Box>
    </InstitutionDashboardLayout>
  );
};

export default AssignTeachersLayout;
