import * as receiptsGateway from "../ReceiptsGateway";
export const DELETE_RECEIPT = "DELETE_RECEIPT";
export const RECEIPTS_LIST_RECIEVED = "RECEIPTS_LIST_RECIEVED";
export const CREATE_RECEIPT = "CREATE_RECEIPT";
export const EDIT_RECEIPT = "EDIT_RECEIPT";

export const receiptsListRecieved = (receiptsList) => {
  return {
    type: RECEIPTS_LIST_RECIEVED,
    payload: {
      receiptsList,
    },
  };
};

export const getReceiptsList = () => {
  const thunkAction = (dispatch) => {
    receiptsGateway
      .fetchReceiptsList()
      .then((receiptsList) => dispatch(receiptsListRecieved(receiptsList)));
  };
  return thunkAction;
};

export const updateReceipt = (receiptId, newReceiptData) => {
  const thunkAction = function (dispatch) {
    const updatedReceipt = {
      id: receiptId,
      ...newReceiptData,
    };

    receiptsGateway
      .updateReceipt(receiptId, updatedReceipt)
      .then(() => dispatch(editReceiptAction(receiptId, updatedReceipt)));
  };
  return thunkAction;
};

const createReceiptAction = (receiptData) => {
  console.log(receiptData);
  return {
    type: CREATE_RECEIPT,
    payload: { receiptData },
  };
};
const editReceiptAction = (receiptId, updatedReceipt) => {
  return {
    type: EDIT_RECEIPT,
    payload: { receiptId, updatedReceipt },
  };
};
const deleteReceiptAction = (receiptId) => {
  return {
    type: DELETE_RECEIPT,
    payload: { receiptId },
  };
};

export const removeRecipe = (receiptId) => {
  const thunkAction = (dispatch) =>
    receiptsGateway.deleteReceipt(receiptId).then(() => {
      dispatch(deleteReceiptAction(receiptId));
    });
  return thunkAction;
};

export const createReceipt = (data) => (dispatch) => {
  receiptsGateway
    .createReceipt(data)
    .then((res) => dispatch(createReceiptAction(res)));
};
