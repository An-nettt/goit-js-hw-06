const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...ingredient);
