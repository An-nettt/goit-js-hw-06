const refs = {
  creatBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  inputEl: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

refs.creatBtn.addEventListener("click", addElements);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
