const refs = {
  fontEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.fontEl.addEventListener("input", chandgeControl);

function chandgeControl(event) {
  //   console.log(refs.fontEl.textContent);
  //   refs.fontEl.textContent = event.currentTarget.value;
  let changeSize = event.currentTarget.value;
  refs.textEl.style.fontSize = `${changeSize}px`;
}
