import * as receiptsGateway from "../ReceiptsGateway";
import { receiptsListSelector } from "./reciptsSelectors";

export const RECEIPTS_LIST_RECIEVED = "RECEIPTS_LIST_RECIEVED";

export const receiptsListRecieved = (receiptsList) => {
  const action = {
    type: RECEIPTS_LIST_RECIEVED,
    payload: {
      receiptsList,
    },
  };
  return action;
};

export const getReceiptsList = () => {
  const thunkAction = function (dispatch) {
    receiptsGateway
      .fetchReceiptsList()
      .then((receiptsList) => dispatch(receiptsListRecieved(receiptsList)));
  };
  return thunkAction;
};

export const updateReceipt = (receiptId, newReceiptData) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const receiptsList = receiptsListSelector(state);
    const receipt = receiptsList.find((receipt) => receipt.id === receiptId);
    const updatedReceipt = {
      ...receipt,
      receiptData: newReceiptData,
    };
    receiptsGateway
      .updateReceipt(receiptId, updatedReceipt)
      .then(() => dispatch(getReceiptsList()));
  };
  return thunkAction;
};

export const deleteReceipt = (receiptId) => {
  const thunkAction = function (dispatch) {
    receiptsGateway
      .deleteReceipt(receiptId)
      .then(() => dispatch(getReceiptsList()));
  };

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
      .then(() => dispatch(getReceiptsList()));
  };

  return thunkAction;
};
