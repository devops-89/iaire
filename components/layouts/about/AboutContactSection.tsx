"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack, InputBase, MenuItem, Select } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const contactOptions = [
  {
    title: "For Schools",
    desc: "Partner with IAIRE to establish innovation programs and school Innovation Hubs.",
  },
  {
    title: "For Teachers",
    desc: "Join the Innovation Educator Certification program.",
  },
  {
    title: "For Students",
    desc: "Begin your innovation journey and participate in IAIRE programs.",
  },
  {
    title: "For Partners",
    desc: "Collaborate with IAIRE to expand innovation education globally.",
  },
];

const interestOptions = [
  "School Partnership",
  "Teacher Certification",
  "Student Program",
  "Innovation Hub",
  "Top Young Innovator Competition",
  "IAIRE India Chapter",
  "Research Collaboration",
  "Media / News",
  "General Inquiry",
];

const FormField = ({ label, placeholder, value, onChange, type = "text", required = true }: { label: string; placeholder: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <Stack spacing={1} sx={{ width: "100%" }}>
    <Typography
      sx={{
        fontFamily: inter.style.fontFamily,
        fontSize: "12.5px",
        fontWeight: 700,
        color: "#121214",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
      }}
    >
      {label} {required && <Box component="span" sx={{ color: "#1B365D" }}>*</Box>}
    </Typography>
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E9",
        borderRadius: "12px",
        px: 2,
        py: 1.25,
        transition: "all 0.25s ease",
        "&:focus-within": {
          borderColor: "#1B365D",
          boxShadow: "0 0 10px rgba(248, 93, 0, 0.08)",
        },
      }}
    >
      <InputBase
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        sx={{
          fontFamily: inter.style.fontFamily,
          fontSize: "14px",
          color: "#0B1727",
          "& input::placeholder": {
            color: "rgba(0, 0, 0, 0.35)",
            opacity: 1,
          },
        }}
      />
    </Box>
  </Stack>
);

const AboutContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    country: "",
    email: "",
    phone: "",
    interest: "School Partnership",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormData({
      name: "",
      org: "",
      country: "",
      email: "",
      phone: "",
      interest: "School Partnership",
      message: "",
    });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9F9FB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration flares */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(248, 93, 0, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 8, md: 6 }} alignItems="flex-start">
          
          {/* Left Column: Heading & Stacked Cards */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              
              <Stack spacing={2.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ width: 16, height: 2, backgroundColor: "#1B365D" }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#1B365D",
                      textTransform: "uppercase",
                    }}
                  >
                    CONNECT WITH US
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", md: "40px" },
                    fontWeight: 800,
                    color: "#0B1727",
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Contact IAIRE
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#121214",
                    lineHeight: 1.5,
                  }}
                >
                  Let’s Build the Future of Innovation Education Together
                </Typography>

                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "15px",
                    color: "#5F5F6A",
                    lineHeight: 1.6,
                  }}
                >
                  Whether you are a school, educator, student, parent, policymaker, institution, researcher, or partner organization, IAIRE welcomes collaboration. Reach out to learn how we can support your region.
                </Typography>
              </Stack>

              {/* Vertical Stacked Option Cards */}
              <Stack spacing={2.5}>
                {contactOptions.map((opt, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E5E9",
                      borderRadius: "16px",
                      p: 3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(248, 93, 0, 0.3)",
                        boxShadow: "0 10px 25px rgba(248, 93, 0, 0.05)",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#1B365D",
                        }}
                      >
                        {opt.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: inter.style.fontFamily,
                          fontSize: "13.5px",
                          color: "#5F5F6A",
                          lineHeight: 1.5,
                        }}
                      >
                        {opt.desc}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Premium Contact Form Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E9",
                borderRadius: "24px",
                p: { xs: 4, md: 5 },
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Stack spacing={4}>
                
                {/* Form Fields Grid */}
                <Grid container spacing={3.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormField
                      label="Name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormField
                      label="Organization / School"
                      placeholder="Name of your institution"
                      value={formData.org}
                      onChange={(v) => setFormData({ ...formData, org: v })}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormField
                      label="Country"
                      placeholder="Your country location"
                      value={formData.country}
                      onChange={(v) => setFormData({ ...formData, country: v })}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <FormField
                      label="Email"
                      placeholder="Your email address"
                      type="email"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormField
                      label="Phone"
                      placeholder="Your contact number"
                      type="tel"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                    />
                  </Grid>
                </Grid>

                {/* Interactive Category Selector (I am interested in) */}
                <Stack spacing={1.5}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#121214",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    I am interested in <Box component="span" sx={{ color: "#1B365D" }}>*</Box>
                  </Typography>
                  
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.25,
                    }}
                  >
                    {interestOptions.map((opt, idx) => {
                      const isSelected = formData.interest === opt;
                      return (
                        <Box
                          key={idx}
                          onClick={() => setFormData({ ...formData, interest: opt })}
                          sx={{
                            cursor: "pointer",
                            px: 2,
                            py: 1,
                            borderRadius: "10px",
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13px",
                            fontWeight: 600,
                            border: "1px solid",
                            borderColor: isSelected ? "#1B365D" : "#E5E5E9",
                            backgroundColor: isSelected ? "rgba(248, 93, 0, 0.06)" : "transparent",
                            color: isSelected ? "#1B365D" : "#5F5F6A",
                            transition: "all 0.2s ease",
                            userSelect: "none",
                            "&:hover": {
                              borderColor: "#1B365D",
                              color: "#1B365D",
                            },
                          }}
                        >
                          {opt}
                        </Box>
                      );
                    })}
                  </Box>
                </Stack>

                {/* Message Field */}
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: "#121214",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Message <Box component="span" sx={{ color: "#1B365D" }}>*</Box>
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E5E9",
                      borderRadius: "12px",
                      px: 2,
                      py: 1.5,
                      transition: "all 0.25s ease",
                      "&:focus-within": {
                        borderColor: "#1B365D",
                        boxShadow: "0 0 10px rgba(248, 93, 0, 0.08)",
                      },
                    }}
                  >
                    <InputBase
                      placeholder="Type your message details here..."
                      multiline
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      fullWidth
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: "14px",
                        color: "#0B1727",
                        "& textarea::placeholder": {
                          color: "rgba(0, 0, 0, 0.35)",
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>
                </Stack>

                {/* Submit Action */}
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: 600,
                      textTransform: "none",
                      color: "#FFFFFF",
                      backgroundColor: "#1B365D",
                      borderRadius: "30px",
                      py: 1.75,
                      boxShadow: "0 4px 14px rgba(248, 93, 0, 0.25)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#e05400",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(248, 93, 0, 0.35)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>

              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutContactSection;
