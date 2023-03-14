const baseUrl = "https://63627aaf37f2167d6f65814c.mockapi.io/receipts";

export const createRecipe = (data) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res;
      }
    })
    .then((res) => res.json());
};

export const fetchRecipesList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const updateRecipe = (recipeId, recipeData) => {
  
  return fetch(`${baseUrl}/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;utc-8",
    },
    body: JSON.stringify(recipeData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update the rec");
    }
  });
};

export const deleteRecipe = (recipeId) => {
  return fetch(`${baseUrl}/${recipeId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete the recipe");
      }
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
