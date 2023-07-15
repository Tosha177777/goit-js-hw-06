const divCounter = document.getElementById("counter");
const obj = {
  decBtn: divCounter.querySelector("[data-action = 'decrement']"),
  valueEl: divCounter.querySelector("#value"),
  incBtn: divCounter.querySelector("[data-action = 'increment']"),
};

let counterValue = 0;

obj.decBtn.addEventListener("click", minus);
obj.incBtn.addEventListener("click", plus);

function minus() {
  counterValue -= 1;

  obj.valueEl.textContent = counterValue;
}
function plus() {
  counterValue += 1;
  obj.valueEl.textContent = counterValue;
}
