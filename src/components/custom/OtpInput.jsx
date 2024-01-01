import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const OtpInput = ({ length, value, onChange }) => {
  const [otpValues, setOtpValues] = useState(
    value ? value.split("").slice(0, length) : Array(length).fill("")
  );

  const inputRefs = useRef([...Array(length)].map(() => React.createRef()));

  const handleChange = (index, inputValue) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = inputValue[0] || "";
    setOtpValues(newOtpValues);

    if (index < length - 1 && inputValue !== "") {
      inputRefs.current[index + 1].current?.focus();
    }

    if (onChange) {
      onChange(newOtpValues?.join(""));
    }
  };
  const handlePaste = (event) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("text").slice(0, length);

    if (!isNaN(pastedValue)) {
      const newOtpValues = Array.from(
        { length },
        (_, index) => pastedValue[index] || ""
      );

      setOtpValues(newOtpValues);

      const lastIndex = newOtpValues.reduceRight(
        (acc, val, index) => (val !== "" && acc === -1 ? index : acc),
        -1
      );

      if (lastIndex !== -1) {
        inputRefs.current[lastIndex].current.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    const prev = index - 1;
    const next = index + 1;

    if (event.key === "Backspace" && prev >= 0) {
      inputRefs.current[prev].current?.focus();
    } else if (event.key === "ArrowLeft" && prev >= 0) {
      inputRefs.current[prev].current?.focus();
    } else if (
      (event.key === "ArrowRight" || event.key === "Enter") &&
      next < length
    ) {
      inputRefs.current[next].current?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  return (
    <Box>
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
          onPaste={handlePaste}
          sx={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            margin: "0 10px",
            fontSize: "20px",
            "& input[type=number]": {
              "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OtpInput;
