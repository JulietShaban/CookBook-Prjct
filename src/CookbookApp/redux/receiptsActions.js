import * as receiptsGateway from "../ReceiptsGateway";
import { receiptsListSelector } from "./receiptsSelectors";
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
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const receipt = state.receiptsList.find(
      (receipt) => receipt.id === receiptId
    );
    const updatedReceipt = {
      ...receipt,
      receiptData: newReceiptData,
    };
    receiptsGateway
      .updateReceipt(receiptId, updatedReceipt)
      .then(() => dispatch(editReceiptAction(receiptId, updatedReceipt)));
  };
  return thunkAction;
};

const createReceiptAction = (receiptData) => {
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

export const createReceipt = (title, text, photo) => {
  const thunkAction = function (dispatch) {
    const receiptData = {
      title,
      text,
      photo,
    };
    receiptsGateway
      .createReceipt(receiptData)
      .then(() => dispatch(createReceiptAction(receiptData)));
  };

  return thunkAction;
};
