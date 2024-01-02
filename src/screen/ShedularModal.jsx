import React, { useState } from "react";
import CustomModal from "../components/custom/Modal/CustomModal";
import { TextField } from "@mui/material";

const ShedularModal = ({ open, setOpen }) => {
  const [file, setFile] = useState({
    image: null,
    imagePreview: null,
  });

  return (
    <>
      <CustomModal
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
      </CustomModal>
    </>
  );
};

export default ShedularModal;
