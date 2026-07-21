import React from "react";
import { Box } from "@mui/material";

interface BorderBeamProps {
  /** Size of the beam in percentage relative to container */
  size?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Width of the border beam */
  borderWidth?: number;
  /** Starting color (tail) */
  colorFrom?: string;
  /** Ending color (head) */
  colorTo?: string;
  /** Animation delay in seconds */
  delay?: number;
}

const BorderBeam = ({
  duration = 5,
  borderWidth = 1,
  colorFrom = "rgba(59, 130, 246, 0)",
  colorTo = "#3B82F6",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <Box
      className="border-beam-container"
      sx={{
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: `${borderWidth}px`,
        // Use a CSS mask to clip the background strictly to the border
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        zIndex: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "300%",
          height: "300%",
          transform: "translate(-50%, -50%)",
          // The conic gradient creates the fading comet tail effect with trailing dots
          background: `conic-gradient(from 90deg at 50% 50%, 
            ${colorFrom} 0%, 
            ${colorFrom} 40%, ${colorTo} 40%, ${colorTo} 40.5%, ${colorFrom} 40.5%,
            ${colorFrom} 48%, ${colorTo} 48%, ${colorTo} 48.5%, ${colorFrom} 48.5%,
            ${colorFrom} 55%, ${colorTo} 55%, ${colorTo} 55.5%, ${colorFrom} 55.5%,
            ${colorFrom} 62%, ${colorTo} 62%, ${colorTo} 62.5%, ${colorFrom} 62.5%,
            ${colorFrom} 70%, ${colorTo} 100%)`,
          animation: `border-beam-spin ${duration}s linear infinite`,
          animationDelay: `-${delay}s`,
        },
        "@keyframes border-beam-spin": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      }}
    />
  );
};

export default BorderBeam;
