const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
  textColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  let changeCol = getRandomHexColor();
  refs.textColor.textContent = `${changeCol}`;
  refs.bodyEl.style.backgroundColor = `${changeCol}`;
}
