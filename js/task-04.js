const refs = {
  btnDecrementRef: document.querySelector('[data-action="decrement"]'),
  btnIncrementRef: document.querySelector('[data-action="increment"]'),
  counterRef: document.querySelector("#value"),
};

let counterValue = 0;

refs.btnDecrementRef.addEventListener("click", onDecrementClick);
refs.btnIncrementRef.addEventListener("click", onInbrementBtnClick);

function onDecrementClick() {
  counterValue -= 1;
  refs.counterRef.textContent = counterValue;
}

function onInbrementBtnClick() {
  counterValue += 1;
  refs.counterRef.textContent = counterValue;
}
