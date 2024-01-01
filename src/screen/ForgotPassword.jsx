import React, { useEffect, useState } from "react";
import AuthLayout from "../components/custom/AuthLayout";
import { Box, Button, Stack, Typography } from "@mui/material";
import OtpInput from "../components/custom/OtpInput";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newOtpValue) => {
    setOtp(newOtpValue);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    console.log(otp);
  };
  return (
    <>
      <AuthLayout>
        <Typography fontWeight="bold" fontSize={22} mb={1} textAlign="center">
          Reset Your Password
        </Typography>

        <form onSubmit={handleOtpSubmit}>
          <Stack direction="row" justifyContent="center">
            <OtpInput length={4} value={otp} onChange={handleOtpChange} />
          </Stack>
          <Box mt={5}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              type="submit"
            >
              Verify Email
            </Button>
            <Typography textAlign="center" marginTop={5} fontSize={15}>
              Didn`t recieve the email ? Click to Resend
            </Typography>
          </Box>
        </form>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
