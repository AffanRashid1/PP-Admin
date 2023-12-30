import React, { useState } from "react";
import AuthLayout from "../components/custom/AuthLayout";
import { Box, Button, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { MuiOtpInput } from "mui-one-time-password-input";
import OtpInput from "../components/custom/OtpInput";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <AuthLayout>
        <Typography fontWeight="bold" fontSize={22} mb={1} textAlign="center">
          Reset Your Password
        </Typography>

        {/* <TextField
            label="Username/Email"
            fullWidth
            color="secondary"
            style={{ margin: "10px 0" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          /> */}

        <Stack direction="row" justifyContent="">
          <OtpInput />
        </Stack>
        <Box mt={5}>
          <Button variant="contained" fullWidth color="primary" size="large">
            Verify Email
          </Button>
          <Typography textAlign="center" marginTop={5} fontSize={15}>
            Didn`t recieve the email ? Click to Resend
          </Typography>
        </Box>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
