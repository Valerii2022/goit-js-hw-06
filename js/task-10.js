const refs = {
  createBtnRef: document.querySelector("[data-create]"),
  destroyBtnref: document.querySelector("[data-destroy]"),
  boxesRef: document.querySelector("#boxes"),
  controlsRef: document.querySelector("#controls"),
}

// const createBtnRef = document.querySelector("[data-create]");
// const destroyBtnref = document.querySelector("[data-destroy]");
// const boxesRef = document.querySelector("#boxes");
// const controlsRef = document.querySelector("#controls");

refs.createBtnRef.addEventListener("click", createBoxes);
refs.destroyBtnref.addEventListener("click", onBtnResetClick);

function createBoxes(amount) {
  amount = refs.controlsRef.firstElementChild.value;
  const newElement = [];
  for (let i = 0; i < amount; i += 1) {
    let newEl = document.createElement("div");
    newEl.style.width = `${30 + (i - 1) * 10}px`;
    newEl.style.height = `${30 + (i - 1) * 10}px`;
    newEl.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    newEl.style.margin = "5px";
    newElement.push(newEl);
  }
  refs.boxesRef.append(...newElement);
}

function onBtnResetClick() {
  refs.boxesRef.replaceChildren();
  refs.controlsRef.firstElementChild.value = '';
}
