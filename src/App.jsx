import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReceiptsList from "./CookbookApp/ReceiptsList";
import { Route, useHistory } from "react-router-dom";
import * as receiptsActions from "./CookbookApp/redux/receiptsActions";
import { receiptsListSelector } from "./CookbookApp/redux/receiptsSelectors";
import CreateEditForm from "./CreateEditForm";
import CookingHistory from "./CookbookBlog/CookingHistory";

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
      <nav className="homepage_nav">
      <img
        alt="food"
        className="homepage_img"
        src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      ></img>
        <div className="homepage_nav_sticker">
          <h2 className="app-name" title="Welcome to your cookbook">
            my CookBook
          </h2>
          <div className="button_new">
            <Button onClick={handleRedirect} variant="outlined">
              Add Recipe
            </Button>
          </div>
        </div>
        <ReceiptsList receiptsList={receiptsList} />
        <Route path="/create">
          <CreateEditForm />
        </Route>
        <Route path="/edit/:id">
          <CreateEditForm />
        </Route>
      </nav>
      <CookingHistory />
    </Route>
  );
};

export default App;
