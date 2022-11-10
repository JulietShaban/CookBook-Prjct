import { createSelector } from "reselect";

export const receiptsListSelector = (state) => state.receipts.receiptsList;

export const sortedReceiptsListSelector = createSelector(
  [receiptsListSelector],
  (receiptsList) => {
    return receiptsList.slice().sort();
  }
);

export const receiptSelector = (id) => (state) =>
  state.receipts.receiptsList.find((receipt) => receipt.id === id)
  