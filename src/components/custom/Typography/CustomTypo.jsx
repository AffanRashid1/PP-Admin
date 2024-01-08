import React from "react";
import { Stack, Typography } from "@mui/material";

const CustomizedTypo = ({
  primaryText,
  primaryTextVariant = "body1",
  primaryTextIcon,
  secondaryText,
  secondaryTextVariant = "body2",
  secondaryTextIcon,
  startIcon,
  endIcon,
  direction,
  primaryIconSize,
  secondaryIconSize,
  ...typoProps
}) => {
  return (
    <Stack alignItems="center" spacing={1} direction={direction}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {primaryTextIcon &&
          React.cloneElement(primaryTextIcon, {
            sx: { fontSize: primaryIconSize || "inherit" },
          })}

        {primaryText && (
          <Typography variant={primaryTextVariant} {...typoProps}>
            {primaryText}
          </Typography>
        )}
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        {secondaryTextIcon &&
          React.cloneElement(secondaryTextIcon, {
            sx: { fontSize: secondaryIconSize || "inherit" },
          })}

        {secondaryText && (
          <Typography
            variant={secondaryTextVariant}
            color="textSecondary"
            {...typoProps}
          >
            {secondaryText}
          </Typography>
        )}
      </Stack>

      {endIcon && React.cloneElement(endIcon, { fontSize: "inherit" })}
    </Stack>
  );
};

export default CustomizedTypo;
