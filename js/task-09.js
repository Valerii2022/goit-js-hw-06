const buttonRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

buttonRef.addEventListener('click', getRandomHexColor);


function getRandomHexColor() {
  const backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  document.body.style.backgroundColor = backgroundColor;
  textRef.textContent = backgroundColor;
}



