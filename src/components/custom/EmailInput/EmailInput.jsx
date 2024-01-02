import { TextField } from "@mui/material";
import React from "react";

const EmailInput = ({ label, onChange, value }) => {
  return (
    <>
      <TextField
        onChange={onChange}
        value={value}
        label={label ? label : "Email"}
        variant="outlined"
        type="email"
        fullWidth
        sx={{
          m: "15px 0",
          "& input[type=number]": {
            "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
          },
        }}
      />
    </>
  );
};

export default EmailInput;
