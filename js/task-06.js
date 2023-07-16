const input = document.getElementById("validation-input");
input.addEventListener("blur", onBlur);

function onBlur(e) {
  const lengthE = e.target.value.trim();

  if (lengthE.length === Number(input.dataset.length)) {
    validInvalid("valid", "invalid");
  } else {
    validInvalid("invalid", "valid");
  }
}

function validInvalid(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}
