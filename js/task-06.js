const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.length;
  const inputDataValue = Number(inputRef.dataset.length);

  if (inputValue === inputDataValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
