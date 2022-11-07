import React from "react";
import { TextField } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Form = () => {
  return (
    <>
      <div>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          className="input"
          
        />
      </div>
      <TextField
        id="standard-basic"
        label="Receipt"
        variant="standard"
        className="input_receipt"
      />
      <div>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </div>
    </>
  );
};
export default Form;
