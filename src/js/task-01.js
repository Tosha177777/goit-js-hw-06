const listEl = document.getElementById("categories");
console.log(`Number of categories: ${listEl.children.length}`);

const categoriesItems = listEl.querySelectorAll(".item");
categoriesItems.forEach((categoriesItem) => {
  const titleEL = categoriesItem.querySelector("h2").textContent;
  console.log(`Category: ${titleEL}`);

  const categoriesItemAll = categoriesItem.querySelectorAll("li");

  const countEl = categoriesItemAll.length;
  console.log(`Elements: ${countEl}`);
});
