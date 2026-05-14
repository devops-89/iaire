import {
  Autocomplete,
  createFilterOptions,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import { TEXTFIELD_STYLE_VALIDATION } from "@/utils/style";
import { BOARDDATAPROPS } from "@/utils/type";

interface UsFormProps {
  formik: any;
  boardData: BOARDDATAPROPS[];
  boardLoading: boolean;
}
type boardOptionType = BOARDDATAPROPS | { inputValue: string; name: string };
const filter = createFilterOptions<boardOptionType>();

const Usform = ({ formik, boardData, boardLoading }: UsFormProps) => {
  return (
    <>
      <Grid size={{ xs: 12, md: 12 }}>
        <TextField
          fullWidth
          name="isd"
          label="Enter ISD"
          placeholder="Independent School District"
          value={formik.values.isd || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.isd && Boolean(formik.errors.isd)}
          helperText={formik.touched.isd && formik.errors.isd}
          sx={TEXTFIELD_STYLE_VALIDATION}
        />

        {/* <Autocomplete
          loading={boardLoading}
          options={boardData as boardOptionType[]}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if ("inputValue" in option && option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          sx={TEXTFIELD_STYLE_VALIDATION}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.name,
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                name: `${inputValue}`,
                id: 0,
                code: "",
                countryId: 0,
                country: { countryId: 0, name: "", code: "" },
              });
            }
            return filtered;
          }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter ISD"
              error={formik.touched.isd && Boolean(formik.errors.isd)}
              helperText={formik.touched.isd && formik.errors.isd}
            />
          )}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              formik.setFieldValue("isd", newValue);
            } else if (
              newValue &&
              "inputValue" in newValue &&
              newValue.inputValue
            ) {
              formik.setFieldValue("isd", newValue.inputValue);
            } else {
              formik.setFieldValue("isd", newValue?.name || "");
            }
          }}
        /> */}
      </Grid>
    </>
  );
};

export default Usform;
