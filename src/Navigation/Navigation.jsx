import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";


function Navigation() {
    const history = useHistory();

    const handleRedirect = () => {
      history.push("/create");
    };
    const showFav = () => {
      history.push("/favorites");
    };
  return (
    <nav className="homepage">
      <img
        alt="food"
        className="homepage_img"
        src="https://www.bostonmagazine.com/wp-content/uploads/sites/2/2013/06/5-4.jpg"
      ></img>
      <div className="homepage_nav_sticker">
          <h1 className="homepage_nav_sticker_header">CooComunity</h1>
          <div className="homepage_nav_sticker_button">
            <Button onClick={handleRedirect} variant="outlined">
              Add Recipe
            </Button>
          </div>
          <div className="homepage_nav_sticker_login">
            <Button onClick={console.log("login")}>
              <LoginOutlinedIcon fontSize="medium" />
            </Button>
          </div>
          <div className="homepage_nav_sticker_favorites">
            <Button onClick={showFav}>
              <FavoriteBorderOutlinedIcon fontSize="medium" />
            </Button>
          </div>
        </div>
    </nav>
  );
}

export default Navigation;
