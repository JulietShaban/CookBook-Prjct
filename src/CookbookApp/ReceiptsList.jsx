import React from "react";
import Receipt from "./Receipt";

const ReceiptsList = ({ receipts, onDelete }) => {
  return (
    <>
      <h1 >Your Pocket CookBook</h1>

      <ul className="unordered-list">
        {receipts.map((receipt) => (
          <Receipt key={receipt.id} {...receipt} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default ReceiptsList;
