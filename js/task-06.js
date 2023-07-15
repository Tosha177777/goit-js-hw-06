const input = document.getElementById("validation-input");
// input.className = "#validation-input";
input.addEventListener("blur", onBlur);

function onBlur(e) {
  const lengthE = e.target.value.length;
  if (lengthE === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
