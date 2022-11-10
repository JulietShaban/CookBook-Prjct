import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReceiptsList from "./CookbookApp/ReceiptsList";
import { Route, useHistory } from "react-router-dom";
import * as receiptsActions from "./CookbookApp/redux/receiptsActions";
import { receiptsListSelector } from "./CookbookApp/redux/receiptsSelectors";
import CreateEditForm from "./CreateEditForm";

import Button from "@mui/material/Button";

const App = () => {
  const dispatch = useDispatch();
  const receiptsList = useSelector(receiptsListSelector);
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/create");
  };

  useEffect(() => {
    dispatch(receiptsActions.getReceiptsList());
  }, [dispatch]);

  return (
    <Route path="/">
      <h1 className="app-name">Your Receipts</h1>
      <div className="button_new">
        <Button onClick={handleRedirect} variant="outlined">
          New
        </Button>
      </div>

      <ReceiptsList receiptsList={receiptsList} />
      <Route path="/create">
        <CreateEditForm />
      </Route>
      <Route path="/edit/:id">
        <CreateEditForm />
      </Route>
    </Route>
  );
};

export default App;
