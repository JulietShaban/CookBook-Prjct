

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeReviewCard from "../RecipeReviewCard";

const RandomRecipe = ({ recipesList }) => {
  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const recipe = arr[randomIndex];
   
    return recipe;
  };

  const recipe = getRandomItem(recipesList);

  return (
    <section className="random-recipe__section">
      <img
        className="random-recipe__section__background"
        src="https://images.pexels.com/photos/4846353/pexels-photo-4846353.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
        alt="food"
      />
      <h2 className="random-recipe__section__header">Today on our menu:</h2>
      <h3 className="random-recipe__section__subheader">
        When it's hard to choose what to cook you can try a random recipe. It'll
        be definately an exciting experience.
      </h3>
      <div className="random-recipe__section__item">
        <RecipeCard
          // id={recipe.id}
          // title={recipe.title}
          // text={recipe.text}
          image={
            "https://lh3.googleusercontent.com/3MTaO0OfMwrDKcuhwDjHzKKdO-_daDhCPCqmFfSZSkQC5oXq60Ogpd6I57zjE-ZSsCrom1Wrw4i305jccSlbNXMQ1oaI7AVvMA=w1667-h1667-c-rj-v1-e365"
          }
        />
      </div>
    </section>
  );
};

export default RandomRecipe;
