import React from "react";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";

const CustomModal = ({
  onClose,
  open,
  title,
  children,
  btnText,
  onClick,
  UploadChange,
  ClosePreview,
  src,
  image,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: 500, md: 500, sm: "60%", xs: "80%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "8px",
    pt: 2,
    px: 4,
    outline: "none",
    maxHeight: "80%",
    overflow: "hidden",
  };

  const stackStyle = {
    maxHeight: "500px",
    overflowY: "scroll",
    m: "20px 0",
    p: "5px 0",
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#fff",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#d4d4d4",
      borderRadius: "6px",
    },
  };

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
      <Modal
        sx={{
          outline: "none",
        }}
        open={open}
        onClose={onClose}
        disableAutoFocus
      >
        <Box sx={style}>
          <Box mb={5} sx={{ position: "sticky", top: 0 }}>
            <IconButton
              sx={{ position: "absolute", top: -5, left: -20 }}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              fontSize={20}
              fontWeight="bold"
              textAlign="center"
              margin="10px 0"
              textTransform="capitalize"
            >
              {title}
            </Typography>
          </Box>
          <Stack gap={4} sx={stackStyle}>
            {children}
            {image && (
              <Box>
                <Typography m="7px 0" fontSize={15} fontWeight="500">
                  Technician Photo
                </Typography>
                <Stack direction="row" gap={2}>
                  <Box>
                    {src ? (
                      <Badge
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
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Stack>
              </Box>
            )}
          </Stack>
          <Box
            sx={{
              bgcolor: "white",
              padding: "20px 0",
              position: "sticky",
              bottom: 0,
              zIndex: 2,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={onClick}
              size="large"
            >
              {btnText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
