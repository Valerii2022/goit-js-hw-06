const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let array = [];

const newItemEl = ingredients.map((element) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = element;

  itemEl.classList.add("item");

  array.push(itemEl);
});

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...array);
