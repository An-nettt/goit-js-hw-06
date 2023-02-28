const refs = {
  fontEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.fontEl.addEventListener("input", chandgeControl);

function chandgeControl(event) {
  let changeSize = event.currentTarget.value;
  refs.textEl.style.fontSize = `${changeSize}px`;
}
