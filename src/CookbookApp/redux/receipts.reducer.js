import { RECEIPTS_LIST_RECIEVED } from "./receiptsActions";



const initialState = {
  receiptsList: [
    {id:15, title: 'mama', text:"blah", image: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'}
  ],
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
