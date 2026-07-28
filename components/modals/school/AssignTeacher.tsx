"use client";

import { useAssignTeachersToBatch } from "@/hooks/mentor/getBatches";
import { useGetAllUser } from "@/hooks/common/useGetAllUser";
import { APPROVAL_STATUS, COLORS, USER_ROLES } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { BATCH_DETAILS_PROPS, TEACHER_REPONSE_PROPS } from "@/utils/type";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import BeamButton from "@/components/widgets/BeamButton";

const AssignTeacher = ({ batch }: { batch: BATCH_DETAILS_PROPS }) => {
  const [selectedTeachers, setSelectedTeachers] = useState<
    TEACHER_REPONSE_PROPS[]
  >([]);

  const { userData, loading, fetchUserData } = useGetAllUser();
  const { assignLoading, assignTeachersToBatch } = useAssignTeachersToBatch();

  useEffect(() => {
    fetchUserData({
      page: 1,
      limit: 100,
      role: USER_ROLES.TEACHER,
      approvalStatus: APPROVAL_STATUS.APPROVED,
    });
  }, []);

  const handleSubmit = async () => {
    if (!selectedTeachers.length) return;

    await assignTeachersToBatch({
      batchId: batch.id,
      participantIds: selectedTeachers.map((teacher) => teacher.id),
    });
  };

  return (
    <Box sx={{ width: 600, maxWidth: "100%" }}>
      <Typography
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontSize: 25,
          fontWeight: 500,
          color: COLORS.BLACK,
        }}
      >
        Assign Teacher
      </Typography>

      <Stack spacing={3} sx={{ mt: 4 }}>
        <TextField
          label="Batch"
          value={batch.name || `Batch ${batch.id}`}
          sx={TEXTFIELD_STYLE_VALIDATION}
          disabled
          fullWidth
        />

        <Autocomplete
          multiple
          options={userData}
          loading={loading}
          value={selectedTeachers}
          getOptionLabel={(option: TEACHER_REPONSE_PROPS) =>
            `${option.firstName || ""} ${option.lastName || ""}`.trim() ||
            option.email ||
            "Teacher"
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(event, value) => setSelectedTeachers(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Teachers"
              sx={TEXTFIELD_STYLE_VALIDATION}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          renderOption={(props, option) => (
            <Box component="li" {...props} key={option.id}>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  {`${option.firstName || ""} ${option.lastName || ""}`.trim()}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#666" }}>
                  {option.email}
                </Typography>
              </Box>
            </Box>
          )}
        />

        <BeamButton
          sx={{
            border: "1px solid" + COLORS.PRIMARY_NAVY,
            backgroundColor: COLORS.PRIMARY_NAVY,
            color: COLORS.WHITE,
            width: 160,
            height: 40,
            borderRadius: 1,
            textTransform: "none",
            fontFamily: roboto.style.fontFamily,
            fontSize: 16,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
            },
          }}
          disabled={!selectedTeachers.length || assignLoading}
          onClick={handleSubmit}
        >
          {assignLoading ? "Assigning..." : "Assign"}
        </BeamButton>
      </Stack>
    </Box>
  );
};

export default AssignTeacher;
