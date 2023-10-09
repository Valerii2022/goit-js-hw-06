const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputChange);

textRef.style.fontSize = `${inputRef.value}px`;

function onInputChange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
