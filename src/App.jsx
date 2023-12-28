import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./screen/Login";
import "./App.css";

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
        <Login />
      </ThemeProvider>
    </>
  );
};

export default App;
