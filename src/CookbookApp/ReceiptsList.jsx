import React from "react";
import { Grid } from "@mui/material";
import Receipt from "./Receipt";
import { useRouteMatch } from "react-router-dom";

const ReceiptsList = ({ receiptsList }) => {
  
  return (
    <Grid container>
      {receiptsList.map((receipt) => (
        <Grid key={receipt.id}  item xs={3}>
          <Receipt {...receipt} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReceiptsList;
