export const receiptsListSelector = (state) => state.receipts.receiptsList;

export const receiptSelector = (id) => (state) =>
  state.receipts.receiptsList.find((receipt) => receipt.id === id);
