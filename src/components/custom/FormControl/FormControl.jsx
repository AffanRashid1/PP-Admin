import React from "react";
import { ToastContainer, toast } from "react-toastify";

const FormControl = ({ onSubmit, children }) => {
  return (
    <>
      <>
        <form action="#" onSubmit={onSubmit}>
          {children}
        </form>
      </>
    </>
  );
};

export default FormControl;
