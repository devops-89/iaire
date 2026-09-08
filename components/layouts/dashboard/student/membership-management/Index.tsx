"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { roboto, montserrat } from "@/utils/fonts";
import { COLORS, USER_ROLES, USER_STATUS } from "@/utils/enum";
import { useSignup } from "@/store/useSignup";
import { useGetUserDetails } from "@/hooks/common/getUserDetails";
import { useGetAllInnovation } from "@/hooks/school/useInnovation";
import { useGetAllResearch } from "@/hooks/school/useResearch";
import { useGetPlans } from "@/hooks/common/useGetPlans";
import moment from "moment";
import { goldGradient } from "./styles";
import DuePayment from "./Due-Payment";
import UpgradeMembership from "./Upgrade-Membership";

const MembershipManagement = () => {
  const { data: studentData } = useSignup();
  const { loading: userLoading } = useGetUserDetails();

  const { innovationData, fetchInnovationList } = useGetAllInnovation();
  const { researchData, fetchResearchData } = useGetAllResearch();
  const { planData, planLoading } = useGetPlans({ role: USER_ROLES.STUDENT });

  useEffect(() => {
    fetchInnovationList();
    fetchResearchData();
  }, []);

  const numInnovations = innovationData?.length || 0;
  const numResearch = researchData?.length || 0;

  const isMember =
    ((studentData?.payments?.length ?? 0) > 0 &&
      studentData?.payments?.some(
        (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
      )) ??
    false;

  const activeMembership = studentData?.payments?.find(
    (v: any) => v.membership?.status === USER_STATUS.ACTIVE.toUpperCase(),
  );

  let currentTier = "Student Member";
  let nextTier = "Student Innovation Scholar";
  let nextTierProgress = 0;

  // Requirements Met Flags
  const reqTrainingCompleted = true; // Mocked as completed for active student
  const reqHasInnovation = numInnovations >= 1;
  const reqHasResearch = numResearch >= 1;
  const reqScholarMet = reqHasInnovation || reqHasResearch;

  const reqFellowMentor = numInnovations >= 2 || numResearch >= 2;
  const reqFellowTeamMentored = numInnovations >= 3 || numResearch >= 3;

  if (reqScholarMet) {
    if (reqFellowMentor && reqFellowTeamMentored) {
      currentTier = "Fellow of Innovation or Research";
      nextTier = "Fellow Student of Innovation or Research";
      nextTierProgress = 60; // Progress towards highest student fellowship
    } else {
      currentTier = "Student Innovation Scholar";
      nextTier = "Fellow of Innovation or Research";
      let progress = 20; // completed scholar level
      if (reqFellowMentor) progress += 40;
      if (reqFellowTeamMentored) progress += 40;
      nextTierProgress = progress;
    }
  } else {
    currentTier = "Student Member";
    nextTier = "Student Innovation Scholar";
    // scholar needs training + (1 innovation OR 1 research)
    let progress = 50; // training is done
    if (reqHasInnovation || reqHasResearch) {
      progress += 50;
    }
    nextTierProgress = progress;
  }

  // Certificate Download Generator via Canvas API
  const handleDownloadCertificate = () => {
    // 1. Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1130; // standard A4 certificate ratio
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 2. Draw background
    ctx.fillStyle = "#FAF8F5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Draw outer elegant border
    ctx.lineWidth = 16;
    ctx.strokeStyle = "#1A2847"; // Navy
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // 4. Draw inner gold border
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#DFBA73"; // Gold
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

    // 5. Draw decorative corner brackets in gold
    const drawCorner = (x: number, y: number, xFact: number, yFact: number) => {
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#C5A059";
      ctx.moveTo(x + 50 * xFact, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + 50 * yFact);
      ctx.stroke();
    };
    drawCorner(55, 55, 1, 1);
    drawCorner(canvas.width - 55, 55, -1, 1);
    drawCorner(55, canvas.height - 55, 1, -1);
    drawCorner(canvas.width - 55, canvas.height - 55, -1, -1);

    // 6. Draw certificate titles
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Academy header
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText(
      "INTERNATIONAL ACADEMY FOR INNOVATION, RESEARCH AND ENTREPRENEURSHIP",
      canvas.width / 2,
      180,
    );

    // Small divider line
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 150, 220);
    ctx.lineTo(canvas.width / 2 + 150, 220);
    ctx.stroke();

    // Main Certificate Header
    ctx.fillStyle = "#C5A059";
    ctx.font = "italic 48px Georgia, serif";
    ctx.fillText("Certificate of Student Membership", canvas.width / 2, 280);

    // Certificate Body text
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "20px Georgia, serif";
    ctx.fillText("This is to officially certify that", canvas.width / 2, 380);

    // Student Name
    const studentName = studentData
      ? `${studentData.firstName} ${studentData.lastName}`
      : "IAIRE Student";
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 56px sans-serif";
    ctx.fillText(studentName.toUpperCase(), canvas.width / 2, 470);

    // Name underlining
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#C5A059";
    ctx.moveTo(canvas.width / 2 - 250, 520);
    ctx.lineTo(canvas.width / 2 + 250, 520);
    ctx.stroke();

    // Standing text
    ctx.fillStyle = "#4A4A4A";
    ctx.font = "22px Georgia, serif";
    ctx.fillText(
      "is hereby admitted as a registered Student Member in good standing of the Academy,",
      canvas.width / 2,
      580,
    );
    ctx.fillText(
      "entitled to all rights, benefits, and privileges pertaining thereto.",
      canvas.width / 2,
      620,
    );

    // Membership code and Date
    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#6b7280";
    const membershipCode =
      activeMembership?.membership?.membershipCode || "N/A";
    const issueDate = activeMembership?.createdAt
      ? moment(activeMembership.createdAt).format("DD-MMMM-YYYY")
      : moment().format("DD-MMMM-YYYY");

    ctx.fillText(`MEMBERSHIP ID: ${membershipCode}`, canvas.width / 2, 710);
    ctx.fillText(`DATE OF ISSUANCE: ${issueDate}`, canvas.width / 2, 750);

    // 7. Draw Signatures
    ctx.fillStyle = "#1A2847";
    ctx.font = "18px sans-serif";

    // Left signature line
    ctx.fillText("Dr. Arthur Pendelton", canvas.width / 2 - 300, 880);
    ctx.fillText("President, IAIRE Board", canvas.width / 2 - 300, 915);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#9ca3af";
    ctx.moveTo(canvas.width / 2 - 420, 850);
    ctx.lineTo(canvas.width / 2 - 180, 850);
    ctx.stroke();

    // Right signature line
    ctx.fillText("Margaret Vance", canvas.width / 2 + 300, 880);
    ctx.fillText(
      "Registrar, IAIRE Academic Council",
      canvas.width / 2 + 300,
      915,
    );
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 180, 850);
    ctx.lineTo(canvas.width / 2 + 420, 850);
    ctx.stroke();

    // 8. Draw gold crest/seal in the bottom center
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 900, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#DFBA73";
    ctx.fill();
    ctx.strokeStyle = "#C5A059";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Star icon inside crest
    ctx.fillStyle = "#1A2847";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("★", canvas.width / 2, 895);
    ctx.font = "bold 11px sans-serif";
    ctx.fillText("SEAL", canvas.width / 2, 918);

    // 9. Trigger download
    const link = document.createElement("a");
    link.download = `IAIRE_Membership_Certificate_${studentName.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: roboto.style.fontFamily,
            color: COLORS.PRIMARY_NAVY,
            mb: 1,
          }}
        >
          Membership Management
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: montserrat.style.fontFamily,
          }}
        >
          View your current plan, billing history, and upgrade options.
        </Typography>
      </Box>

      <DuePayment
        isMember={isMember}
        activeMembership={activeMembership}
        studentData={studentData}
        planData={planData}
        planLoading={planLoading}
        handleDownloadCertificate={handleDownloadCertificate}
      />
      <UpgradeMembership
        currentTier={currentTier}
        nextTier={nextTier}
        nextTierProgress={nextTierProgress}
        numInnovations={numInnovations}
        numResearch={numResearch}
        reqScholarMet={reqScholarMet}
        reqFellowMentor={reqFellowMentor}
      />
    </Box>
  );
};

export default MembershipManagement;
