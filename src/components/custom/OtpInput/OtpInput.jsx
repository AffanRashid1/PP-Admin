import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const OtpInput = ({ length, value, onChange }) => {
  const [otpValues, setOtpValues] = useState(
    value ? value.split("").slice(0, length) : Array(length).fill("")
  );
  const [index, setIndex] = useState(null);

  const inputRefs = useRef([...Array(length)]?.map(() => React.createRef()));

  const handleChange = (index, inputValue) => {
    setIndex(index);
    const newOtpValues = [...otpValues];

    const isValidInput =
      inputValue.length === 1 &&
      inputValue.charCodeAt(0) >= 48 &&
      inputValue.charCodeAt(0) <= 57;

    newOtpValues[index] = isValidInput ? inputValue : "";

    setOtpValues(newOtpValues);

    if (index < length - 1 && isValidInput) {
      inputRefs.current[index + 1]?.current?.removeAttribute("disabled");
      inputRefs.current[index + 1]?.current?.focus();
    }

    if (onChange) {
      onChange(newOtpValues?.join(""));
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("text").slice(0, length);

    for (let i = index + 1; i < length; i++) {
      inputRefs.current[i]?.current?.removeAttribute("disabled");
    }

    if (!isNaN(pastedValue)) {
      const newOtpValues = Array.from(
        { length },
        (_, index) => pastedValue[index] || ""
      );

      setOtpValues(newOtpValues);

      let lastIndex = -1;

      for (let index = newOtpValues.length - 1; index >= 0; index--) {
        if (newOtpValues[index] !== "") {
          lastIndex = index;
          break;
        }
      }

      if (lastIndex !== -1) {
        inputRefs.current[lastIndex + 1]?.current.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    const prev = index - 1;
    const next = index + 1;

    const handleNavigation = (index) => {
      const targetInputRef = inputRefs.current[index];

      if (targetInputRef.current) {
        targetInputRef.current.focus();
        targetInputRef.current.select();
      }
    };

    if (event.key === "Backspace" && prev >= 0) {
      handleNavigation(prev);
      inputRefs.current[index]?.current?.setAttribute("disabled", "true");
    } else if (event.key === "ArrowLeft" && prev >= 0) {
      handleNavigation(prev);
    } else if (
      (event.key === "ArrowRight" || event.key === "Enter") &&
      next < length
    ) {
      handleNavigation(next);
    }
  };

  // const handleClick = (index) => {
  //   let targetIndex = index;
  //   for (let i = length - 1; i >= 0; i--) {
  //     if (!inputRefs.current[i]?.current?.hasAttribute("disabled")) {
  //       targetIndex = i;
  //       break;
  //     }
  //   }

  //   const targetInputRef = inputRefs.current[targetIndex];

  //   if (targetInputRef.current) {
  //     targetInputRef.current.focus();
  //     targetInputRef.current.select();
  //   }
  // };

  useEffect(() => {
    inputRefs.current[0].current?.focus();

    for (let i = index + 1; i < length; i++) {
      inputRefs.current[i]?.current?.setAttribute("disabled", "true");
    }
  }, []);

  return (
    <Stack
      // onClick={() => handleClick(index)}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        {otpValues?.map((value, index) => (
          <TextField
            key={index}
            name={`otp${index}`}
            autoComplete="off"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            variant="outlined"
            onKeyUp={(e) => handleKeyDown(index, e)}
            size="small"
            color="secondary"
            inputRef={inputRefs.current[index]}
            onPaste={handlePaste}
            sx={{
              input: { textAlign: "center", fontSize: "25px" },
              width: "50px",
              height: "50px",
              textAlign: "center",
              margin: "0 10px",
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
    </Stack>
  );
};

export default OtpInput;
