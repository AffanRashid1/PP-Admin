import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import { styled } from "@mui/material/styles";

const ModalWrapper = ({
  open,
  onClose,
  title,
  children,
  dialogContentSx,
  image,
  src,
  ClosePreview,
  UploadChange,
  imageText,
  ...props
}) => {
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

  function BootstrapDialogTitle(props) {
    const { children, ...other } = props;
    return (
      <DialogTitle
        sx={{
          textAlign: "center",
          padding: "10px 0",
          position: "sticky",
          top: 0,
        }}
        {...other}
      >
        {children}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", left: 8, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    );
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-container": { "& .MuiPaper-root": { minWidth: "280px" } },
      }}
      scroll="paper"
      {...props}
    >
      <BootstrapDialogTitle onClose={onClose}>{title}</BootstrapDialogTitle>

      <DialogContent sx={{ dialogContentSx }} dividers>
        <Stack direction="column" gap={4}>
          {children}
        </Stack>
        {image && (
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
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
          </Box>
        )}
      </DialogContent>
      <Box
        sx={{
          bgcolor: "white",
          padding: "10px 20px",
          position: "sticky",
          bottom: 0,
          zIndex: 2,
        }}
      >
        <Button fullWidth variant="contained" size="large">
          Sign
        </Button>
      </Box>
    </Dialog>
  );
};
export default ModalWrapper;
