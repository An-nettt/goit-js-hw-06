const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  console.log(inputEl.value.length);
  console.log(Number(inputEl.dataset.length));
  console.log(inputEl.value.length === Number(inputEl.dataset.length));
  inputEl.classList.add("invalid");
  inputEl.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.replace("valid", "invalid");
});
