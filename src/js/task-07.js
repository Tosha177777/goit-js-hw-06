const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", onRange);

function onRange(e) {
  console.log(Number(e.target.value));
  text.style.fontSize = `${e.target.value}px`;
}
