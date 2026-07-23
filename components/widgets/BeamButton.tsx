import React from "react";
import { Button, ButtonProps } from "@mui/material";
import BorderBeam from "@/components/animations/BorderBeam";
import { COLORS } from "@/utils/enum";
import { inter } from "@/utils/fonts";

export type BeamButtonProps = ButtonProps<any, { component?: any }> & {
  beamColorFrom?: string;
  beamColorTo?: string;
  beamDuration?: number;
  href?: string;
  target?: string;
  rel?: string;
  component?: React.ElementType;
};

const BeamButton: React.FC<BeamButtonProps> = ({
  children,
  sx,
  variant = "contained",
  beamColorFrom = "transparent",
  beamColorTo,
  beamDuration = 5,
  ...props
}) => {
  // Determine standard styles based on the variant
  let defaultBg: string = "transparent";
  let defaultColor: string = COLORS.WHITE;
  let defaultBorder: string = "none";
  let defaultHoverBg: string = "rgba(255, 255, 255, 0.03)";
  let defaultHoverTransform: string = "translateY(-2px)";

  if (variant === "contained") {
    defaultBg = COLORS.PRIMARY_NAVY;
    defaultColor = COLORS.WHITE;
    defaultHoverBg = "#122744";
  } else if (variant === "outlined") {
    defaultBg = "transparent";
    defaultColor = COLORS.PRIMARY_BLUE;
    defaultBorder = `1.5px solid ${COLORS.BEAM_COLOR}`;
    defaultHoverBg = "rgba(255, 255, 255, 0.03)";
  } else if (variant === "text") {
    defaultBg = "transparent";
    defaultColor = COLORS.SLATE_GRAY;
  }

  // Allow custom sx to override our smart checks, but fall back to defaults
  const customBg = (sx as any)?.backgroundColor || (sx as any)?.bgcolor;
  const customColor = (sx as any)?.color;

  const finalBg = customBg || defaultBg;
  const finalColor = customColor || defaultColor;

  // Smart check for beam color
  const isBlueBg =
    finalBg === COLORS.PRIMARY_NAVY ||
    finalBg === "#1B365D" ||
    finalBg === "#12233f" ||
    finalBg === COLORS.PRIMARY_BLUE;

  // Light backgrounds (like white) should probably have a blue beam
  const isLightBg = finalBg === "#FFFFFF" || finalBg === "#fff";

  const finalBeamColorTo =
    beamColorTo ||
    (isBlueBg
      ? COLORS.WHITE
      : isLightBg
        ? COLORS.BEAM_COLOR
        : COLORS.BEAM_COLOR);

  return (
    <Button
      variant={variant}
      {...props}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "100px",
        fontFamily: inter.style.fontFamily,
        textTransform: "none",
        fontWeight: 700,
        px: 3.5,
        py: 1.2,
        backgroundColor: finalBg,
        color: finalColor,
        border: defaultBorder,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "&:hover": {
          backgroundColor: defaultHoverBg,
          transform: defaultHoverTransform,
          // borderColor: variant === "outlined" ? COLORS.WHITE : undefined,
          // color: variant === "outlined" ? COLORS.WHITE : undefined,
          "& .arrow-icon": {
            transform: "translateX(4px)",
          },
        },
        ...sx,
        borderColor: defaultBorder,
      }}
    >
      {variant !== "text" && (
        <BorderBeam
          duration={beamDuration}
          colorFrom={beamColorFrom}
          colorTo={finalBeamColorTo}
        />
      )}
      {children}
    </Button>
  );
};

export default BeamButton;
