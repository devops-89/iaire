import { Box, Card, CardContent, Grid, Typography, Button, Stack } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { Download, LibraryBooks, PlayCircle, Description } from "@mui/icons-material";

interface Resource {
  title: string;
  description: string;
  type: "Playbook" | "Module" | "Template";
  category: string;
}

const resources: Resource[] = [
  { title: "Innovation Guide 2024", description: "Comprehensive guide to starting institutional innovations.", type: "Playbook", category: "Innovation" },
  { title: "Mentorship Framework", description: "Standard operating procedures for student mentorship.", type: "Module", category: "Mentorship" },
  { title: "Research Proposal Template", description: "Ready-to-use template for student research submissions.", type: "Template", category: "Research" },
  { title: "Startup Pitch Deck V2", description: "Premium pitch deck template for student startups.", type: "Template", category: "Startup" },
];

const ResourceAccess = ({ role }: { role: string }) => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontFamily: roboto.style.fontFamily, fontWeight: 700, color: COLORS.PRIMARY_NAVY, mb: 1 }}>
          Resource Library
        </Typography>
        <Typography sx={{ fontFamily: montserrat.style.fontFamily, color: "rgba(0,0,0,0.6)" }}>
          Access exclusive {role.toLowerCase()} playbooks, modules, and templates.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {resources.map((res, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ borderRadius: "24px", height: "100%", transition: "transform 0.2s", "&:hover": { transform: "translateY(-5px)" }, boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}>
              <CardContent sx={{ h: "100%", display: "flex", flexDirection: "column" }}>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <Box sx={{ p: 1, borderRadius: "10px", bgcolor: res.type === "Playbook" ? "#EFF6FF" : res.type === "Module" ? "#ECFDF5" : "#FFF7ED", color: res.type === "Playbook" ? "#3B82F6" : res.type === "Module" ? "#10B981" : "#F59E0B" }}>
                    {res.type === "Playbook" ? <LibraryBooks /> : res.type === "Module" ? <PlayCircle /> : <Description />}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 700, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>{res.type}</Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 700, color: COLORS.PRIMARY_NAVY, fontFamily: roboto.style.fontFamily }}>{res.title}</Typography>
                  </Box>
                </Stack>
                <Typography sx={{ fontSize: 14, color: "rgba(0,0,0,0.6)", mb: 3, flexGrow: 1, fontFamily: montserrat.style.fontFamily }}>
                  {res.description}
                </Typography>
                <Button
                  fullWidth
                  startIcon={<Download />}
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(0,0,0,0.1)",
                    color: COLORS.PRIMARY_NAVY,
                    borderRadius: "10px",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { borderColor: COLORS.ACCENT_TAN, bgcolor: "rgba(209, 160, 84, 0.05)" }
                  }}
                >
                  Download Resource
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResourceAccess;
