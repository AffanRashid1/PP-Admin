import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const OtpInput = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index < 5 && value !== "") {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handlePaste = (event) => {
    const pastedValue = event.clipboardData
      .getData("text")
      .slice(0, 6)
      .split("");
    const newOtpValues = Array.from(
      { length: 6 },
      (_, index) => pastedValue[index] || ""
    );
    setOtpValues(newOtpValues);
    inputRefs.current[5].current.focus();
  };

  const handleKeyDown = (index, event) => {
    const prev = index - 1;
    const next = index + 1;

    if (event.key === "Backspace" && prev >= 0) {
      inputRefs.current[prev].current.focus();
    } else if (event.key === "ArrowLeft" && prev >= 0) {
      inputRefs.current[prev].current.focus();
    } else if (
      (event.key === "ArrowRight" || event.key === "Enter") &&
      next < 6
    ) {
      inputRefs.current[next].current.focus();
    }
  };

  return (
    <Box>
      <form onPaste={handlePaste}>
        {otpValues.map((value, index) => (
          <TextField
            key={index}
            name={`otp${index}`}
            type="number"
            autoComplete="off"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder="-"
            variant="outlined"
            onKeyUp={(e) => handleKeyDown(index, e)}
            size="small"
            color="secondary"
            inputRef={inputRefs.current[index]}
            sx={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              margin: "0 10px",
              fontSize: "20px",
              "& input[type=number]": {
                "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0,
                },
              },
            }}
            // Set maxLength to 1
            inputProps={{ maxLength: 1 }}
          />
        ))}
      </form>
    </Box>
  );
};

export default OtpInput;
