import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import FilePicker from "../../../FilePicker/FilePicker";

const ModalWrapper = ({
  open,
  onClose,
  title,
  children,
  image,
  src,
  ClosePreview,
  UploadChange,
  imageText,
  btnText,

  ...props
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)"
  );

  const buttonSize = isSmallScreen
    ? "small"
    : isMediumScreen
    ? "medium"
    : "large";

  function BootstrapDialogTitle(props) {
    const { children, ...other } = props;
    return (
      <DialogTitle
        sx={{
          textAlign: "center",
        }}
        {...other}
      >
        <Typography mx="20px" fontSize={{ xs: "16px", sm: "22px" }}>
          {children}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: {
              xs: 15,
              sm: 20,
            },
            top: {
              xs: 18,
              sm: 23,
            },
          }}
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
      scroll="paper"
      {...props}
      sx={{}}
      PaperProps={{
        style: {
          borderRadius: 8,
          padding: "10px 5px",
        },
      }}
    >
      <BootstrapDialogTitle onClose={onClose}>{title}</BootstrapDialogTitle>

      <DialogContent>
        <Stack direction="column" gap={3} my={2}>
          {children}
        </Stack>
        {image && (
          <FilePicker
            imageText={imageText}
            src={src}
            UploadChange={UploadChange}
            ClosePreview={ClosePreview}
          />
        )}
      </DialogContent>
      <DialogActions
        sx={{
          bgcolor: "white",
          padding: "10px 23px ",
        }}
      >
        <Button fullWidth variant="contained" size={buttonSize}>
          {btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ModalWrapper;
