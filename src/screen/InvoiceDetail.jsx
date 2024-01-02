import React from "react";
import CustomModal from "../components/custom/Modal/CustomModal";
import { InputAdornment, MenuItem, TextField } from "@mui/material";

const InvoiceDetail = ({ open, setOpen }) => {
  const currencies = [
    {
      value: "USD",
      label: "Shock Absorbers",
    },
    {
      value: "EUR",
      label: "Engine Oil",
    },
    {
      value: "BTC",
      label: "Compressor",
    },
    {
      value: "JPY",
      label: "Battery",
    },
    {
      value: "JPY",
      label: "Radiator",
    },
  ];

  return (
    <>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title="Invoice Detail"
        btnText="Send Invoice"
        onClose={setOpen}
      >
        <TextField select label="Product Used">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Service Charges"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CustomModal>
    </>
  );
};

export default InvoiceDetail;
