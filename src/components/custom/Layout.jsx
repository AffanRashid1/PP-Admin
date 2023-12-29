import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { logo } from "../../assets/asset";

const Layout = ({ children }) => {
  return (
    <Stack
      sx={{ minHeight: "100vh", bgcolor: "primary.main" }}
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{
          width: { lg: "520px", md: "520px", sm: "400px", xs: "90%" },
          p: "40px 26px",
          borderRadius: "8px",
        }}
      >
        <Stack gap={6}>
          <Stack alignItems="center">
            <img src={logo} alt="logo" />
          </Stack>
          {children}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Layout;
