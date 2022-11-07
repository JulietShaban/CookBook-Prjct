import React, { Component } from "react";
import { connect } from "react-redux";
import ReceiptsList from "./CookbookApp/ReceiptsList";
import { BrowserRouter, Route } from "react-router-dom";
import * as receiptsActions from "./CookbookApp/redux/receiptsActions";
import { sortedReceiptsListSelector } from "./CookbookApp/redux/reciptsSelectors";

class App extends Component {
  conponentDidMount() {
    this.props.getReceiptsList();
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <ReceiptsList
            receipts={this.props.receipts}
            onChange={this.props.updateReceipt}
            onDelete={this.props.deleteReceipt}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

const mapDispatch = {
  getReceiptsList: receiptsActions.getReceiptsList,
  updateReceiptsList: receiptsActions.updateReceipt,
  deleteReceiptsList: receiptsActions.deleteReceipt,
  createReceiptsList: receiptsActions.createReceipt,
};

const mapState = (state) => {
  return {
    receipts: sortedReceiptsListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(App);
