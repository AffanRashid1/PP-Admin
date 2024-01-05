import React, { useState } from "react";
import CustomModal from "../components/custom/Modal/CustomModal";
import { TextField } from "@mui/material";
import ModalWrapper from "../components/custom/ModalMui/ModalMui";

const SchedulerModal = () => {
  const [file, setFile] = useState({
    image: null,
    imagePreview: null,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Show modal</button>

      <ModalWrapper
        open={open}
        onClose={() => setOpen(false)}
        title="Add Scheduler Details"
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
      >
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
