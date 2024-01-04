import React, { useState } from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import Login from "./screen/Login";
import "./App.css";
import ForgotPassword from "./screen/ForgotPassword";
import Layout from "./components/custom/Layout/Layout";
import FormControl from "./components/custom/FormControl/FormControl";
import NumberInput from "./components/custom/NumberInput/NumberInput";
import InvoiceDetail from "./screen/InvoiceDetail";
import SchedulerModal from "./screen/SchedularModal";

const App = () => {
  const [open, setOpen] = useState(false);
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
        <Login />
        {/* <Button variant="contained" onClick={() => setOpen(true)}>
          Open Modal
        </Button> */}
        {/* <InvoiceDetail open={open} setOpen={() => setOpen(false)} /> */}
        {/* <SchedulerModal open={open} setOpen={() => setOpen(false)} /> */}
        {/* <ForgotPassword /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
