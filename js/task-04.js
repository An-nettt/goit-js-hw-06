let counterValue = 0;
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector("#value");

function addClick({ step = 1 }) {
  counterValue += step;
  updateValue();
  //   console.log(counterValue);
}

incrementBtn.addEventListener("click", addClick);

function removeClick({ step = 1 }) {
  counterValue -= step;
  updateValue();
  //   console.log(counterValue);
}

decrementBtn.addEventListener("click", removeClick);

function updateValue(params) {
  value.textContent = counterValue;
}
