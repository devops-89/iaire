"use client";
import { useGetUserDetailsPublic } from "@/hooks/common/getUserDetails";
import { COLORS } from "@/utils/enum";
import { aloeveraDisplay_medium } from "@/utils/fonts";
import { Box, Card, Container, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import FatherInformation from "./Father-Information-Form";
import MotherInformation from "./Mother-Information-form";
import { useFormik } from "formik";
import { updateProfileValidationSchema } from "@/utils/validationSchema";
import { UPDATE_PROFILE_FORM_PROPS, USER_DETAILS_RESPONSE } from "@/utils/type";
import PersonalInformation from "./Personal-Information-Form";
import { useUpdateProfileStudent } from "@/hooks/student/Update-Profile";
import BeamButton from "@/components/widgets/BeamButton";

const UpdateProfileLayout = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("token");

  const { data } = useGetUserDetailsPublic(userId) as {
    data: USER_DETAILS_RESPONSE;
  };

  const { UpdateProfile, loading } = useUpdateProfileStudent();

  const formik = useFormik<UPDATE_PROFILE_FORM_PROPS>({
    initialValues: {
      phone: data?.phone || "",
      countryCode: data?.countryCode || data?.board?.country?.phoneCode || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      password: "",
      confirmPassword: "",
      email: data?.email || "",
      profileImage: null,
      grade: data?.grade || "",
      fatherName: data?.fatherName || "",
      fatherEmail: data?.fatherEmail || "",
      fatherPhone: data?.fatherPhone || "",
      fatherProfession: data?.fatherProfession || "",
      motherName: data?.motherName || "",
      motherEmail: data?.motherEmail || "",
      motherPhone: data?.motherPhone || "",
      motherProfession: data?.motherProfession || "",
      gender: data?.gender || "",
    },
    enableReinitialize: true,
    validationSchema: updateProfileValidationSchema,
    onSubmit: (values) => {
      const { confirmPassword, ...payload } = values;
      UpdateProfile(payload, Number(userId));
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
        backgroundColor: COLORS.PRIMARY_NAVY,
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            boxShadow: "0px 0px 2px 2px #00000020",
            py: 2,
            borderRadius: 2,
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 600,
              fontFamily: aloeveraDisplay_medium.style.fontFamily,
            }}
          >
            Create Your Profile
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <PersonalInformation formik={formik} />

            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 600,
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                my: 2,
              }}
            >
              Father's Information
            </Typography>

            <FatherInformation formik={formik} />

            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 600,
                fontFamily: aloeveraDisplay_medium.style.fontFamily,
                my: 2,
              }}
            >
              Mother's Information
            </Typography>

            <MotherInformation formik={formik} />

            <Box>
              <BeamButton
                sx={{
                  backgroundColor: COLORS.PRIMARY_NAVY,
                  mt: 2,
                  color: "white",
                  fontFamily: aloeveraDisplay_medium.style.fontFamily,
                  fontSize: 16,
                  fontWeight: 500,
                  textTransform: "none",
                  width: 180,
                  borderRadius: 100,
                  p: 1.5,
                  boxShadow: "0px 0px 2px 2px #00000020",
                }}
                type="submit"
              >
                Create Profile
              </BeamButton>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default UpdateProfileLayout;
