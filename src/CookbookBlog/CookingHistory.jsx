import React from "react";

const CookingHistory = () => {
  return (
    <div className="blog">
      <h1 className="blog__history">History</h1>
      <p className="blog__history__parag">
        Phylogenetic analysis suggests that early hominids may have adopted
        cooking 1.8 million to 2.3 million years ago. Re-analysis of burnt bone
        fragments and plant ashes from the Wonderwerk Cave in South Africa has
        provided evidence supporting control of fire by early humans by 1
        million years ago. In his seminal work Catching Fire: How Cooking Made
        Us Human, Richard Wrangham suggested that evolution of bipedalism and a
        large cranial capacity meant that early Homo erectus regularly cooked
        food. However, unequivocal evidence in the archaeological record for the
        controlled use of fire begins at 400,000 BCE, long after Homo erectus.
        Archaeological evidence from 300,000 years ago, in the form of ancient
        hearths, earth ovens, burnt animal bones, and flint, are found across
        Europe and the Middle East. The oldest likely evidence (via heated fish
        teeth from a deep cave) of controlled use of fire to cook food by
        archaic humans was dated to ~780,000 years ago. Anthropologists think
        that widespread cooking fires began about 250,000 years ago when hearths
        first appeared.
      </p>
      <img
        alt="plate"
        src="https://i.pinimg.com/736x/af/93/3e/af933e60b17982f1077dbcffc9cf6e9b.jpg"
        className="blog__history__image"
      ></img>
    </div>
  );
};

export default CookingHistory;
