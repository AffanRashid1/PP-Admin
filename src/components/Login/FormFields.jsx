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
import { Link } from "react-router-dom";

const FormFields = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form>
        <TextField
          label="Username/Email"
          fullWidth
          required
          type="email"
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
          required
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
        <Stack mt={5} direction="column" gap={2}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            type="submit"
          >
            Login
          </Button>

          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <Button fullWidth color="primary">
              Forgot Password?
            </Button>
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default FormFields;
