const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.classList.add("invalid");

  inputEl.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.replace("valid", "invalid");
});
