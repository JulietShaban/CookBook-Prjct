import { EDIT_RECEIPT, RECEIPTS_LIST_RECIEVED } from "./receiptsActions";
import { DELETE_RECEIPT } from "./receiptsActions";
import { CREATE_RECEIPT } from "./receiptsActions";
const initialState = {
  receiptsList: [],
};

const receiptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIPTS_LIST_RECIEVED:
      return {
        ...state,
        receiptsList: action.payload.receiptsList,
      };
    case DELETE_RECEIPT: {
      const newList = state.receiptsList.filter((receipt) => {
        return receipt.id !== action.payload.receiptId;
      });
      return {
        ...state,
        receiptsList: newList,
      };
    }
    case CREATE_RECEIPT: {
      return {
        ...state,
        receiptsList: [...state.receiptsList, action.payload.receiptData],
      };
    }

    case EDIT_RECEIPT: {
      const newList = state.receiptsList.map((receipt) => {
        if (receipt.id === action.payload.receiptId) {
          return action.payload.updatedReceipt;
        }
        return receipt;
      });
      return {
        ...state,
        receiptsList: newList,
      };
    }

    default:
      return state;
  }
};

export default receiptsReducer;
