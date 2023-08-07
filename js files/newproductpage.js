function toggleBorderColor(element) {
    element.classList.toggle('green-border');
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
    }
  }
  
  function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
  }


document.addEventListener("DOMContentLoaded", function() {
    var anotherImages = document.querySelectorAll(".another-images img");
    var mainImage = document.querySelector(".image img");
  
    for (var i = 0; i < anotherImages.length; i++) {
      anotherImages[i].addEventListener("click", function() {
        var newImageSrc = this.getAttribute("src");
        mainImage.setAttribute("src", newImageSrc);
      });
    }
  });