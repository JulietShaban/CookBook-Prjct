import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeSlides = ({ recipesList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const recipe = recipesList.map((recipe) => (
    <li className="recipes__section__card-item" key={recipe.id}>
      <RecipeCard
        title={recipe.title}
        image={"https://loremflickr.com/640/480/food"}
        id={recipe.id}
        text={recipe.text}
      />
    </li>
  ));

  return (
    <section className="recipes__section">
      <Carousel showDots={true} responsive={responsive}>
        {recipe}
      </Carousel>
    </section>
  );
};

export default RecipeSlides;
