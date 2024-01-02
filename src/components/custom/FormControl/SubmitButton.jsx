import { Button } from "@mui/material";
import React, { useState } from "react";

const SubmitButton = ({ text }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ m: "15px 0" }}
        disabled={isDisabled}
      >
        {text}
      </Button>
    </>
  );
};

export default SubmitButton;
