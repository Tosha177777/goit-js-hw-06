function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.getElementById("controls");
const obj = {
  input: divEl.querySelector("input"),
  create: divEl.querySelector("[data-create]"),
  destroy: divEl.querySelector("[data-destroy]"),
};
const boxes = document.getElementById("boxes");

obj.create.addEventListener("click", createBoxes);
obj.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(obj.input.value);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.style.width = `${30 + i * 10}px`;
    innerDiv.style.height = `${30 + i * 10}px`;
    innerDiv.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(innerDiv);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
