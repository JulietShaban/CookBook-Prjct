import React from "react";
import ReceiptsList from "./CookbookApp/ReceiptsList";
import { BrowserRouter, Route } from "react-router-dom";
import FormReceipt from "./CookbookApp/FormReceipt";

// add fetch to get list, list you must store in redux, useDispatch for fetch, useSelector for getList from reducer
// if you have list show component with list.map
// if not redirect to /addRecipe and show page for create recipe



function App(store) {
  console.log(store)
  return (
    <BrowserRouter>
    <Route exact path="/">
      <ReceiptsList />
    </Route>
    <Route path="/editRecipe/:id">
      <FormReceipt />
    </Route>
    <Route path="/createRecipe">
    <FormReceipt />
    </Route>
  </BrowserRouter>

  );
}

export default App;
