import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#42A5F5" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Less rounding for a sharper square look
          textTransform: "none", // Removes uppercase default styling
          fontWeight: "bold", // Makes text bolder
          padding: "10px 20px", // Adjusts padding for a stronger appearance
          border: "2px solid", // Adds structure
          transition: "all 0.3s ease", // Smooth hover effect
          "&:hover": {
            borderColor: "#42A5F5", // Highlight border on hover
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1.5rem",
    },
  },
});


export default theme;