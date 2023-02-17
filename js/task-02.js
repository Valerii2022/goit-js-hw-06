const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let arrayIngredientsList = [];

ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;

  itemEl.classList.add("item");

  arrayIngredientsList.push(itemEl);
});

const ingredientsListRef = document.querySelector("#ingredients");

ingredientsListRef.append(...arrayIngredientsList);
