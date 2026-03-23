import { createTheme } from "@mui/material/styles";
import { COLORS } from "./enum";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_NAVY,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.ACCENT_TAN,
      contrastText: COLORS.BLACK,
    },
    background: {
      default: COLORS.PRIMARY_NAVY,
      paper: COLORS.PRIMARY_NAVY,
    },
    text: {
      primary: COLORS.WHITE,
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
        containedPrimary: {
          backgroundColor: COLORS.ACCENT_TAN,
          color: COLORS.BLACK,
          "&:hover": {
            backgroundColor: "#B88A40",
          },
        },
        outlinedPrimary: {
          borderColor: COLORS.WHITE,
          color: COLORS.WHITE,
          "&:hover": {
            borderColor: COLORS.WHITE,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
