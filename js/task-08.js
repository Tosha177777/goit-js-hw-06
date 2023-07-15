const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  let element = e.currentTarget;
  if (form.email.value.trim() === "" || form.password.value.trim() === "") {
    window.alert("Заповніть всі поля");
  } else {
    const formData = new FormData(element);
    formData.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });
  }

  form.reset();
}
