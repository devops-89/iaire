import { CATEGORY_TYPES, GENDER } from "@/utils/constant";
import { COLORS, GENDER_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Autocomplete, Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Recommend = ({ studentData }: { studentData: any }) => {
  const gender = studentData.gender;

  console.log("student", studentData)

  const title =
    gender === GENDER_TYPE.MALE
      ? `Nominate ${studentData.fullName} For Head Boy`
      : gender === GENDER_TYPE.FEMALE
        ? `Nominate ${studentData.fullName} For Head Girl`
        : `Nominate ${studentData.fullName} For Head Girl/Boy`;

  return (
    <Box>
      <Typography
        sx={{ fontSize: 20, fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
      >
        {title}{" "}
      </Typography>
      <form>
        <Stack direction={"column"} gap={2} mt={2}>
          <Autocomplete options={CATEGORY_TYPES} renderInput={(params) => <TextField {...params} label="Select Category" />} />
          <TextField
            multiline
            rows={5}
            placeholder="Write your reason here..."
            fullWidth
            sx={{ mt: 2 }}
            label="Message"
          />

          <Button sx={{ backgroundColor: COLORS.PRIMARY_NAVY, color: COLORS.WHITE, width: 200, py: 1 }}>Send Nomination</Button>

        </Stack>
      </form>

    </Box>
  );
};

export default Recommend;
