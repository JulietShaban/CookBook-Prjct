import React from "react";

import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Grid } from "@mui/material";
import Receipt from "./Receipt";

const ReceiptsList = ({ receiptsList }) => {
  return (
    <>
      <h2 className="homepage__header">My recipes:</h2>
      <div className="homepage">
        <Button >
          <ArrowBackIosOutlinedIcon />
        </Button>
        <Grid container spacing={{ md: 3 }}>
          {receiptsList.map((receipt) => (
            <Grid key={receipt.id} item xs={3} md={4}>
              <Receipt {...receipt} />
            </Grid>
          ))}
        </Grid>
        <Button >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </div>
    </>
  );
};

export default ReceiptsList;
