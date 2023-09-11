const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
// const fragment = document.createDocumentFragment();
// for (let i = 0; i < ingredients.length; i++) {
//   let element = document.createElement("li");
//   element.textContent = ingredients[i];
//   element.classList.add("item");
//   fragment.appendChild(element);
// }
// listEl.appendChild(fragment);

const elements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");
  return liEl;
});
listEl.append(...elements);
