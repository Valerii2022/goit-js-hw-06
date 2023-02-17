const categoriesNumberRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesNumberRef.length}`);

categoriesNumberRef.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
