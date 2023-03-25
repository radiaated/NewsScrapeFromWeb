import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#000", light: "#1f1f1f" },
    secondary: { main: "#fafafa" },
    background: {
      default: "#010203",
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  // </React.StrictMode>,
);
