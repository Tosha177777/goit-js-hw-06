const btn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
