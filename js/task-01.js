const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesEl.length);

const categoryEl = document.querySelectorAll("h2");

categoryEl.forEach(function (category, index) {
  console.log(`Category: ${category.innerHTML}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});
