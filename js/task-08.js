const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  let elements = e.currentTarget;
  if (
    elements.email.value.trim() === "" ||
    elements.password.value.trim() === ""
  ) {
    window.alert("Заповніть всі поля");
  } else {
    const formData = new FormData(elements);
    const data = {};
    for (let [name, value] of formData) {
      data[name] = value;
    }
    console.log(data);
  }

  form.reset();
}
