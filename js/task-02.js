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
  // console.log(ingredientEl);
  return ingredientEl;
});
// console.log(ingredient);
const listEl = document.querySelector("#ingredients");
console.log(listEl);
listEl.append(...ingredient);
