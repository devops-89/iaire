"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { inter } from "@/utils/fonts";
import { FaqItem } from "@/utils/type";

interface FaqAccordionListProps {
  faqs: FaqItem[];
  expandedId: string | false;
  onAccordionChange: (
    panelId: string
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
  onResetFilters: () => void;
}

const FaqAccordionList: React.FC<FaqAccordionListProps> = ({
  faqs,
  expandedId,
  onAccordionChange,
  onResetFilters,
}) => {
  return (
    <Box
      sx={{ width: "100%", maxWidth: "900px", pt: 2 }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      {faqs.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            px: 4,
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E5E5E9",
          }}
        >
          <HelpOutlineIcon
            sx={{ fontSize: 48, color: "rgba(27, 54, 93, 0.3)", mb: 2 }}
          />
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "18px",
              fontWeight: 700,
              color: "#0B1727",
              mb: 1,
            }}
          >
            No matching questions found
          </Typography>
          <Typography
            sx={{
              fontFamily: inter.style.fontFamily,
              fontSize: "14px",
              color: "#6B7280",
              mb: 3,
            }}
          >
            Try refining your search term or switching to a different category.
          </Typography>
          <Button
            onClick={onResetFilters}
            variant="outlined"
            sx={{
              borderRadius: "30px",
              borderColor: "#1B365D",
              color: "#1B365D",
              textTransform: "none",
              fontFamily: inter.style.fontFamily,
              fontWeight: 600,
            }}
          >
            Reset Filters
          </Button>
        </Box>
      ) : (
        <Stack spacing={2.5}>
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <Accordion
                key={faq.id}
                expanded={isExpanded}
                onChange={onAccordionChange(faq.id)}
                elevation={0}
                disableGutters
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px !important",
                  border: "1px solid",
                  borderColor: isExpanded
                    ? "rgba(27, 54, 93, 0.3)"
                    : "#E5E5E9",
                  boxShadow: isExpanded
                    ? "0 10px 30px rgba(27, 54, 93, 0.08)"
                    : "0 2px 10px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: isExpanded ? "#1B365D" : "#6B7280",
                        transition: "transform 0.3s ease, color 0.3s ease",
                      }}
                    />
                  }
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1.5,
                    "& .MuiAccordionSummary-content": {
                      my: 1,
                    },
                  }}
                >
                  <Stack spacing={0.75} sx={{ pr: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10.5px",
                        fontWeight: 700,
                        color: "#1B365D",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {faq.category}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: inter.style.fontFamily,
                        fontSize: { xs: "16px", sm: "17.5px" },
                        fontWeight: 700,
                        color: isExpanded ? "#1B365D" : "#0B1727",
                        lineHeight: 1.35,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Stack>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    pb: 3.5,
                    pt: 0,
                    borderTop: "1px dashed rgba(229, 229, 233, 0.8)",
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: inter.style.fontFamily,
                      fontSize: "15px",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      pt: 2,
                    }}
                  >
                    {faq.answer}
                  </Typography>

                  {faq.bullets && faq.bullets.length > 0 && (
                    <Stack spacing={1} sx={{ mt: 2, pl: 2 }}>
                      {faq.bullets.map((bullet, bIdx) => (
                        <Stack
                          key={bIdx}
                          direction="row"
                          spacing={1.5}
                          alignItems="flex-start"
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "#1B365D",
                              mt: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: inter.style.fontFamily,
                              fontSize: "14.5px",
                              color: "#374151",
                              lineHeight: 1.6,
                            }}
                          >
                            {bullet}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};

export default FaqAccordionList;
