const refs = {
  createBtnRef: document.querySelector("[data-create]"),
  destroyBtnref: document.querySelector("[data-destroy]"),
  boxesRef: document.querySelector("#boxes"),
  controlsRef: document.querySelector("input"),
};

refs.createBtnRef.addEventListener("click", handleCreateBtnClick);
refs.destroyBtnref.addEventListener("click", destroyBoxes);

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function handleCreateBtnClick() {
  createBoxes();
}

function handleDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  amount = refs.controlsRef.value;
  const newElement = [];
  for (let i = 0; i < amount; i += 1) {
    let newEl = document.createElement("div");
    newEl.style.width = `${30 + (i - 1) * 10}px`;
    newEl.style.height = `${30 + (i - 1) * 10}px`;
    newEl.style.backgroundColor = randomColor();
    newEl.style.margin = "5px";
    newElement.push(newEl);
  }
  refs.boxesRef.append(...newElement);
}

function destroyBoxes() {
  refs.boxesRef.innerHTML = "";
  refs.controlsRef.value = "";
}
