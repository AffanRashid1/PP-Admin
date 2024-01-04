import React, { useState } from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DC0028",
      },
      secondary: {
        main: "#000",
        white: "#fff",
      },
      text: {
        primary: "#000",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {routes.map((e, i) => {
              return <Route path={e.path} key={i} element={e?.element} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
