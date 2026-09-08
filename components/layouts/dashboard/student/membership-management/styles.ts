export const glassCardStyle = {
  p: 4,
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.04)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.08)",
  },
};

export const goldGradient = "linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)";
export const navyGradient = "linear-gradient(135deg, #1A2847 0%, #111A30 100%)";
export const glassBorder = "1px solid rgba(229, 231, 235, 0.5)";
