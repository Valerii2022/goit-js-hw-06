const buttonRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');

buttonRef.addEventListener('click', getRandomHexColor);


function getRandomHexColor() {
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}



