import React from "react";
import AuthLayout from "../components/custom/AuthLayout/AuthLayout";
import { Button, TextField, Typography } from "@mui/material";

const ResetPass = () => {
  return (
    <>
      <AuthLayout>
        <Typography textAlign="center" fontWeight="bold" fontSize={22} mb={1}>
          Reset Password
        </Typography>
        <TextField label="Password" />
        <TextField label="Confirm Password" />
        <Button variant="contained" size="large">
          Done
        </Button>
      </AuthLayout>
    </>
  );
};

export default ResetPass;
