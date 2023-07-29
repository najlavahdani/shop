const categoriesLabel = document.getElementById("categories-label");
const categoriesList = document.getElementById("categories-list");
const closeCategories = document.querySelector(".close-categories-in-filter");

categoriesLabel.addEventListener("click", function(event) {
  event.stopPropagation();
  categoriesLabel.parentElement.classList.toggle("active");
  if (closeCategories.innerHTML === "+") {
    closeCategories.innerHTML = "-";
  } else {
    closeCategories.innerHTML = "+";
  }
});


