import React from "react";
import Receipt from "./Receipt";
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

const ReceiptsList = ({ receipts, onDelete }) => {
  return (
    <>
      <h1 className="app-name">Your Receipts</h1>
      <div className="button_new">
      <Link to="/create">
      <Button  variant="outlined">New</Button>
      </Link>
      
      </div>
      
      <ul className="unordered_list">
        {receipts.map((receipt) => (
          <Receipt key={receipt.id} {...receipt} handleDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ReceiptsList;
