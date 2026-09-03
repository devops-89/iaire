"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import { useGetTrainingDetails } from "@/hooks/mentor/useNominateTeacher";
import { COLORS } from "@/utils/enum";
import { newBlack_medium, roboto } from "@/utils/fonts";
import moment from "moment";
import Breadcrumb from "@/components/widgets/Breadcrumb";
import BeamButton from "@/components/widgets/BeamButton";

const TrainingDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const { data: trainingDetail, loading } = useGetTrainingDetails(id);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!trainingDetail) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography>No details found.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Breadcrumb 
          title="Training Details" 
          data={[
            { title: "Dashboard", href: "/dashboard/institution" },
            { title: "Training Management", href: "/dashboard/institution/training-management" },
            { title: "Details", href: "#" }
          ]}
        />
        <BeamButton
          label="Back"
          icon={<ArrowBack fontSize="small" />}
          handlePrimaryAction={() => router.back()}
          styles={{
            backgroundColor: COLORS.WHITE,
            color: COLORS.PRIMARY_NAVY,
            border: `1px solid ${COLORS.PRIMARY_NAVY}`,
            "&:hover": {
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
            },
          }}
        />
      </Stack>

      <Card sx={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 1,
                }}
              >
                Teacher Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1.5}>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Name:</strong> {trainingDetail.teacher?.fullName || "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Email:</strong> {trainingDetail.teacher?.email || "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Phone:</strong> {trainingDetail.teacher?.phone || "N/A"}
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: newBlack_medium.style.fontFamily,
                  color: COLORS.PRIMARY_NAVY,
                  mb: 1,
                }}
              >
                Training Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1.5}>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Type:</strong> {trainingDetail.training?.type || "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Mode:</strong> {trainingDetail.training?.mode || "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Start Date:</strong>{" "}
                  {trainingDetail.training?.batch?.startDate
                    ? moment(trainingDetail.training.batch.startDate).format(
                        "YYYY, MMM DD",
                      )
                    : "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>End Date:</strong>{" "}
                  {trainingDetail.training?.batch?.endDate
                    ? moment(trainingDetail.training.batch.endDate).format(
                        "YYYY, MMM DD",
                      )
                    : "N/A"}
                </Typography>
                <Typography sx={{ fontFamily: roboto.style.fontFamily }}>
                  <strong>Status:</strong>{" "}
                  <Chip
                    label={trainingDetail.status?.replace(/_/g, " ")}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Typography>
              </Stack>
            </Grid>

            {trainingDetail.answers && trainingDetail.answers.length > 0 && (
              <Grid size={{ xs: 12 }}>
                <Typography
                  sx={{
                    fontFamily: newBlack_medium.style.fontFamily,
                    color: COLORS.PRIMARY_NAVY,
                    mb: 1,
                    mt: 2,
                  }}
                >
                  Answers
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={2}>
                  {trainingDetail.answers.map((answer: any, index: number) => (
                    <Box key={index}>
                      <Typography
                        sx={{
                          fontFamily: newBlack_medium.style.fontFamily,
                          fontSize: "14px",
                        }}
                      >
                        Q: {answer.question?.question || "Question"}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "14px",
                          color: "#555",
                          mt: 0.5,
                        }}
                      >
                        A: {answer.answer}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TrainingDetails;
