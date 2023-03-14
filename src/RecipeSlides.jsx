import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import RecipeReviewCard from "./RecipeReviewCard";


const RecipeSlides = ({ recipesList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const recipe = recipesList.map((recipe) => (
    <li className="card__item" key={recipe.id}>
    <RecipeReviewCard
      
      title={recipe.title}
      image={'https://loremflickr.com/640/480/food'}
      id={recipe.id}
      text={recipe.text}
    />
    </li>
  ));

  return (
    <>
      <h2 className="homepage__list-name">My recipes:</h2>
      <div className="homepage__slider">
        <Carousel showDots={true} responsive={responsive}>
        {recipe}
        </Carousel>
      </div>
    </>
  );
};

export default RecipeSlides;
