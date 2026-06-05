import UpdateProfileLayout from "@/components/layouts/signup/update-profile/Update-profile-layout";
import { Box } from "@mui/material";
import React, { Suspense } from "react";

const UpdateProfile = () => {
  return (
    <Box>
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateProfileLayout />
      </Suspense>
    </Box>
  );
};

export default UpdateProfile;
