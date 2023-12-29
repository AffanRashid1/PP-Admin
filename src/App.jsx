import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./screen/Login";
import "./App.css";
import ForgotPassword from "./screen/ForgotPassword";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DC0028",
      },
      secondary: {
        main: "#000",
      },
      text: {
        primary: "#000",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ForgotPassword />
        {/* <Login /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
