import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { logo } from "../../assets/asset";

const AuthLayout = ({ children }) => {
  return (
    <Stack
      sx={{ height: "100vh", bgcolor: "primary.main" }}
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{
          width: { lg: "520px", md: "520px", sm: "80%", xs: "90%" },
          p: "40px 26px",
          borderRadius: "8px",
        }}
      >
        <Stack
          sx={{
            gap: { lg: 6, sm: 4 },
          }}
        >
          <Stack alignItems="center">
            <img src={logo} alt="logo" />
          </Stack>
          {children}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default AuthLayout;
