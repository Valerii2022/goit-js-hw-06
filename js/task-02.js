const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngredientsList = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");

  listElement.textContent = ingredient;

  listElement.classList.add("item");

  return listElement;

});

const ingredientsListRef = document.querySelector("#ingredients");

ingredientsListRef.append(...arrayIngredientsList);
