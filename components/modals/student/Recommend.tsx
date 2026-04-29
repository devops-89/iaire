import { GENDER } from "@/utils/constant";
import { COLORS, GENDER_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Recommend = ({ studentData }: { studentData: any }) => {
  const gender = studentData.gender;

  const title =
    gender === GENDER_TYPE.MALE
      ? `Nominate ${studentData.name} For Head Boy`
      : gender === GENDER_TYPE.FEMALE
        ? `Nominate ${studentData.name} For Head Girl`
        : `Nominate ${studentData.name} For Head Girl/Boy`;

  return (
    <Box>
      <Typography
        sx={{ fontSize: 20, fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
      >
        {title}{" "}
      </Typography>
      <TextField
        multiline
        rows={5}
        placeholder="Write your reason here..."
        fullWidth
        sx={{ mt: 2 }}
        label="Message"
      />
    </Box>
  );
};

export default Recommend;
