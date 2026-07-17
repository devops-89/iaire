"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Stack, InputBase, MenuItem, Select } from "@mui/material";
import { inter } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const rolesList = [
  "Educator",
  "School Administrator / Principal",
  "Student",
  "Parent",
  "Scientific Board Member / Mentor",
  "Partner / Chapter Organizer",
  "Other",
];

const areasOfInterest = [
  "Membership Enrollment",
  "School Innovation Hubs",
  "Educator Training & Certification",
  "Student Innovation & Research Programs",
  "Scientific Board & Mentor Engagement",
  "Chapter Development & Partnerships",
  "General Inquiries",
];

const FormField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = true,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) => (
  <Stack spacing={0.75} sx={{ width: "100%" }}>
    <Typography
      sx={{
        fontFamily: inter.style.fontFamily,
        fontSize: "12px",
        fontWeight: 700,
        color: "#1B365D",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {label} {required && <span style={{ color: "#E11D48" }}>*</span>}
    </Typography>
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1.5px solid rgba(27, 54, 93, 0.08)",
        borderRadius: "10px",
        px: 2,
        py: 1,
        transition: "all 0.25s ease",
        "&:focus-within": {
          borderColor: "#1B365D",
          boxShadow: "0 0 12px rgba(27, 54, 93, 0.06)",
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
          fontSize: "13.5px",
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

const ContactLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    role: "Educator",
    email: "",
    phone: "",
    country: "",
    interest: "Membership Enrollment",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: "120px", md: "110px" },
        pb: { xs: "60px", md: "50px" },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 54, 93, 0.02) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          
          {/* Left Column: Heading, Info block & Action CTAs */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              
              {/* Badge */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "rgba(27, 54, 93, 0.06)",
                    color: "#1B365D",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Get In Touch
                </Box>
              </Box>

              {/* Title & Copy */}
              <Stack spacing={2}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: { xs: "32px", sm: "38px", md: "42px" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: "#0B1727",
                  }}
                >
                  Contact <span style={{ color: "#1B365D" }}>IAIRE</span>
                </Typography>
                
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  For membership, institutional partnerships, educator certification, student programmes, scientific board engagement, or chapter development, please contact IAIRE.
                </Typography>
              </Stack>

              {/* Details & Support Section */}
              <Stack
                spacing={2.5}
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "rgba(27, 54, 93, 0.02)",
                  border: "1px solid rgba(27, 54, 93, 0.06)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: inter.style.fontFamily,
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#1B365D",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Office Support & Hours
                </Typography>

                <Stack spacing={1.5}>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13px", color: "#4B5563" }}>
                    <strong>General Email:</strong> info@iaire.org
                  </Typography>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13px", color: "#4B5563" }}>
                    <strong>Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM EST
                  </Typography>
                  <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "13px", color: "#4B5563" }}>
                    <strong>Response SLA:</strong> Within 24-48 business hours
                  </Typography>
                </Stack>
              </Stack>

              {/* Auxiliary CTAs */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
                <Link href="/signup/role-selection" style={{ textDecoration: "none", flex: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: COLORS.WHITE,
                      backgroundColor: "#1B365D",
                      borderRadius: "100px",
                      py: 1.2,
                      boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        backgroundColor: "#122744",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                      },
                    }}
                  >
                    Become a Member
                  </Button>
                </Link>

                <Link href="/contact" style={{ textDecoration: "none", flex: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#1B365D",
                      borderColor: "#1B365D",
                      borderWidth: "1.5px",
                      borderRadius: "100px",
                      py: 1.2,
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        borderWidth: "1.5px",
                        borderColor: "#122744",
                        color: "#122744",
                        backgroundColor: "rgba(27, 54, 93, 0.04)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Schedule a Discussion
                  </Button>
                </Link>
              </Stack>

            </Stack>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: "20px",
                border: "1.5px solid rgba(27, 54, 93, 0.08)",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 20px 45px rgba(27, 54, 93, 0.05)",
                boxSizing: "border-box",
              }}
            >
              {submitted ? (
                <Stack spacing={2} alignItems="center" sx={{ py: 6, textAlign: "center" }}>
                  <CheckCircleIcon sx={{ color: "#1B365D", fontSize: 60 }} />
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#0B1727",
                    }}
                  >
                    Inquiry Submitted Successfully
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "13.5px",
                      color: "#4B5563",
                      maxWidth: "380px",
                    }}
                  >
                    Thank you for connecting with IAIRE. Our compliance and partnership team will review your details and reach out within 24-48 business hours.
                  </Typography>
                </Stack>
              ) : (
                <Stack spacing={3}>
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#1B365D",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderBottom: "1.5px solid rgba(27, 54, 93, 0.06)",
                      pb: 1.5,
                    }}
                  >
                    Inquiry Form
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormField
                        label="Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(v) => setFormData((prev) => ({ ...prev, name: v }))}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormField
                        label="Organization / School"
                        placeholder="Excelsior Academy"
                        value={formData.org}
                        onChange={(v) => setFormData((prev) => ({ ...prev, org: v }))}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Stack spacing={0.75}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#1B365D",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Role <span style={{ color: "#E11D48" }}>*</span>
                        </Typography>
                        <Select
                          value={formData.role}
                          onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value as string }))}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13.5px",
                            borderRadius: "10px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "rgba(27, 54, 93, 0.08)",
                              borderWidth: "1.5px",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#1B365D",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#1B365D",
                            },
                          }}
                        >
                          {rolesList.map((role) => (
                            <MenuItem key={role} value={role} sx={{ fontFamily: inter.style.fontFamily, fontSize: "13px" }}>
                              {role}
                            </MenuItem>
                          ))}
                        </Select>
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormField
                        label="Email"
                        placeholder="john.doe@example.com"
                        type="email"
                        value={formData.email}
                        onChange={(v) => setFormData((prev) => ({ ...prev, email: v }))}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormField
                        label="Phone"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                        value={formData.phone}
                        onChange={(v) => setFormData((prev) => ({ ...prev, phone: v }))}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormField
                        label="Country / Region"
                        placeholder="United States"
                        value={formData.country}
                        onChange={(v) => setFormData((prev) => ({ ...prev, country: v }))}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Stack spacing={0.75}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#1B365D",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Area of Interest <span style={{ color: "#E11D48" }}>*</span>
                        </Typography>
                        <Select
                          value={formData.interest}
                          onChange={(e) => setFormData((prev) => ({ ...prev, interest: e.target.value as string }))}
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "13.5px",
                            borderRadius: "10px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "rgba(27, 54, 93, 0.08)",
                              borderWidth: "1.5px",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#1B365D",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#1B365D",
                            },
                          }}
                        >
                          {areasOfInterest.map((interest) => (
                            <MenuItem key={interest} value={interest} sx={{ fontFamily: inter.style.fontFamily, fontSize: "13px" }}>
                              {interest}
                            </MenuItem>
                          ))}
                        </Select>
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Stack spacing={0.75}>
                        <Typography
                          sx={{
                            fontFamily: inter.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#1B365D",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Message <span style={{ color: "#E11D48" }}>*</span>
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: "#FFFFFF",
                            border: "1.5px solid rgba(27, 54, 93, 0.08)",
                            borderRadius: "10px",
                            px: 2,
                            py: 1,
                            transition: "all 0.25s ease",
                            "&:focus-within": {
                              borderColor: "#1B365D",
                              boxShadow: "0 0 12px rgba(27, 54, 93, 0.06)",
                            },
                          }}
                        >
                          <InputBase
                            placeholder="Please describe your inquiry in detail..."
                            multiline
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                            fullWidth
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "13.5px",
                              color: "#0B1727",
                              "& textarea::placeholder": {
                                color: "rgba(0, 0, 0, 0.35)",
                                opacity: 1,
                              },
                            }}
                          />
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Box sx={{ pt: 1 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: "transform 0.25s ease" }} />}
                      sx={{
                        width: "100%",
                        fontFamily: inter.style.fontFamily,
                        fontSize: "13.5px",
                        fontWeight: 700,
                        textTransform: "none",
                        color: COLORS.WHITE,
                        backgroundColor: "#1B365D",
                        borderRadius: "100px",
                        py: 1.3,
                        boxShadow: "0 4px 14px rgba(27, 54, 93, 0.15)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          backgroundColor: "#122744",
                          boxShadow: "0 6px 20px rgba(27, 54, 93, 0.25)",
                          "& .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      Submit Inquiry
                    </Button>
                  </Box>
                </Stack>
              )}
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ContactLayout;
