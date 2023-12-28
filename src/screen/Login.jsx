import { Box, Container, Stack } from "@mui/material";
import React from "react";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <Stack
        sx={{ minHeight: "100vh", bgcolor: "primary.main" }}
        justifyContent="center"
        alignItems="center"
      >
        <LoginForm />
      </Stack>
    </>
  );
};

export default Login;
