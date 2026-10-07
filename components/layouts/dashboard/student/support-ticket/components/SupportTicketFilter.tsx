import React from "react";
import { Card, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { CATEGORY_OPTIONS } from "@/utils/constant";

interface SupportTicketFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
}

const SupportTicketFilter: React.FC<SupportTicketFilterProps> = ({
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
}) => {
  return (
    <Card
      sx={{
        p: 3,
        mb: 4,
        borderRadius: "20px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.03)",
        border: "1px solid #e0e0e0",
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search ticket by ID or Subject..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            select
            label="Category Filter"
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <MenuItem value="ALL">All Categories</MenuItem>
            {CATEGORY_OPTIONS.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SupportTicketFilter;
