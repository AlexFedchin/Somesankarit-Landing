import { createTheme } from "@mui/material/styles";

const createCustomTheme = ({ isMobile, isTablet }) =>
  createTheme({
    typography: {
      fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
      color: "var(--off-white)",
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transition: "all 0.2s ease",
            color: "var(--off-white)",
            opacity: 0.5,
            fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
            "&.Mui-focused": {
              color: "var(--off-white)",
              opacity: 0.8,
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "var(--off-white)",
            opacity: 0.2,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
            borderRadius: "8px",
            ".MuiOutlinedInput-notchedOutline": {
              transition: "all 0.2s ease",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid var(--off-white)",
              opacity: 1,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              opacity: 0.75,
              border: "1px solid var(--off-white) !important",
            },
          },
          notchedOutline: {
            opacity: 0.5,
            border: "1px solid var(--off-white)",
          },
          input: {
            color: "var(--off-white)",
            "&:-webkit-autofill": {
              boxShadow: "0 0 0 100px transparent inset !important",
              WebkitTextFillColor: "var(--off-white) !important",
              transition: "background-color 5000s ease-in-out 0s",
            },
          },
        },
      },
    },
  });

export default createCustomTheme;
