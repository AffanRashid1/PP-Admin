import { Box, Typography } from "@mui/material";
import React from "react";
import FormFields from "./FormFields";
import Layout from "../custom/Layout";

const LoginForm = () => {
  return (
    <Layout>
      <Box mt={3}>
        <Typography fontWeight="bold" fontSize={22} mb={1}>
          Welcome 👋🏼
        </Typography>
        <Typography fontWeight="300" fontSize={18} color="#4C4C4C">
          Welcome User! Please enter your credentials to access your account.
        </Typography>
      </Box>
      <FormFields />
    </Layout>
  );
};

export default LoginForm;
