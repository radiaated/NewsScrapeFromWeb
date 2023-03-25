import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./app/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#000", light: "#1f1f1f" },
    secondary: { main: "#fafafa" },
    background: {
      paper: "#000",
      default: "#000",
      navBar: "#000",
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#fff", light: "#D8D8D8" },
    secondary: { main: "#000" },
    background: {
      paper: "#fff",
      default: "#fff",
      navBar: "#000",
    },
  },
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
  shadows: Array(25).fill("none"),
});

function App() {
  const [dmode, setDmode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dmode")) {
      setDmode(JSON.parse(localStorage.getItem("dmode")));
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={dmode ? lightTheme : darkTheme}>
        {/* <ThemeProvider theme={lightTheme}> */}
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout data={{ dmode, setDmode }} />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
