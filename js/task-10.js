const refs = {
  creatBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  inputEl: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

refs.creatBtn.addEventListener("click", addElements);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  // console.log(amount);
  let width = 20;
  let height = 20;
  if (amount > 0) {
    for (let i = 1; i <= amount; i += 1) {
      // let elementDiv = document.createElement("div");

      // console.log(elementDiv);
      refs.boxes.insertAdjacentHTML("afterbegin", `<div data-box></div>`);
      const box = document.querySelector("[data-box]");
      box.style.cssText = `width: ${(width += 10)}px ; height: ${(height += 10)}px; background-color: ${getRandomHexColor()}`;
    }
  }
}

function addElements(event) {
  let elements = createBoxes(refs.inputEl.value);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
