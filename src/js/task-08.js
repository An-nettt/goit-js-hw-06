const refs = {
  formEl: document.querySelector(".login-form"),
};

refs.formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    if (value === "") {
      return console.log("Всі поля повинні бути заповнені!");
    }
    console.log(name);
    console.log(value);
    event.currentTarget.reset();
  });
}
