import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { logo } from "../../assets/asset";
import FormFields from "./FormFields";

const LoginForm = () => {
  return (
    <Paper sx={{ maxWidth: "520px", p: "40px 26px" }}>
      <Stack gap={4}>
        <Stack alignItems="center">
          <img src={logo} alt="logo" width="250" />
        </Stack>
        <Box mt={3}>
          <Typography fontWeight="bold" fontSize={22} mb={1}>
            Hey! Welcome 👋🏼
          </Typography>
          <Typography fontWeight="300" fontSize={18} color="#4C4C4C">
            Welcome User! Please enter your credentials to access your account.
          </Typography>
        </Box>

        <FormFields />

        <Box mt={5}>
          <Button variant="contained" fullWidth color="primary">
            Login
          </Button>
          <Typography textAlign="center" marginTop={5} fontSize={13}>
            Don’t Have an account?
            <Button>Sign Up</Button>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default LoginForm;
