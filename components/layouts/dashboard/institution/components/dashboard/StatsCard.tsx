import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { STATSCARDDATA } from "@/utils/type";
import { Box, Card, Typography } from "@mui/material";

const StatsCard = ({ title, count, icon: Icon }: STATSCARDDATA) => {
  return (
    <Box sx={{ mt: 3, position: "relative" }}>
      <Card
        sx={{
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          borderRadius: "24px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          p: 3,
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
          border: "1px solid rgba(0,0,0,0.03)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* Accent Bar */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${COLORS.PRIMARY_NAVY} 0%, ${COLORS.ACCENT_TAN} 100%)`,
          }}
        />

        {/* Background Icon Flourish */}
        <Box
          sx={{
            position: "absolute",
            right: -10,
            bottom: -15,
            opacity: 0.04,
            fontSize: "120px",
            transform: "rotate(-10deg)",
            color: COLORS.BLUE,
            "& svg": {
              fontSize: "inherit",
            },
          }}
        >
          <Icon />
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box
              sx={{
                p: 1.2,
                borderRadius: "12px",
                bgcolor: "rgba(11, 23, 39, 0.04)",
                color: COLORS.BLUE,
                display: "flex",
              }}
            >
              <Icon sx={{ fontSize: 20 }} />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              fontFamily: montserrat.style.fontFamily,
              color: "rgba(0,0,0,0.55)",
              fontWeight: 600,
              lineHeight: 1.4,
              mb: 0.5,
              minHeight: "40px",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 800,
              fontFamily: roboto.style.fontFamily, // Roboto Slab
              color: COLORS.BLUE,
              letterSpacing: "-1px",
            }}
          >
            {count}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default StatsCard;
