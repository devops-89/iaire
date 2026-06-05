import React from "react";
import { Box, Button, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { InsertDriveFile, Download } from "@mui/icons-material";
import { roboto, montserrat } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { INNOVATION_RESPONSE_DATA_PROPS } from "@/utils/type";

interface DocumentsCardProps {
  innovationDetails: INNOVATION_RESPONSE_DATA_PROPS;
}

const DocumentsCard = ({ innovationDetails }: DocumentsCardProps) => {
  if (!innovationDetails.attomeyFinalTemplate && !innovationDetails.attorneyTemplateDownloadUrl) {
    return null;
  }

  return (
    <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          className={montserrat.className}
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            mb: 2,
          }}
        >
          Submitted Documents
        </Typography>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: "12px",
              bgcolor: "rgba(1, 90, 80, 0.04)",
              border: "1px solid rgba(1, 90, 80, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "8px",
                  bgcolor: "rgba(1, 90, 80, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.PRIMARY_NAVY,
                }}
              >
                <InsertDriveFile />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: roboto.style.fontFamily,
                    color: COLORS.PRIMARY_NAVY,
                  }}
                >
                  Submission Template File
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Final Attorney Template
                </Typography>
              </Box>
            </Stack>
            <Button
              startIcon={<Download />}
              variant="contained"
              href={
                innovationDetails.attorneyTemplateDownloadUrl ||
                innovationDetails.attomeyFinalTemplate ||
                "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: COLORS.PRIMARY_NAVY,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DocumentsCard;
