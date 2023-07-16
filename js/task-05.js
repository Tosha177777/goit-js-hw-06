const nameInput = document.getElementById("name-input");
const greet = document.getElementById("name-output");
let anonymous = "Anonymous";

greet.textContent = anonymous;

nameInput.addEventListener("input", onInput);

function onInput(event) {
  greet.textContent = event.target.value.trim() || anonymous;
}
