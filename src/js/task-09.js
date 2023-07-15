const btn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
