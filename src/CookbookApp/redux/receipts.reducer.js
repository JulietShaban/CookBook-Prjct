import { RECEIPTS_LIST_RECIEVED } from "./receiptsActions";

// add recipeItem and edit item

const initialState = {
  receiptsList: [{ title: "pasta", id: 1, text: "text" }],
};

const receiptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIPTS_LIST_RECIEVED:
      return {
        ...state,
        receiptsList: action.payload.receiptsList,
      };
    default:
      return state;
  }
};

export default receiptsReducer;
