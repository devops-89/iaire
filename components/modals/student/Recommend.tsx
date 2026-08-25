import { CATEGORY_TYPES, GENDER } from "@/utils/constant";
import { COLORS, GENDER_TYPE } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Autocomplete, Box, Stack, TextField, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import BeamButton from "@/components/widgets/BeamButton";
import { useRecommendHeadBoyOrGirl } from "@/hooks/school/useRecommend";

const Recommend = ({ studentData }: { studentData: any }) => {
  const gender = studentData.gender;
  const [category, setCategory] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const { loading, recommendHeadBoyOrGirl } = useRecommendHeadBoyOrGirl();

  const title =
    gender === GENDER_TYPE.MALE
      ? `Nominate ${studentData.fullName} For Head Boy`
      : gender === GENDER_TYPE.FEMALE
        ? `Nominate ${studentData.fullName} For Head Girl`
        : `Nominate ${studentData.fullName} For Head Girl/Boy`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !message.trim()) return;
    recommendHeadBoyOrGirl({
      id: studentData.id,
      category: category,
      message,
    });
  };

  return (
    <Box>
      <Typography
        sx={{ fontSize: 20, fontWeight: 700, color: COLORS.PRIMARY_NAVY }}
      >
        {title}{" "}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction={"column"} gap={2} mt={2}>
          <Autocomplete
            options={CATEGORY_TYPES}
            value={category}
            onChange={(_, val) => setCategory(val)}
            renderInput={(params) => (
              <TextField {...params} label="Select Category" required />
            )}
          />
          <TextField
            multiline
            rows={5}
            placeholder="Write your reason here..."
            fullWidth
            sx={{ mt: 2 }}
            label="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <BeamButton
            type="submit"
            disabled={loading || !category || !message.trim()}
            sx={{
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
              width: 200,
              py: 1,
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: COLORS.WHITE }} /> : "Send Nomination"}
          </BeamButton>
        </Stack>
      </form>
    </Box>
  );
};

export default Recommend;
