import React, { useEffect, useState } from "react";
import AuthLayout from "../components/custom/AuthLayout/AuthLayout";
import { Box, Button, Stack, Typography } from "@mui/material";
import OtpInput from "../components/custom/OtpInput/OtpInput";
import { MuiOtpInput } from "mui-one-time-password-input";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newOtpValue) => {
    setOtp(newOtpValue);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AuthLayout>
        <Typography fontWeight="bold" fontSize={22} mb={1} textAlign="center">
          Confirm Your OTP
        </Typography>
        <form onSubmit={handleOtpSubmit}>
          <OtpInput length={4} value={otp} onChange={handleOtpChange} />

          <Box mt={10}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              type="submit"
            >
              Verify OTP
            </Button>
          </Box>
        </form>
        <Typography textAlign="center" marginTop={1} fontSize={15}>
          Didn`t receive the email ? Click to Resend
        </Typography>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
