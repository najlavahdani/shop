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


  $(document).ready(function() {
    $(".another-image-option").click(function() {
      var clickedImageSrc = $(this).attr("src");
      $(".image img").attr("src", clickedImageSrc);
    });
  });