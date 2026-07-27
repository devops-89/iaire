"use client";

import React from "react";
import { Box, Container, Stack } from "@mui/material";
import PolicyHeader from "./privacy/PolicyHeader";
import PolicySectionCard from "./privacy/PolicySection";
import ConsentBlock from "./privacy/ConsentBlock";
import { SECTIONS } from "./privacy/data";

const PrivacyPolicyLayout = () => (
  <Box sx={{ minHeight: "100vh", backgroundColor: "#F8F9FC" }}>
    {/* Full-width dark hero */}
    <PolicyHeader />

    {/* Sections */}
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Stack spacing={2}>
          {SECTIONS.map((section) => (
            <PolicySectionCard key={section.id} section={section} />
          ))}
        </Stack>

        <ConsentBlock />
      </Container>
    </Box>
  </Box>
);

export default PrivacyPolicyLayout;
