import React, { useState } from "react";
import CustomModal from "../components/custom/Modal/CustomModal";
import { Button, TextField } from "@mui/material";
import ModalWrapper from "../components/custom/ModalMui/ModalMui";

const SchedulerModal = () => {
  const [file, setFile] = useState({
    image: null,
    imagePreview: null,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Show modal
      </Button>

      <ModalWrapper
        open={open}
        onClose={() => setOpen(false)}
        title="Add Scheduler Details and much more"
        image
        UploadChange={(e) => {
          setFile({
            image: e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0]),
          });
        }}
        ClosePreview={() => setFile(null)}
        src={file?.imagePreview}
        imageText="Product Logo"
        btnText="Done"
      >
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
      </ModalWrapper>
      {/* <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        title="Add Scheduler Details"
        btnText="Save"
        image
        UploadChange={(e) => {
          setFile({
            image: e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0]),
          });
        }}
        ClosePreview={() => setFile(null)}
        src={file?.imagePreview}
      >
        <TextField label="Name" color="secondary" />
        <TextField label="Email" color="secondary" />
        <TextField label="Password" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
        <TextField label="Phone Number" color="secondary" />
      </CustomModal> */}
    </>
  );
};

export default SchedulerModal;
