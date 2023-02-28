const refs = {
  formEl: document.querySelector(".login-form"),
};

refs.formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(`Пошта: ${email.value}, пароль: ${password.value}`);

  if (email.value === "" || password.value === "") {
    window.alert("Всі поля повинні бути заповнені!");
  }

  event.currentTarget.reset();
}
