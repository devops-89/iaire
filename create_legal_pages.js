const fs = require('fs');
const path = require('path');

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const legalLayoutContent = `
"use client";

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface LegalLayoutProps {
  title: string;
}

const LegalLayout = ({ title }: LegalLayoutProps) => {
  return (
    <Box sx={{ pt: { xs: "120px", md: "160px" }, pb: { xs: 8, md: 12 }, minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography
            component="h1"
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 900,
              color: "#0B1727",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </Typography>
          
          <Box sx={{ p: 4, borderRadius: "24px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <Typography
              sx={{
                fontFamily: inter.style.fontFamily,
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              This is a placeholder for the {title} content. 
              The actual legal documentation should be inserted here.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LegalLayout;
`;

ensureDir(path.join(process.cwd(), 'components/layouts/legal'));
fs.writeFileSync(path.join(process.cwd(), 'components/layouts/legal/LegalLayout.tsx'), legalLayoutContent.trim());

const createPage = (route, title) => {
  const dirPath = path.join(process.cwd(), 'app', route);
  ensureDir(dirPath);
  
  const pageContent = `
import LegalLayout from "@/components/layouts/legal/LegalLayout";
import { Box } from "@mui/material";

const ${title.replace(/\s+/g, '')}Page = () => {
  return (
    <Box>
      <LegalLayout title="${title}" />
    </Box>
  );
};

export default ${title.replace(/\s+/g, '')}Page;
  `.trim();

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
};

createPage('privacy', 'Privacy Policy');
createPage('terms', 'Terms of Service');
createPage('cookies', 'Cookie Settings');

console.log('Legal pages created successfully!');
