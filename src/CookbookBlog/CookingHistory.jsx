import React from "react";

const CookingHistory = () => {
  return (
    <div className="blog">
      <div className="blog__history">
        <h1 className="blog__history__header">Topic of the day</h1>
        <img className="blog__history__teller" src="https://kbzahntechnik.de/wp-content/uploads/2017/06/Fotolia_118630837_XL-1170x780.jpg" alt="portrait"/>
        <h3 className="blog__history__teller__name">Karen Shmidt</h3>
        <h2 className="blog__history__subheader">What is a food blog?</h2>
        <p className="blog__history__parag">
          Actually, it depends. But essentially a food blog is one where
          bloggers bring together food, blogs about and photography featuring
          food under the wider umbrella of food journalism. If a foodie is
          someone who loves learning about, tasting and sharing food - so a food
          blog takes this love one step further and puts it into print to be
          shared. A food blog might share the history and culture of dishes from
          around the world, including recipes and the best places to try them.
          It might use different types of media - articles, photos and video -
          to capture the writer's favourite foods and recipes. A food blog might
          be dedicated to the food of a specific region or culture, or a certain
          diet - veganism, being one example. From the Mom who documents her
          kids favorite recipes, to the semi-pro chef sharing their tricks of
          the trade - a food blog aims to bring people together in the name of
          good food.
        </p>
      </div>
      <img
        alt="plate"
        src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg"
        className="blog__history__image"
      ></img>
    </div>
  );
};

export default CookingHistory;
