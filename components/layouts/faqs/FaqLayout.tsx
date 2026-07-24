"use client";

import React, { useState, useMemo } from "react";
import { Box, Container, Stack } from "@mui/material";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/utils/constant";
import FaqHeader from "./components/FaqHeader";
import FaqCategoryFilter from "./components/FaqCategoryFilter";
import FaqAccordionList from "./components/FaqAccordionList";
import FaqCtaCard from "./components/FaqCtaCard";

const FaqLayout = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | false>("gen-1");

  const handleAccordionChange =
    (panelId: string) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedId(isExpanded ? panelId : false);
    };

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All Questions");
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" || item.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.bullets &&
          item.bullets.some((b) => b.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(248, 93, 0, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 54, 93, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={6} alignItems="center">
          <FaqHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <FaqCategoryFilter
            categories={FAQ_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <FaqAccordionList
            faqs={filteredFaqs}
            expandedId={expandedId}
            onAccordionChange={handleAccordionChange}
            onResetFilters={handleResetFilters}
          />

          <FaqCtaCard />
        </Stack>
      </Container>
    </Box>
  );
};

export default FaqLayout;
