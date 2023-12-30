import { Box, Typography } from "@mui/material";
import React from "react";
import FormFields from "../components/Login/FormFields";
import AuthLayout from "../components/custom/AuthLayout";

const Login = () => {
  return (
    <>
      <AuthLayout>
        <Box mt={3}>
          <Typography fontWeight="bold" fontSize={22} mb={1}>
            Welcome 👋🏼
          </Typography>
          <Typography
            fontWeight="300"
            fontSize={{ sm: 13, md: 18 }}
            color="#4C4C4C"
            mb={1}
          >
            Welcome User! Please enter your credentials to access your account.
          </Typography>
        </Box>
        <FormFields />
      </AuthLayout>
    </>
  );
};

export default Login;
