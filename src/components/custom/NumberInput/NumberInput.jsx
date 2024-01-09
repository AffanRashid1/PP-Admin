import { TextField } from "@mui/material";
import React from "react";

const NumberInput = ({ label, onChange, value }) => {
  //   const onChange = (event) => {
  //     const inputValue = event.target.value;

  //     if (inputValue.trim() == "") {
  //       setError("Field cannot be empty");
  //     } else {
  //       setError(null);
  //     }

  //     setValue(inputValue);
  //   };
  return (
    <>
      <TextField
        onChange={onChange}
        value={value}
        label={label ? label : "Number"}
        variant="outlined"
        type="number"
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

export default NumberInput;
