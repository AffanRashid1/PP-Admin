import React from "react";
import AuthLayout from "../components/custom/AuthLayout/AuthLayout";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <>
      <AuthLayout>
        <TextField label="Email Address" type="email" />
        <Link to="/Otp">
          <Button variant="contained" fullWidth>
            Send OTP
          </Button>
        </Link>
        <Link to="/">
          <Button fullWidth>Go Back To Login</Button>
        </Link>
      </AuthLayout>
    </>
  );
};

export default ForgotPass;
