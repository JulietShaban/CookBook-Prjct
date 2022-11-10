import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { TextField } from "@mui/material";
import { receiptSelector } from "./CookbookApp/redux/receiptsSelectors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const history = useHistory();
  const { id } = useParams();

  const receiptItem = useSelector(receiptSelector(id));

 

  const handleClose = () => {
    history.push("/");
  };

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <TextField
          id="standard-basic"
          label={receiptItem.title}
          variant="standard"
          className="input"
        />
        <TextField
          id="standard-basic"
          label={receiptItem.text}
          variant="standard"
          className="input_receipt"
        />
        <div className="buttons-tab">
          <Link to="/">
            <div className="buttons-tab_btn">
              <Button variant="outlined">Save</Button>
            </div>
          </Link>
          <div className="buttons-tab_btn">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
