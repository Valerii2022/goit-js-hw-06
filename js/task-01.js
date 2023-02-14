const categoriesNumberEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesNumberEl.length}`);

// for (const el of categoriesNumberEl) {
//   console.log(`Category: ${el.firstElementChild.textContent}`);
//   console.log(`Elements: ${el.lastElementChild.children.length}`);
// }

categoriesNumberEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
