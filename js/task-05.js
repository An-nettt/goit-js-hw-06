const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value.trim();

  if (refs.output.textContent.length === 0) {
    refs.output.textContent = "Anonymous";
  }
}
