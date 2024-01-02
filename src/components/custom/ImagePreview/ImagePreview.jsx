import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImagePreview = ({ src, onClick }) => {
  return (
    <>
      <Box position="relative">
        {src ? (
          <Badge badgeContent={<CloseIcon fontSize="10px" onClick={onClick} />}>
            <Avatar src={src} variant="rounded" />
          </Badge>
        ) : (
          <Avatar variant="rounded" />
        )}
      </Box>
    </>
  );
};

export default ImagePreview;
