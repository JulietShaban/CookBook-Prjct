// map your recipes, with cards, in card you must have, cart contains photo, title, in cart you must have two actions buttot, first form information
// second delete cart
// if you click edit button, must redirect to edit form page

import React, { useEffect} from "react";
import { connect } from "react-redux";
import AddReceipt from "../AddReceipt";
import Receipt from "./Receipt";
import * as receiptsActions from "./redux/receiptsActions";
import { receiptsListSelector } from "./redux/reciptsSelectors";

function ReceiptsList() {
  
  console.log(this.props)
  return (
    <>
      <h1>Your Pocket CookBook</h1>
      <AddReceipt />
      <ul>
        {this.props.getReceiptsList().map((receipt) => (
          <Receipt key={receipt.id} {...receipt} />
        ))}
      </ul>
    </>
  );
}

const mapDispatch = {
  getReceiptsList: receiptsActions.getReceiptsList,
  updateReceipt: receiptsActions.updateReceipt,
  deleteReceipt: receiptsActions.deleteReceipt,
  createReceipt: receiptsActions.createReceipt,
};

const mapState = () => {
  return {
    receipts: receiptsListSelector,
  };
};

export default connect(mapState, mapDispatch)(ReceiptsList);
