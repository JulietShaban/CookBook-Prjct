import React from "react";

import Receipt from "./Receipt";

const ReceiptsList = ({ receipts, onChange, onDelete }) => {
  return (
    <>
      <h1>Your Pocket CookBook</h1>

      <ul>
        {receipts.map((receipt) => (
          <Receipt key={receipt.id} {...receipt} />
        ))}
      </ul>
    </>
  );
};

export default ReceiptsList;
