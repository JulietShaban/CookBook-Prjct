import { RECEIPTS_LIST_RECIEVED } from "./receiptsActions";

const initialState = {
  receiptsList: [
    {
      id: 15,
      title: "vegetablah",
      text: "blah",
      image:
        "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
    },
    {
      id: 5,
      title: "pasta",
      text: "blah-bla",
      image:
        "https://klopotenko.com/wp-content/uploads/2019/11/Pasta-s-anchousamy_siteWeb.jpg?v=1572984095",
    },
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
