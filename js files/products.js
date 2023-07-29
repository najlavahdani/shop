const filterBoxes = document.querySelectorAll(".box-in-filter");

filterBoxes.forEach(function(filterBox) {
  const label = filterBox.querySelector(".grouping-list-label");
  const list = label.nextElementSibling;
  const closeBox = label.querySelector(".close-box-in-filter");

  label.addEventListener("click", function(event) {
    event.stopPropagation();
    list.classList.toggle("active");
    if (list.classList.contains("active")) {
      closeBox.textContent = "-";
    } else {
      closeBox.textContent = "+";
    }
  });
});


