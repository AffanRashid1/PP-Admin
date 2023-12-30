import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  Button,
  FormControlLabel,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const FormFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };

  return (
    <>
      <form>
        <TextField
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
        />
        <TextField
          color="secondary"
          label="Password"
          fullWidth
          style={{ margin: "10px 0" }}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            label={<Typography fontSize={13}>Remember Me</Typography>}
            control={
              <Checkbox
                {...label}
                defaultChecked
                color="default"
                size="small"
              />
            }
          />

          <Typography color="secondary.main" fontSize={13}>
            Forgot Password?
          </Typography>
        </Stack>
        <Box mt={5}>
          <Button variant="contained" fullWidth color="primary" size="large">
            Login
          </Button>
          <Typography textAlign="center" marginTop={5} fontSize={15}>
            Don’t Have an account? Sign Up
          </Typography>
        </Box>
      </form>
    </>
  );
};

export default FormFields;
