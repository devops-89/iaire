"use client";
import React from "react";
import { Box, Typography, Paper, LinearProgress, Stack, Tooltip, IconButton, Button } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { MEMBERSHIP_LEVEL } from "@/utils/type";
import { InfoOutlined, Stars, Verified, WorkspacePremium, Gavel } from "@mui/icons-material";

interface MembershipProgressProps {
  currentLevel: MEMBERSHIP_LEVEL;
  teachers: number;
  publications: number;
  approved: boolean;
}

const MembershipProgress: React.FC<MembershipProgressProps> = ({
  currentLevel,
  teachers,
  publications,
  approved,
}) => {
  const tiers = [
    { 
        level: MEMBERSHIP_LEVEL.INSTITUTIONAL, 
        icon: <Verified fontSize="small" />, 
        color: "#10B981" 
    },
    { 
        level: MEMBERSHIP_LEVEL.ACCREDITED, 
        icon: <WorkspacePremium fontSize="small" />, 
        color: COLORS.ACCENT_TAN,
        reqs: { teachers: 2 } 
    },
    { 
        level: MEMBERSHIP_LEVEL.CHARTERED, 
        icon: <Stars fontSize="small" />, 
        color: "#3B82F6",
        reqs: { teachers: 2, publications: 5 } 
    },
    { 
        level: MEMBERSHIP_LEVEL.FELLOW, 
        icon: <Gavel fontSize="small" />, 
        color: COLORS.PRIMARY_NAVY,
        reqs: { teachers: 2, publications: 10, approved: true } 
    },
  ];

  const currentIdx = tiers.findIndex(t => t.level === currentLevel);
  const nextTier = tiers[currentIdx + 1];

  let progress = 100;
  let remainingText = "Top Tier Achieved";

  if (nextTier) {
    const reqs = nextTier.reqs!;
    let completed = 0;
    let total = 0;

    if (reqs.teachers !== undefined) {
      total++;
      if (teachers >= reqs.teachers) completed++;
    }
    if (reqs.publications !== undefined) {
      total++;
      if (publications >= reqs.publications) completed++;
    }
    if (reqs.approved !== undefined) {
      total++;
      if (approved) completed++;
    }

    progress = (completed / total) * 100;
    remainingText = `${completed}/${total} Requirements met for ${nextTier.level}`;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "24px",
        border: "1px solid #f0f0f0",
        backgroundColor: COLORS.WHITE,
        mb: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              color: COLORS.PRIMARY_NAVY,
              fontSize: "18px",
            }}
          >
            Membership Advancement
          </Typography>
          <Tooltip title="Advance your institution by meeting certification and research milestones.">
            <IconButton size="small">
              <InfoOutlined fontSize="small" sx={{ color: "rgba(0,0,0,0.3)" }} />
            </IconButton>
          </Tooltip>
        </Stack>
        <Chip
            icon={tiers[currentIdx]?.icon}
            label={currentLevel}
            sx={{
                bgcolor: `${tiers[currentIdx]?.color}11`,
                color: tiers[currentIdx]?.color,
                fontWeight: 700,
                borderRadius: "10px",
                border: `1px solid ${tiers[currentIdx]?.color}33`,
                fontFamily: montserrat.style.fontFamily,
            }}
        />
      </Box>

      <Box sx={{ mb: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(0,0,0,0.5)",
              fontFamily: montserrat.style.fontFamily,
            }}
          >
            {remainingText}
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.ACCENT_TAN,
              fontFamily: roboto.style.fontFamily,
            }}
          >
            {Math.round(progress)}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            bgcolor: "rgba(209, 160, 84, 0.1)",
            "& .MuiLinearProgress-bar": {
              bgcolor: COLORS.ACCENT_TAN,
              borderRadius: 5,
            },
          }}
        />
      </Box>

      {nextTier && (
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {nextTier.reqs?.teachers !== undefined && (
                <Box sx={{ textAlign: 'center', flex: 1, p: 1.5, bgcolor: '#fcfcfc', borderRadius: '12px', border: '1px solid #f5f5f5' }}>
                    <Typography sx={{ fontSize: '10px', color: 'gray', textTransform: 'uppercase', fontWeight: 700 }}>Teachers</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 800, color: teachers >= nextTier.reqs.teachers ? '#10B981' : COLORS.PRIMARY_NAVY }}>
                        {teachers}/{nextTier.reqs.teachers}
                    </Typography>
                </Box>
            )}
            {nextTier.reqs?.publications !== undefined && (
                <Box sx={{ textAlign: 'center', flex: 1, p: 1.5, bgcolor: '#fcfcfc', borderRadius: '12px', border: '1px solid #f5f5f5' }}>
                    <Typography sx={{ fontSize: '10px', color: 'gray', textTransform: 'uppercase', fontWeight: 700 }}>Research</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 800, color: publications >= nextTier.reqs.publications ? '#10B981' : COLORS.PRIMARY_NAVY }}>
                        {publications}/{nextTier.reqs.publications}
                    </Typography>
                </Box>
            )}
            {nextTier.reqs?.approved !== undefined && (
                <Box sx={{ textAlign: 'center', flex: 1, p: 1.5, bgcolor: '#fcfcfc', borderRadius: '12px', border: '1px solid #f5f5f5' }}>
                    <Typography sx={{ fontSize: '10px', color: 'gray', textTransform: 'uppercase', fontWeight: 700 }}>Approval</Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 800, color: approved ? '#10B981' : '#EF4444' }}>
                        {approved ? 'Granted' : 'Pending'}
                    </Typography>
                </Box>
            )}
        </Stack>
      )}

      {nextTier && progress === 100 && (
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => alert(`Application for ${nextTier.level} submitted!`)}
            sx={{
              bgcolor: nextTier.color,
              color: COLORS.WHITE,
              fontWeight: 700,
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontFamily: montserrat.style.fontFamily,
              "&:hover": {
                bgcolor: nextTier.color,
                opacity: 0.9,
                transform: "translateY(-2px)",
              },
            }}
          >
            Apply for {nextTier.level}
          </Button>
        </Box>
      )}
    </Paper>
  );
};

const Chip = ({ label, icon, sx }: any) => (
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        px: 2, 
        py: 0.8, 
        ...sx 
    }}>
        {icon}
        <Typography sx={{ fontSize: '11px', fontWeight: 700 }}>{label}</Typography>
    </Box>
);

export default MembershipProgress;
