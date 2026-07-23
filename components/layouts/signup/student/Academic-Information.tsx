import { useInstitutionByBoard } from "@/hooks/common/getInstitutionByBoard";
import { useBoardByCountry } from "@/hooks/common/useGetBoardByCountry";
import { useGetCountries } from "@/hooks/common/useGetCountry";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import {
  BOARDDATAPROPS,
  COUNTRYDATAPROPS,
  INSTITUTION_BY_BOARD_PROPS,
  STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS,
} from "@/utils/type";
import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { FormikProps } from "formik";
import React, { SyntheticEvent, useState } from "react";

interface ACADEMIC_PROPS {
  formik: FormikProps<STUDENT_SELF_REGISTRATION_RESPONSE_DATA_PROPS>;
}

const AcademicInformation = ({ formik }: ACADEMIC_PROPS) => {
  const { countryData, countryLoading } = useGetCountries();

  console.log("country", countryData);

  const [country, setCountry] = useState<COUNTRYDATAPROPS | null>(null);
  const { boardData, boardLoading } = useBoardByCountry(country);

  const countryChangeHandler = (
    e: SyntheticEvent,
    value: COUNTRYDATAPROPS | null,
  ) => {
    setCountry(value);
    formik.setValues({
      ...formik.values,
      country: value,
    });
  };

  const [board, setBoard] = useState<BOARDDATAPROPS | null>(null);

  const boardChangeHandler = (
    e: SyntheticEvent,
    value: BOARDDATAPROPS | null,
  ) => {
    setBoard(value);
    // console.log("boardData", value);

    formik.setValues({
      ...formik.values,
      board: value,
    });
  };

  const { institutionData, loading: institutionLoading } =
    useInstitutionByBoard({
      country,
      boardId: board?.id?.toString(),
    });

  const [school, setSchool] = useState<INSTITUTION_BY_BOARD_PROPS | null>();

  const institutionChangeHandler = (
    e: SyntheticEvent,
    value: INSTITUTION_BY_BOARD_PROPS | null,
  ) => {
    setSchool(value);
    formik.setValues({
      ...formik.values,
      school: value,
    });
  };

  console.log("institutionData", institutionData);
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: aloeveraDisplay_medium.style.fontFamily,
          fontSize: 25,
          my: 2,
        }}
      >
        Academic Information
      </Typography>

      <Grid container spacing={4}>
        <Grid size={6}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                {...params}
                label="Please Select Country"
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={
                  formik.touched.country && (formik.errors.country as string)
                }
              />
            )}
            options={countryData}
            renderOption={(props, option) => (
              <Box component={"li"} {...props}>
                <Typography>{option.name}</Typography>
              </Box>
            )}
            getOptionLabel={(option) => option.name}
            loading={countryLoading}
            onChange={countryChangeHandler}
          />
        </Grid>
        <Grid size={6}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                {...params}
                label="Please Select Board"
                error={formik.touched.board && Boolean(formik.errors.board)}
                helperText={
                  formik.touched.board && (formik.errors.board as string)
                }
              />
            )}
            options={boardData || []}
            renderOption={(props, option) => (
              <Box component={"li"} {...props}>
                <Typography>{option.name}</Typography>
              </Box>
            )}
            getOptionLabel={(option) => option.name}
            loading={boardLoading}
            onChange={boardChangeHandler}
            value={board}
          />
        </Grid>
        <Grid size={6}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                {...params}
                label="Please Select Institution"
                error={formik.touched.school && Boolean(formik.errors.school)}
                helperText={
                  formik.touched.school && (formik.errors.school as string)
                }
              />
            )}
            options={institutionData}
            loading={institutionLoading}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <Box component={"li"} {...props}>
                <Typography>{option.name}</Typography>
              </Box>
            )}
            onChange={institutionChangeHandler}
            value={school}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            label="Grade"
            fullWidth
            id="grade"
            onChange={formik.handleChange}
            error={formik.touched.grade && Boolean(formik.errors.grade)}
            helperText={formik.touched.grade && formik.errors.grade}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicInformation;
