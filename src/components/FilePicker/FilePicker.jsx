import React from "react";
import { Avatar, Badge, Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";

const FilePicker = ({ imageText, src, UploadChange, ClosePreview }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <Box>
        <Typography m="10px 0" fontSize={15} fontWeight="550">
          {imageText}
        </Typography>
        <Stack direction="row" gap={2}>
          <Box>
            {src ? (
              <Badge
                color="primary"
                badgeContent={
                  <CloseIcon fontSize="10px" onClick={ClosePreview} />
                }
              >
                <Avatar src={src} variant="rounded" />
              </Badge>
            ) : (
              <Avatar variant="rounded" />
            )}
          </Box>
          <Button
            component="label"
            variant="contained"
            startIcon={<UploadIcon />}
            fullWidth
            onChange={UploadChange}
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
              },
              textTransform: "capitalize",
            }}
          >
            Click to Upload
            <VisuallyHiddenInput type="file" />
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default FilePicker;
