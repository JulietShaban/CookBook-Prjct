import React from "react";
import { Route } from "react-router-dom";
import AddReceipt from "../AddReceipt";
function Receipt({ id, receiptData }) {
  return (
    <li id={id}>
      {receiptData.title}
      <button className="buttons-common">
        <i class=" material-icons">delete</i>
      </button>
      <button className="buttons-common">
        <i class=" material-icons">
          edit
          <Route path="/editRecipe/:id">
          <AddReceipt id={id} />
          </Route>
        </i>
      </button>
    </li>
  );
}

export default Receipt;
