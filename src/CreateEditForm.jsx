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
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateReceipt,
  createReceipt,
} from "./CookbookApp/redux/receiptsActions";

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
  const dispatch = useDispatch();
  const receiptItem = useSelector(receiptSelector(id));

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleClose = () => {
    history.push("/");
  };

  // React.useEffect(() => {
  //   if (receiptItem) {
  //     setTitle(receiptItem.title);
  //     setText(receiptItem.text);
  //   }

  //   return () => {
  //     if (receiptItem) {
  //       setTitle("");
  //       setText("");
  //     }
  //   };
  // }, [receiptItem]);

  const onSubmit = () => {
    const data = {
      title,
      text,
    };

    console.log(data);

    id ? dispatch(updateReceipt(id, data)) : dispatch(createReceipt(data));
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
          variant="standard"
          lablel=""
          value={title}
          className="input"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="standard-basic"
          value={text}
          lablel=""
          variant="standard"
          className="input_receipt"
          onChange={(event) => setText(event.target.value)}
        />
        <div className="buttons-tab">
          <Link to="/">
            <div className="buttons-tab_btn">
              <Button onClick={onSubmit} variant="outlined">
                Save
              </Button>
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
