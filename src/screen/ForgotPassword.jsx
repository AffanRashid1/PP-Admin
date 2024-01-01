import React, { useEffect, useState } from "react";
import AuthLayout from "../components/custom/AuthLayout";
import { Box, Button, Stack, Typography } from "@mui/material";
import OtpInput from "../components/custom/OtpInput";
import { MuiOtpInput } from "mui-one-time-password-input";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (newOtpValue) => {
    setOtp(newOtpValue);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    console.log("Otp is" + " " + otp);
  };

  return (
    <>
      <AuthLayout>
        <Typography fontWeight="bold" fontSize={22} mb={1} textAlign="center">
          Confirm Your OTP
        </Typography>

        <form onSubmit={handleOtpSubmit}>
          {/* <MuiOtpInput length={4} value={otp} onChange={handleOtpChange} /> */}
          <Stack direction="row" justifyContent="center" m="20px 0">
            <OtpInput length={5} value={otp} onChange={handleOtpChange} />
          </Stack>
          <Box mt={5}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              type="submit"
            >
              Verify OTP
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
