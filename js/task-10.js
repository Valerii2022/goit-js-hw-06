const createBtnRef = document.querySelector("[data-create]");
const destroyBtnref = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");

createBtnRef.addEventListener("click", getRandomHexColor);
destroyBtnref.addEventListener("click", onBtnResetClick);

function createBoxes(amount) {
  amount = controlsRef.firstElementChild.value;
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
  boxesRef.append(...newElement);
  console.log(boxesRef);
}

function getRandomHexColor() {
  createBoxes();
}

function onBtnResetClick() {
  console.dir(boxesRef.children);
}
