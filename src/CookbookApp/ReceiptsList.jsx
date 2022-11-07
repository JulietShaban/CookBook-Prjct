import React from "react";
import Receipt from "./Receipt";

const ReceiptsList = ({ receipts, onDelete }) => {
  return (
    <>
      <h1 className="app-name">Your Receipts</h1>

      <ul className="unordered_list">
        {receipts.map((receipt) => (
          <Receipt key={receipt.id} {...receipt} handleDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ReceiptsList;
